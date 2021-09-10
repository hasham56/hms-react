import React from 'react'
import { Grid, Image, Icon } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import { useSelector } from 'react-redux'
import ContentLoader from 'react-content-loader'

export const ProfileHeader = () => {

    const { currentUserProfile } = useSelector(state => state.profile)

    return (
        <div className='header'>
            <MediaQuery minWidth={993}>
                <Image className='header-image' src={'/assets/header/maskGroupRestLargeScreen.png'} />
            </MediaQuery>
            <MediaQuery maxWidth={992}>
                <Image className='header-image' src={'/assets/header/maskGroupRestSmallScreen.png'} />
            </MediaQuery>
            <div className='header-head-profile'>
                <Grid>
                    <Grid.Column computer={7} tablet={8} mobile={16}>
                        <Image id='profile-picture' src={'/assets/header/profilePicture.png'} />
                    </Grid.Column>
                    <Grid.Column computer={9} tablet={8} mobile={16} textAlign='left' style={{position: 'relative'}}>
                        {currentUserProfile ?<div className='profile-data'>
                            <Grid>
                                <Grid.Column width={14}>
                                    <p className='primary-text display-name'>
                                        {currentUserProfile.displayName}&emsp;
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={2} textAlign='left'>
                                    <Icon name='pencil' size='small' circular  inverted />
                                </Grid.Column>
                            </Grid>
                            <p className='main-text info'>
                                <Icon name='mail outline' />
                                {currentUserProfile.email}&emsp;
                                <Icon name='phone' />
                                {currentUserProfile.phone === null ? 'Phone Number' : currentUserProfile.phone}<br />
                                <Icon name='map marker alternate' />
                                {currentUserProfile.address === null ? 'Address' : currentUserProfile.phone}
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