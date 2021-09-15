import React from 'react'
import { useSelector } from 'react-redux'
import { EditProfile } from './EditProfile'
import { RecentAppointments } from './RecentAppointments'

export const Profile = () => {

    const { editProfile } = useSelector(state => state.profile)

    return (
        <>
            {editProfile ?
                <EditProfile /> :
                <RecentAppointments />
            }
        </>
    )
}