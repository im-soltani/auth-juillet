import React,{useState} from 'react'
import { NavLink, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import {useDispatch} from "react-redux"
import{useNavigate} from "react-router-dom"
import { loginUser } from '../../redux/actions/authActions'

function LoginModal() {
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email,"my email")
    console.log(password,"my password")

    const toggle = () => {
        setModal(!modal)
    }
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleLogin=()=>{
dispatch(loginUser({email,password}))
navigate("/dashbord")
toggle()
    }
    return (
        <div> <NavLink onClick={toggle} href="#">Login</NavLink>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>

                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                className='mb-3'
                                onChange={(e) => setEmail(e.target.value)} />
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                className='mb-3'
                                onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <Button onClick={handleLogin}>Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default LoginModal