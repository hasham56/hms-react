import React from 'react'
import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Button, Container, Icon, Label, Image } from 'semantic-ui-react'

export const Navbar = () => {



    return (
        <Container className='nav-bar' fixed='top'>
            <Container className='nav-nav' fixed='top'>
                <Label className='nav-label' basic content='2072 Pinnickicick Street, WA 98370' icon='map marker alternate' />
                <Label className='nav-label' basic content='info@website.com' icon='mail outline' />
                <Label className='nav-label' basic content='Account' icon='user outline' style={{float: 'right'}} />
                <Menu secondary>
                    <Container className='nav-items'>
                        <Menu.Item as={Link} to='/' className='nav-head-logo' header>
                            <Image className='nav-logo' src={'/assets/logo.png'} size='tiny' verticalAlign='middle' />
                        </Menu.Item>
                        <Menu.Item as={NavLink} exact to='/' className='nav-item push' content='Home' />
                        <Menu.Item as={NavLink} to='/doctors' className='nav-item' content='Doctors' />
                        <Menu.Item as={NavLink} to='/about' className='nav-item' content='About' />
                        <Menu.Item as={NavLink} to='/services' className='nav-item' content='Services' />
                        <Menu.Item as={NavLink} to='/news' className='nav-item' content='News' />
                        <Menu.Item as={NavLink} to='/contact' className='nav-item' content='Contact' />
                        <Menu.Item>
                            <Button className='btn-secondary nav-button'>
                                <p>Find A Doctor&nbsp;&emsp;
                                <Icon name='plus' /></p>
                            </Button>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Container>
        </Container>
    )
}