
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Contact from "./Pages/Contact";
import { ContextGlobal } from './Components/utils/global.context';
import { useContext } from 'react';



function App() {

  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;



  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}> 
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        <Route path= '/detail/:id' element={<Detail/>}/>
        <Route path= '/Favs' element={<Favs/>}/>

      </Routes>
      <Footer/>
    
    </div>  
  );
}

export default App;
