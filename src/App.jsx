import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Login from './Login'
import Navigation from './Navigation'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' exact element = {<Home />}></Route>
          <Route path='/blog' exact element = {<Blog />}></Route>
          <Route path='/about' element = {<About />}></Route>
          <Route path='/login' element = {<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
