
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter"
import NavBar from './components/NavBar.js';
import { observer } from 'mobx-react-lite';
import { Context } from './index.js';

import { Spinner } from 'react-bootstrap';



const App = observer( () => {
  const [loading, setLoading] = useState(false)
  
  
  useEffect( () => {
   
      
    }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
    
  }

  return (
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        
      </BrowserRouter>
      

  );
})

export default App;
