import React from 'react'
import { EditProfile } from './EditProfile'
import { RecentAppointments } from './RecentAppointments'

export const Profile = ({ editProfile, setEditProfile }) => {

    return (
        <>
            {editProfile ?
                <EditProfile setEditProfile={setEditProfile} /> :
                <RecentAppointments />
            }
        </>
    )
}