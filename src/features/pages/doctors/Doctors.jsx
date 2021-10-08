import React, { useEffect, useState } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './doctors.scss'
import { Container, Grid, Dropdown, Checkbox, Button, Icon } from 'semantic-ui-react'
import { dataFromSnapshot, getAllDoctors } from '../../../app/firestore/firebaseStore'
import { useDispatch } from 'react-redux'
import { fetchAllDoctors } from './doctorsReducer'
import { useSelector } from 'react-redux'
import { DoctorLoaderListEntry } from './doctorsList/DoctorLoaderList'
import { DoctorsList } from './doctorsList/DoctorsList'

export const Doctors = () => {

    const dispatch = useDispatch()

    const { doctors } = useSelector(state => state.doctors)

    // Dublicate state for creating filter
    const [doctorsList, setDoctorsList] = useState([])

    const [experienceRange, setExperienceRange] = useState([2, 5])

    // states for filters
    const [specialties, setSpecialties] = useState([])
    const [selectedSpecialty, setSelectedSpecialty] = useState([])
    const [doctorFound, setDoctorFound] = useState(true)

    // states for slicing
    const [initialSlice, setInitialSlice] = useState(0)
    const [finalSlice, setFinalSlice] = useState(6)

    // states for pagination
    const [pageNumber, setPageNumber] = useState(2)
    const [totalPages, setTotalPages] = useState(0)
    const [firstEntry, setFirstEntry] = useState(' active')
    const [midEntry, setMidEntry] = useState('')
    const [lastEntry, setLastEntry] = useState('')

    useEffect(() => {
        const data = getAllDoctors({
            next: snapshot => dispatch(fetchAllDoctors(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot)))),
            error: err => console.log(err)
        })

        return data
    }, [dispatch])

    useEffect(() => {
        setDoctorsList(doctors)

        let extractSpecialities = []
        doctors.map(doctor => doctor.specialty.map(specialty => extractSpecialities.push(specialty)))
        extractSpecialities = extractSpecialities.filter((specialty, i) => extractSpecialities.indexOf(specialty) === i)
        setSpecialties(extractSpecialities)
    }, [doctors])

    useEffect(() => {
        if (doctorsList.length) {
            const decimal = ((doctorsList.length / 6) - Math.floor(doctorsList.length / 6)) !== 0
            setTotalPages(decimal ? Math.floor(doctorsList.length / 6) + 1 : doctorsList.length / 6)
        }
    }, [doctorsList])

    useEffect(() => {
        if (selectedSpecialty.length === 0) {
            setDoctorFound(true)
            setDoctorsList(doctors)
        }
        else if (selectedSpecialty.length <= 2 ) {
            let filteredList = []
            if (selectedSpecialty.length === 1) {
                doctors.filter(doctor =>
                    doctor.specialty.map(doctorSpecialty =>
                        selectedSpecialty[0] === doctorSpecialty && filteredList.push(doctor)))
            } else if (selectedSpecialty.length === 2) {
                doctors.filter(doctor =>
                    ((selectedSpecialty[0] === doctor.specialty[0] && selectedSpecialty[1] === doctor.specialty[1]) ||
                        (selectedSpecialty[0] === doctor.specialty[1] && selectedSpecialty[1] === doctor.specialty[0]))
                    && filteredList.push(doctor))
            }
            if (filteredList) setDoctorsList(filteredList)
            else setDoctorFound(false)
        } else {
                setDoctorFound(true)
                setDoctorsList(doctors)
        }
        // eslint-disable-next-line
    }, [selectedSpecialty])

    const handleCheckBoxSpecialty = (e, { value, checked }) => {
        let specialty = [...selectedSpecialty]
        if (checked) {
            specialty.push(value)
            setSelectedSpecialty(specialty)
        } else {
            let index
            specialty.filter((specialty, i) => (specialty === value) ? index = i : '')
            specialty.splice(index, 1)
            setSelectedSpecialty(specialty)
        }
    }

    const handleSliderChange = (value) => {
        setExperienceRange(value)
    }

    const handleGoBack = (page) => {
        if (midEntry === ' active' && page !== 1) {
            setPageNumber(page)
            setInitialSlice((page - 1) * 6)
            setFinalSlice(page * 6)
        }
        else if (page === 1) {
            setFirstEntry(' active')
            setMidEntry('')
            setLastEntry('')
            setInitialSlice(0)
            setFinalSlice(6)
        }
        else {
            handlePage(page + 1)
        }
    }

    const handlePage = (page) => {
        setFirstEntry('')
        setMidEntry(' active')
        setLastEntry('')
        setInitialSlice((page - 1) * 6)
        setFinalSlice(page * 6)
    }

    const handleGoForward = (page) => {
        if (midEntry === ' active' && page < totalPages) {
            setPageNumber(page)
            setInitialSlice((page - 1) * 6)
            setFinalSlice(page * 6)
        }
        else if (page === totalPages) {
            setFirstEntry('')
            setMidEntry('')
            setLastEntry(' active')
            if (finalSlice !== doctorsList.length) {
                setInitialSlice(doctorsList.length - (doctorsList.length - finalSlice))
                setFinalSlice(doctorsList.length)
            }
        }
        else {
            handlePage(page - 1)
        }
    }

    return (
        <div className='doctors-list'>
            <Container>
                <Grid>
                    <Grid.Column computer={5}>
                        <p className='main-text text'>Speciality</p>
                        {specialties.length ?
                            <div className='filter-area'>
                                {
                                    specialties.map(specialty => <Checkbox
                                        value={specialty}
                                        onChange={handleCheckBoxSpecialty}
                                        key={specialty}
                                        label={specialty} />)
                                }
                            </div> :
                            <div className='filter-area'>
                                <Checkbox disabled label='Loading...' />
                                <Checkbox disabled label='Loading...' />
                                <Checkbox disabled label='Loading...' />
                            </div>}
                        <p className='main-text text'>Gender</p>
                        <div className='filter-area'>
                            <Checkbox label='No Preference' />
                            <Checkbox label='Male' />
                            <Checkbox label='Female' />
                        </div>
                        <p className='main-text text'>Years of Experience</p>
                        {doctorsList.length ? 
                            <div className='filter-area slider-holder'>
                                <Range
                                    className='slider'
                                    defaultValue={experienceRange}
                                    pushable={true}
                                    min={1}
                                    max={15}
                                    allowCross={false}
                                    trackStyle={[{ backgroundColor: '#00acb1' }]}
                                    handleStyle={[{borderColor: '#00acb1', borderWidth: '1px'}, {borderColor: '#00acb1', borderWidth: '1px'}]}
                                    onChange={(e) => handleSliderChange(e)}
                                />
                                <p className='main-text slider-text'>
                                        {experienceRange[0] === 1 ?
                                        experienceRange[0] + ' Year' :
                                        experienceRange[0] + ' Years'} - {experienceRange[1]} Years
                                </p>
                            </div> :
                            <div className='filter-area slider-holder'> 
                                <p className='main-text slider-text'>
                                        (..) Years - (..) Years
                                </p>
                            </div>}
                    </Grid.Column>
                    <Grid.Column computer={11}>
                        <div className='top-sort'>
                            <p className='main-text text'>
                                {doctorsList.length ?
                                    (firstEntry === ' active' ?
                                        `Showing 1-${doctorsList.length <= 6 ? doctorsList.length : (pageNumber - 1) * 6} of ${doctorsList.length} Results` :
                                        (lastEntry === ' active') ?
                                            `Showing ${((pageNumber) * 6)}-${doctorsList.length} of ${doctorsList.length} Results` :
                                            `Showing ${((pageNumber - 1) * 6)}-${doctorsList.length <= 6 ?
                                                doctorsList.length :
                                                pageNumber * 6} of ${doctorsList.length} Results`) :
                                'Loading...'}
                            </p>
                            <Dropdown
                                text='Sort by&emsp;'
                                icon='angle down'
                                labeled={true}
                                button
                                className='push'
                            >
                                <Dropdown.Menu className='dropdown'>
                                    <Dropdown.Item className='item'>Name</Dropdown.Item>
                                    <Dropdown.Item className='item'>Age</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        {doctorsList.length ?
                            <DoctorsList doctorsList={doctorsList.slice(initialSlice, finalSlice)} doctorFound={doctorFound} /> :
                            <DoctorLoaderListEntry />}

                        <div className='pagination'>
                            <Button
                                disabled={!doctorsList.length && true}
                                className={'btn' + firstEntry}
                                content={pageNumber === 2 ? pageNumber - 1 : <Icon name='angle left' size='large' />}
                                onClick={() => handleGoBack(pageNumber - 1)}
                            />
                            {totalPages !== 1 &&
                                <Button
                                    disabled={(!doctorsList.length) && true}
                                    className={'btn' + midEntry}
                                    content={pageNumber}
                                    onClick={() => handlePage(pageNumber)}
                                />
                            }
                            {!(totalPages <= 2) && 
                                <Button
                                    disabled={(!doctorsList.length) && true}
                                    className={'btn' + lastEntry}
                                    content={pageNumber + 1 === totalPages ? pageNumber + 1 : <Icon name='angle right' size='large' />}
                                    onClick={() => handleGoForward(pageNumber + 1)}
                                />
                            }
                        </div>

                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}