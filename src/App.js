import React from 'react'
import "./App.css"
import {Link,Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/About'>About</Link>
        <Link className='link' to='/Products'>Products</Link>
        <Link className='link' to='/Contact'>Contact</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App