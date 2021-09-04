import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

export const RestHeader = ({pageTitle, pageLink, pageLinkName}) => {

    return (
        <div className='header'>
            <Image className='header-image' src={'/assets/header/maskGroupRest.png'} />
            <div className='header-head-rest'>
                <p className='header-primary-text header-primary-text-rest'>{pageTitle}</p>
                <p className='header-secondary-text'>
                    <Link className='link' to='/'>
                        Home
                    </Link> | <Link className='link active' to={`/${pageLink}`}>
                        {pageLinkName}
                    </Link>
                </p>
            </div>
        </div>
    )
}