import React from 'react'
import { Dimmer } from 'semantic-ui-react'
import { PassThrouthLoading } from 'react-loadingg'

export const LoadingComponent = () => {
    return (
        <Dimmer active>
            <PassThrouthLoading color='#01ACB1' size='large' />
        </Dimmer>
    )
}