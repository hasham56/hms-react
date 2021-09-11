import React, { useState } from 'react'
import { EditProfile } from './EditProfile'
import { RecentAppointments } from './RecentAppointments'
import { Appointments } from './Appointments'

export const Profile = ({ editProfile }) => {
    
    const [appointments, showAppointments] = useState(false)

    return (
        <>
            {editProfile ?
                <EditProfile /> :
                (appointments ?
                    <Appointments /> :
                    <RecentAppointments showAppointments={showAppointments} />)
            }
        </>
    )
}