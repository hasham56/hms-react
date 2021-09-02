import React from 'react'
import './home.scss'
import { Counter } from './homeSections/Counter'
import { Information } from './homeSections/Information'
import { Team } from './homeSections/Team'
import { Services } from './homeSections/Services'
import { Reviews } from './homeSections/Reviews'
import { ContactForm } from './homeSections/ContactForm'
import { LatestNews } from './homeSections/LatestNews'

export const Home = () => {

    return (
        <div className='home'>
            <Counter />
            <Information />
            <Team />
            <Services />
            <Reviews />
            <ContactForm />
            <LatestNews />
        </div>
    )
}