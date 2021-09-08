import React, { useState } from 'react'
import './navbar.scss'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Menu, Button, Container, Icon, Label, Image, Dropdown } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../account/authActions'
import { signOutFirebase } from '../../app/firestore/firebaseService'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Navbar = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const [navBar, setNavBar] = useState('nav-items')
    const { authenticated, currentUser } = useSelector(state => state.auth)
    const showError = (message) => {
        toast.error(message, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            transition: Slide,
            theme: 'colored',
            pauseOnFocusLoss: false
        })
    }

    function responsiveNav() {
        if (navBar === 'nav-items') {
            setNavBar('nav-items responsive')
        } else {
            setNavBar('nav-items')
        }
    }

    const handleSignOut = async () => {
        try {
            await signOutFirebase()
            dispatch(signOutUser())
            history.push('/login')
        }
        catch (error) {
            showError('Something went wrong!')
        }
    }

    return (
        <div className='navbar' fixed='top'>
            <div className='nav-top'>
                <Label className='nav-label mobile-view' basic content='2072 Pinnickicick Street, WA 98370' icon='map marker alternate' />
                <Label className='nav-label mobile-view' basic content='info@website.com' icon='mail outline' />
                <Dropdown
                    text={authenticated ? currentUser.email : 'Account'}
                    icon='user outline'
                    labeled
                    button
                    className='nav-label account icon'
                    style={{ float: 'right' }}
                >
                    <Dropdown.Menu className='dropdown'>
                        <Dropdown.Item className='item'>
                            {authenticated
                                ? <Link className='sign-link' to='/profile'><Icon name='settings' />&nbsp;&nbsp;Profile Settings</Link>
                                : <Link className='sign-link' to='/login'><Icon name='sign in' />&nbsp;&nbsp;Login</Link>}
                        </Dropdown.Item>
                        <Dropdown.Item className='item'>
                            {authenticated
                                ? <p className='sign-link' onClick={() => handleSignOut()}><Icon name='sign out alternate' />&nbsp;&nbsp;Sign Out</p>
                                : <Link className='sign-link' to='/signup'><Icon name='signup' />&nbsp;&nbsp;Sign Up</Link>}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Menu className='nav-bottom' secondary>
                <Container className={navBar} style={{position: 'relative'}}>
                    <Menu.Item as={Link} to='/' className='nav-head-logo' header>
                        <Image className='nav-logo' src={'/assets/logo.png'} size='tiny' verticalAlign='middle' />
                    </Menu.Item>
                    <Menu.Item as={NavLink} exact to='/' className='nav-item push' content='Home' />
                    <Menu.Item as={NavLink} to='/doctors' className='nav-item' content='Doctors' />
                    <Menu.Item as={NavLink} to='/about' className='nav-item' content='About' />
                    <Menu.Item as={NavLink} to='/services' className='nav-item' content='Services' />
                    <Menu.Item as={NavLink} to='/news' className='nav-item' content='News' />
                    <Menu.Item as={NavLink} to='/contact' className='nav-item' content='Contact' />
                    <Menu.Item className='nav-item'>
                        <Button className='btn-secondary nav-button'>
                            <p>Find A Doctor&nbsp;&emsp;
                            <Icon name='plus' /></p>
                        </Button>
                    </Menu.Item>
                    <Menu.Item className='bars push' onClick={responsiveNav}>
                        <Icon className='bar-icon' name='bars' size='big' />
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}