import React from 'react'
import { Icon } from 'semantic-ui-react'

export const MyCustomOption = ({ active, content, onClick }) => {

    return (
        <p className={'option' + (active ? ' active' : '')} onClick={onClick}>{content}<Icon name='caret right' /></p>
    )
}