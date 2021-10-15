import React from 'react'
import { Grid } from 'semantic-ui-react'
import ContentLoader from 'react-content-loader'

export const FAQLoader = () => {

    return (
        <Grid>
            <Grid.Column className='image-holder' computer={5}>
                <ContentLoader
                    speed={2}
                    width={'100%'}
                    height={'400px'}
                    backgroundColor="#2e95a0"
                    foregroundColor="#005963"
                >
                    <rect x="0" y="0" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="55px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="110px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="165px" rx="4" ry="4" width="100%" height="40px" />
                </ContentLoader>
            </Grid.Column>
            <Grid.Column className='portion division' style={{height: '200px'}} computer={11}>
                <ContentLoader
                    speed={2}
                    width={'100%'}
                    height={'400px'}
                    backgroundColor="#2e95a0"
                    foregroundColor="#005963"    
                >
                    <rect x="0" y="0" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="55px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="110px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="165px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="220px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="275px" rx="4" ry="4" width="100%" height="40px" />
                    <rect x="0" y="330px" rx="4" ry="4" width="100%" height="40px" />
                </ContentLoader>
            </Grid.Column>
        </Grid>
    )
}