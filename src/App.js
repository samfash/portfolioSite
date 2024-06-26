import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// pages
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Work from './pages/work';
import Contact from './pages/contact';

//component
import Header from './components/header';
import Footer from './components/footer';

const App = ()=>{
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/who-i-am' element={<About/>} />
        <Route path='/skills-i-have' element={<Skills/>} />
        <Route path='/what-i-do' element={<Work/>} />
        <Route path='/contact-me' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
