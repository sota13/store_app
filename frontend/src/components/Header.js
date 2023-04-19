import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Store App</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">


                        {userInfo ? (
                                <NavDropdown title={userInfo.name} id='name'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}

                        <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        </LinkContainer>
                        


                        {userInfo && userInfo.isAdmin && (
                                <Nav>
                                    <LinkContainer to='/admin/userlist'>
                                        <Nav.Link>Users</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <Nav.Link>Products</Nav.Link>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <Nav.Link>Orders</Nav.Link>
                                    </LinkContainer>

                                </Nav>
                            )}

                            


                        </Nav>
                        <SearchBox />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
