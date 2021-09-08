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
                    text={authenticated ? 'Hi! ' + currentUser.email : 'Account'}
                    icon={authenticated ? 'caret down' : 'user outline'}
                    labeled={authenticated ? false : true}
                    button
                    className='nav-label account icon'
                    style={{ float: 'right' }}
                >
                    {authenticated
                        ? <Dropdown.Menu className='dropdown'>
                            <Dropdown.Item className='item' as={NavLink} to='/profile'>Profile</Dropdown.Item>
                            <Dropdown.Item className='item' as={NavLink} to='/appointments'>Appt. History</Dropdown.Item>
                            <Dropdown.Item className='item' as={NavLink} to='/favourite'>Favourites</Dropdown.Item>
                            <Dropdown.Item className='item' onClick={() => handleSignOut()}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        : <Dropdown.Menu className='dropdown'>
                            <Dropdown.Item className='item' as={NavLink} to='/login'><Icon name='sign in' />&nbsp;&nbsp;Login</Dropdown.Item>
                            <Dropdown.Item className='item' as={NavLink} to='/signup'><Icon name='signup' />&nbsp;&nbsp;Sign Up</Dropdown.Item>
                        </Dropdown.Menu>}
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