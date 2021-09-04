import React, { useEffect, useState } from 'react'
import './account.scss'
import { SignUpOptions } from './SignUpOptions'
import { SignUpForm } from './SignUpForm'

export const SignUp = () => {

    const [options, setOptions] = useState(true)

    useEffect(() => {
        setOptions(true)
    }, [])
    
    return (
        <div>
            {options ? <SignUpOptions showSignUpForm={setOptions} /> : <SignUpForm showOptions={setOptions} /> }
        </div>
    )
}