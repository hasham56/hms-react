import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'

export const RestHeader = ({ pageTitle, pageLink, pageLinkName }) => {
    
    const { id } = useParams()

    return (
        <div className='header'>
            <MediaQuery minWidth={993}>
                <Image className='header-image' src={'/assets/header/maskGroupRestLargeScreen.png'} />
            </MediaQuery>
            <MediaQuery maxWidth={992}>
                <Image className='header-image' src={'/assets/header/maskGroupRestSmallScreen.png'} />
            </MediaQuery>
            <div className='header-head-rest'>
                <p className='header-primary-text header-primary-text-rest'>{pageTitle}</p>
                {pageLink && pageLinkName &&
                <p className='header-secondary-text'>
                    <Link className='link' to='/'>
                        Home
                    </Link> | <Link className='link active' to={`/${pageLink}${id !== undefined ? `/` + id : ''}`}>
                        {pageLinkName}
                    </Link>
                </p>}
            </div>
        </div>
    )
}