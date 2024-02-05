import React, { useContext, useEffect } from 'react'
import { Context } from '../index.js'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min.js'
import { PROJECT_ROUTE,MATERIALS_ROUTE,TYPESOFWORK_ROUTE,PREMISES_ROUTE,STAGES_ROUTE } from '../utils/consts.js'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {jwtDecode} from "jwt-decode";
import { getOneOtdel } from '../http/otdelAPI.js'


 const NavBar = observer(()  => {
    const {user} = useContext(Context)
    const {otdel} = useContext(Context)
    const history = useHistory()
  //   const tok = localStorage.getItem('token')  
  //   let token

  //   useEffect(() => {
  //     if (!user.isAuth) {
  //       token = user.token[0]
  //       console.log("не авторизован",token.Name)
  //       otdel.setOneOtdel([{Name:''}])
  //    }else{
  //      token = jwtDecode(tok)
  //      console.log("авторизован",token.Name)
  //      getOneOtdel(token.Otdel_id).then(data => otdel.setOneOtdel(data))
  //    }
      
  // }, [])

    
    /*const token = jwtDecode(localStorage.getItem('token'))
    
    */
  
    // const logOut =() => {
    //   user.setUser({})
    //   user.setIsAuth(false)
    //   localStorage.removeItem("token")
    //   history.push(LOGIN_ROUTE)
    // }
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