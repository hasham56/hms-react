import React from 'react'
import { useField } from 'formik'
import { FormField, Icon } from 'semantic-ui-react'

export const MyTextArea = ({ label=false, labelValue='', icon=false, iconName='', ...props}) => {

    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error} style={{position: 'relative'}}>
            {label && <label className='label'>{labelValue}</label>}
            <textarea
                className='text-area'
                {...field}
                {...props}
            />
            {icon && (meta.touched && meta.error ?
                <Icon className='textarea-icon' color='red' name={iconName} /> :
                <Icon className='textarea-icon' name={iconName} />)}
            {meta.touched && meta.error ? (
                <label className='error-label' basic color='red'>{meta.error}</label>
            ) : <div className='empty-label'></div>}
        </FormField>
    )
}
