import React from 'react'
import './wrongURL.scss'
import { Container, Image } from 'semantic-ui-react'

export const WrongURL = () => {

    return (
        <div className='wrong-url'>
            <Container>
                <Image src={'/assets/wrongURL/wrongURL.png'} />
            </Container>
        </div>
    )
}