import React from 'react'
import './account.scss'
import { useField } from 'formik'
import { Input, FormField } from 'semantic-ui-react'

export const MyInputField = ({...props}) => {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <Input
                className='input-field'
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <label className='error-label' basic color='red'>{meta.error}</label>
            ) : null}
        </FormField>
    )
}
