import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem } from 'reactstrap'
import { ABOUT, HOME, PROFILE, REGISTER, SERVICE, USERS } from '../shared/RouterConstant';

export default function NavbarComponent({ userSessions, username, logout }) {

    return (
        <div>
            <Navbar color="light" className='rounded-2' expand="xl" light>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink to={HOME}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            {!(userSessions) ? <NavLink to={REGISTER}>Register</NavLink> : null}
                        </NavItem>
                        <NavItem>
                            {(userSessions) ? <NavLink to={PROFILE}>Profile</NavLink> : null}
                        </NavItem>
                        <NavItem>
                            {(userSessions) ? <NavLink to={SERVICE}>Services</NavLink> : null}
                        </NavItem>
                        <NavItem>
                            {(userSessions) ? <NavLink to={USERS}>Users</NavLink> : null}
                        </NavItem>
                        <NavItem>
                            <NavLink to={ABOUT}>About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavbarText>
                    <div >{(userSessions) ?
                        <div>
                            Logged In As: {username + " "}
                            <button type='button' onClick={logout} className='bg-danger rounded-2 border-0'>Logout</button>
                        </div> :
                        <button type='button' onClick={logout} className='bg-success rounded-2 border-0'>Login</button>}
                    </div>
                </NavbarText>
            </Navbar>
        </div>
    )
}
