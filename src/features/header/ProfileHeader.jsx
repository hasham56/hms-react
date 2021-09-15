import React, { useState } from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import { useSelector } from 'react-redux'
import ContentLoader from 'react-content-loader'
import { useDispatch } from 'react-redux'
import { changeIconLocation } from './iconReducer'
import { EditPhotoModal } from '../editPhoto/EditPhotoModal'
import { setEditProfile } from '../profile/profileActions'

export const ProfileHeader = () => {
    
    const [openPhotoModal, setOpenPhotoModal] = useState(false)

    const dispatch = useDispatch()
    const { currentUserProfile } = useSelector(state => state.profile)
    const { iconLocation } = useSelector(state => state.icon)
    const { photoSource } = useSelector(state => state.photo)

    const handleEditProfile = () => {
        dispatch(setEditProfile(true))
        dispatch(changeIconLocation('left'))
    }

    const handlePhotoEdit = () => {
        setOpenPhotoModal(true)
    }

    return (
        <div className='header'>
            <EditPhotoModal open={openPhotoModal} setOpen={setOpenPhotoModal} />
            <MediaQuery minWidth={993}>
                <Image className='header-image' src={'/assets/header/maskGroupRestLargeScreen.png'} />
            </MediaQuery>
            <MediaQuery maxWidth={992}>
                <Image className='header-image' src={'/assets/header/maskGroupRestSmallScreen.png'} />
            </MediaQuery>
            <div className='header-head-profile'>
                <Grid>
                    <Grid.Column computer={7} tablet={7} mobile={16}>
                        <div style={{position: 'relative'}}>
                            <Image id='profile-picture'
                                src={photoSource
                                    ? photoSource.toDataURL()
                                    : (currentUserProfile ?
                                        currentUserProfile.photoURL :
                                        '/assets/header/profilePicture.png'
                                    )}
                            />
                            {iconLocation === 'left' &&
                                <Icon
                                    name='pencil'
                                    circular
                                    inverted
                                    onClick={() => handlePhotoEdit()}
                                    style={{ position: 'absolute', top: '60%', left: '100%', transform: 'translateX(-100%)' }}
                                />}
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={9} tablet={8} mobile={16} textAlign='left' style={{position: 'relative'}}>
                        {currentUserProfile ? <div className='profile-data'>
                            <Grid>
                                <Grid.Column width={14}>
                                    <p className='primary-text display-name'>
                                        {currentUserProfile.displayName}&emsp;
                                    </p>
                                </Grid.Column>
                                {iconLocation === 'right' &&
                                    <Grid.Column width={2} textAlign='left'>
                                        <Icon name='pencil' circular  inverted onClick={() => handleEditProfile()} />
                                    </Grid.Column>}
                            </Grid>
                            <p className='main-text info'>
                                <Icon name='mail outline' />
                                {currentUserProfile.email}&emsp;
                                <Icon name='phone' />
                                {currentUserProfile.phone === '' ? 'Phone Number' : currentUserProfile.phone}<br />
                                <Icon name='map marker alternate' />
                                {currentUserProfile.address === '' ? 'Address' : currentUserProfile.phone}
                            </p>
                        </div> :
                        <div className='profile-data'>
                            <ContentLoader
                                speed={2}
                                width={400}
                                height={160}
                                viewBox="0 0 400 160"
                                backgroundColor="#2e95a0"
                                foregroundColor="#005963"    
                            >
                                <rect x="0" y="30%" rx="4" ry="4" width="175" height="25" />
                                <rect x="0" y="55%" rx="3" ry="3" width="300" height="10" />
                                <rect x="0" y="65%" rx="3" ry="3" width="300" height="10" />
                            </ContentLoader>
                        </div>}
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}