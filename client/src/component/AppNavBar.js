import React, { Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

  Container,
  NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom"
import RegisterModal from "./auth/RegisterModal"
import LoginModal from './auth/LoginModal';
import { useSelector,useDispatch } from 'react-redux';
import {logout} from "../redux/actions/authActions"



function AppNavBar() {

  const isAuth = useSelector((state) => state.authReducer.isAUTH)
  const user = useSelector((state) => state.authReducer.user)

  console.log(isAuth,"authhhh")

  const dispatch=useDispatch()
  const logoutUser=()=>{
    dispatch(logout())
  }

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashbord">
          <span>
            <strong>{user ? `welcome ${user.name}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <NavLink onClick={logoutUser}>
        Logout
      </NavLink>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem >
        <LoginModal />
      </NavItem>
    </Fragment>
  )

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>

          <Collapse navbar>
            <Nav navbar>
            {isAuth?authLinks:guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavBar