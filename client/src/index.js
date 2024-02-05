import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
// import './index';
import App from './App.js';
import OtdelStore from './store/OtdelStore.js';




export const Context = createContext(null)
console.log("Какая то ссылка", process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Context.Provider value={{
      otdel : new OtdelStore()
  }}>
    <App />
  </Context.Provider>
);