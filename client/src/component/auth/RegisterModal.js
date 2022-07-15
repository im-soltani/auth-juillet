import React, { useState } from 'react'
import { NavLink, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import {useDispatch} from "react-redux"
import { registerUser } from '../../redux/actions/authActions'
import { useNavigate } from 'react-router-dom';

function RegisterModal() {

  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch=useDispatch()
  const navigate = useNavigate();
   
  const toggle = () => {
    setModal(!modal)
  }
  const handleRegister=()=>{
    const newUser={name,lastName,email,password}
    dispatch(registerUser(newUser))
    navigate("/dashbord")
    toggle()

  }
  return (
    <div>
      <NavLink onClick={toggle} href="#">Register</NavLink>
      <Modal isOpen={modal} size="lg" style={{maxWidth: '500px', width: '100%'}} >
        <ModalHeader>
          Register
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                className='mb-3'
                onChange={(e)=>setName(e.target.value)}
              />
              <Label>lastName</Label>
              <Input
                type="text"
                name="name"
                className='mb-3'
                onChange={(e)=>setLastName(e.target.value)}

              />
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                className='mb-3'
                onChange={(e)=>setEmail(e.target.value)}

              />
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                className='mb-3'
                onChange={(e)=>setPassword(e.target.value)}

              />
              <div style={{ display: "flex", justifyContent: "space-around",width:"200 px" }}>
                <Button
                  color="dark"
                  onClick={handleRegister}

                >Register</Button>
                <Button
                  color="dark"
                  onClick={toggle}

                >Annuler</Button>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>

    </div>

  )
}

export default RegisterModal