import React from 'react'
import { useField } from 'formik'
import { FormField } from 'semantic-ui-react'

export const MyTextArea = ({label=false, labelValue='', ...props}) => {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            {label && <label className='label'>{labelValue}</label>}
            <textarea
                className='text-area'
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <label className='error-label' basic color='red'>{meta.error}</label>
            ) : null}
        </FormField>
    )
}
