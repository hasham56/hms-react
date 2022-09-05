import React, { useEffect, useState } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './doctors.scss'
import {
  Container,
  Grid,
  Dropdown,
  Button,
  Icon,
} from 'semantic-ui-react'
import {
  dataFromSnapshot,
  getAllDoctors,
  setDoctorData,
} from '../../../app/firestore/firebaseStore'
import { useDispatch } from 'react-redux'
import { fetchAllDoctors } from './doctorsReducer'
import { useSelector } from 'react-redux'
import { DoctorLoaderListEntry } from './doctorsList/DoctorLoaderList'
import { DoctorsList } from './doctorsList/DoctorsList'
import { toast, Slide } from 'react-toastify'

export const Doctors = () => {
  const showSuccess = (message) => {
    toast.success(message, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      transition: Slide,
      theme: 'colored',
      pauseOnFocusLoss: false,
    })
  }

  const dispatch = useDispatch()

  const { doctors } = useSelector((state) => state.doctors)

  // Dublicate state for creating filter
  const [doctorsList, setDoctorsList] = useState([])

  // states for filters
  const [specialties, setSpecialties] = useState([])
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
    getAllDoctors({
      next: (snapshot) =>
        dispatch(
          fetchAllDoctors(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot)),
          ),
        ),
      error: (err) => console.log(err),
    })
  }, [dispatch])

  useEffect(() => {
    setDoctorsList(doctors)

    let extractSpecialities = []
    doctors.map((doctor) =>
      doctor.specialty.map((specialty) => extractSpecialities.push(specialty)),
    )
    extractSpecialities = extractSpecialities.filter(
      (specialty, i) => extractSpecialities.indexOf(specialty) === i,
    )
    setSpecialties(extractSpecialities)
  }, [doctors])

  useEffect(() => {
    if (doctorsList.length) {
      const decimal =
        doctorsList.length / 6 - Math.floor(doctorsList.length / 6) !== 0
      setTotalPages(
        decimal
          ? Math.floor(doctorsList.length / 6) + 1
          : doctorsList.length / 6,
      )
    }
  }, [doctorsList])

  const handleGoBack = (page) => {
    if (midEntry === ' active' && page !== 1) {
      setPageNumber(page)
      setInitialSlice((page - 1) * 6)
      setFinalSlice(page * 6)
    } else if (page === 1) {
      setFirstEntry(' active')
      setMidEntry('')
      setLastEntry('')
      setInitialSlice(0)
      setFinalSlice(6)
    } else {
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
    } else if (page === totalPages) {
      setFirstEntry('')
      setMidEntry('')
      setLastEntry(' active')
      if (finalSlice !== doctorsList.length) {
        setInitialSlice(doctorsList.length - (doctorsList.length - finalSlice))
        setFinalSlice(doctorsList.length)
      }
    } else {
      handlePage(page - 1)
    }
  }

  const addDoctor = async () => {
    await setDoctorData()
    showSuccess('Doctor has been successfully added!')
  }

  return (
    <div className="doctors-list">
      <Container>
        <Grid>
          <Grid.Column computer={2}>
            {/* <Button className="btn-secondary" onClick={addDoctor}>
              <p>Add Doctor</p>&nbsp;&nbsp;
              <Icon name="user doctor" size="large" />
            </Button> */}
          </Grid.Column>
          <Grid.Column computer={12}>
            <div className="top-sort">
              <p className="main-text text">
                {doctorsList.length
                  ? firstEntry === ' active'
                    ? `Showing 1-${
                        doctorsList.length <= 6
                          ? doctorsList.length
                          : (pageNumber - 1) * 6
                      } of ${doctorsList.length} Results`
                    : lastEntry === ' active'
                    ? `Showing ${pageNumber * 6}-${doctorsList.length} of ${
                        doctorsList.length
                      } Results`
                    : `Showing ${(pageNumber - 1) * 6}-${
                        doctorsList.length <= 6
                          ? doctorsList.length
                          : pageNumber * 6
                      } of ${doctorsList.length} Results`
                  : 'Loading...'}
              </p>
              <Dropdown
                text="Sort by&emsp;"
                icon="angle down"
                labeled={true}
                button
                className="push"
              >
                <Dropdown.Menu className="dropdown">
                  <Dropdown.Item className="item">Name</Dropdown.Item>
                  <Dropdown.Item className="item">Age</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {doctorsList.length ? (
              <DoctorsList
                doctorsList={doctorsList.slice(initialSlice, finalSlice)}
                doctorFound={doctorFound}
              />
            ) : (
              <DoctorLoaderListEntry />
            )}

            <div className="pagination">
              <Button
                disabled={!doctorsList.length && true}
                className={'btn' + firstEntry}
                content={
                  pageNumber === 2 ? (
                    pageNumber - 1
                  ) : (
                    <Icon name="angle left" size="large" />
                  )
                }
                onClick={() => handleGoBack(pageNumber - 1)}
              />
              {totalPages !== 1 && (
                <Button
                  disabled={!doctorsList.length && true}
                  className={'btn' + midEntry}
                  content={pageNumber}
                  onClick={() => handlePage(pageNumber)}
                />
              )}
              {!(totalPages <= 2) && (
                <Button
                  disabled={!doctorsList.length && true}
                  className={'btn' + lastEntry}
                  content={
                    pageNumber + 1 === totalPages ? (
                      pageNumber + 1
                    ) : (
                      <Icon name="angle right" size="large" />
                    )
                  }
                  onClick={() => handleGoForward(pageNumber + 1)}
                />
              )}
            </div>
          </Grid.Column>
          <Grid.Column computer={2}></Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
