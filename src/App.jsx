import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Regularfetch from './Components/Regularfetch'
import ReactQueryFetch from './Components/ReactQueryFetch'
import { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom'
import Pagination from './Components/Pagination'
import InfinityScroll from './Components/InfinityScroll'

function App() {

  return (
    <>
    <BrowserRouter>
    <nav className='nav-container'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/regular">Regular Fetch</NavLink>
    <NavLink to="/react-query">React Query Fetch</NavLink>
    <NavLink to="/react-pagination">Pagination</NavLink>
    <NavLink to="/InfinityScroll">InfinityScroll</NavLink>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/regular' element={<Regularfetch />} />
      <Route path='/react-query' element={<ReactQueryFetch />} />
      <Route path='/react-pagination' element={<Pagination />} />
      <Route path='/InfinityScroll' element={<InfinityScroll />} />
    </Routes>    
    </BrowserRouter>

    </>
  )
}

export default App
