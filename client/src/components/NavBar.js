import React, { useContext, useEffect } from 'react'
import { Context } from '../index.js'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { PROJECT_ROUTE,MATERIALS_ROUTE,TYPESOFWORK_ROUTE,PREMISES_ROUTE,STAGES_ROUTE } from '../utils/consts.js'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'



 const NavBar = observer(()  => {
    return (
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
        <Navbar.Brand href="#home">Смета</Navbar.Brand>
            <Nav className="mr-2" style={{color:'white'}}>
              <Nav.Link href={PROJECT_ROUTE}>Мои проекты</Nav.Link>
              <Nav.Link href={MATERIALS_ROUTE}>Материалы</Nav.Link>
              <Nav.Link href={TYPESOFWORK_ROUTE}>Виды работ</Nav.Link>
              <Nav.Link href={PREMISES_ROUTE}>Помещения</Nav.Link>
              <Nav.Link href={STAGES_ROUTE}>Этапы</Nav.Link>
            </Nav>
            
        </Container>
    </Navbar>
    )

})
export default NavBar