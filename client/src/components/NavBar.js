import React, { useContext, useEffect } from 'react'
import { Context } from '../index.js'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min.js'
import { ADMIN_ROUTE, LOGIN_ROUTE, PROJECT_ROUTE, STATISTICS_ROUTE, USERLIST_ROUTE } from '../utils/consts.js'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {jwtDecode} from "jwt-decode";
import { getOneOtdel } from '../http/otdelAPI.js'


 const NavBar = observer(()  => {
    const {user} = useContext(Context)
    const {otdel} = useContext(Context)
    const history = useHistory()
    const tok = localStorage.getItem('token')  
    let token

    useEffect(() => {
      if (!user.isAuth) {
        token = user.token[0]
        console.log("не авторизован",token.Name)
        otdel.setOneOtdel([{Name:''}])
     }else{
       token = jwtDecode(tok)
       console.log("авторизован",token.Name)
       getOneOtdel(token.Otdel_id).then(data => otdel.setOneOtdel(data))
     }
      
  }, [])

    
    /*const token = jwtDecode(localStorage.getItem('token'))
    
    */
  
    const logOut =() => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem("token")
      history.push(LOGIN_ROUTE)
    }
    return (
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
        <Navbar.Brand href={USERLIST_ROUTE}>Задачник</Navbar.Brand>
          {user.isAuth ?
            <Nav className="mr-2" style={{color:'white'}}>
              <Nav.Link>Мои проекты</Nav.Link>
              <Nav.Link>Материалы</Nav.Link>
              <Nav.Link>Виды работ</Nav.Link>
              <Nav.Link>Помещения</Nav.Link>
              <Nav.Link>Этапы</Nav.Link>
              {/* <label 
                className="d-flex align-items-center"
                style={{marginRight: "10px"}}
                >
                  {(jwtDecode(localStorage.getItem('token')).Name)} | {otdel.OneOtdel.Name}
                </label>
              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => history.push(STATISTICS_ROUTE)}>Мои проекты
              </Button>

              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => history.push(PROJECT_ROUTE)}>Материалы
              </Button>

              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => history.push(PROJECT_ROUTE)}>Виды работ
              </Button>

              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => history.push(PROJECT_ROUTE)}>Помещения
              </Button>

              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => history.push(PROJECT_ROUTE)}>Этапы
              </Button>

              <Button 
                variant={"outline-light"} 
                style={{marginLeft: "20px"}}
                onClick={() => logOut()}>Выйти
              </Button> */}
                
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
              <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
        </Container>
    </Navbar>
    )

})
export default NavBar