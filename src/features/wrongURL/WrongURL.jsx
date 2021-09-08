import React from 'react'
import './wrongURL.scss'
import { Container, Image } from 'semantic-ui-react'

export const WrongURL = () => {

    return (
        <div className='wrong-url'>
            <Container className='animation-container'>
                <Image src={'/assets/wrongURL/wrongURL.png'} />
                <div className='animation cloud1' style={{width: '60%'}}><Image src={'/assets/wrongURL/cloud85.png'} /></div>
                <div className='animation cloud2' style={{width: '30%'}}><Image src={'/assets/wrongURL/cloud100.png'} /></div>
                <div className='animation cloud3' style={{width: '80%'}}><Image src={'/assets/wrongURL/cloudSingle.png'} /></div>
            </Container>
        </div>
    )
}