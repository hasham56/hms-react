import React, { useState } from 'react'
import './account.scss'
import { SignUpOptions } from './SignUpOptions'
import { SignUpEmail } from './SignUpEmail'

export const SignUp = () => {

    const [options, setOptions] = useState(true)
    
    return (
        <div>
            {options ? <SignUpOptions showSignUpForm={setOptions} /> : <SignUpEmail showOptions={setOptions} /> }
        </div>
    )
}