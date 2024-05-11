import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainnavbar from './component/Mainnavbar'
import Allquote from './pages/Allquote'
import Addquote from './pages/Addquote'
import ShowQuote from './pages/ShowQuote'
import Home from './pages/Home'
import Footer from './component/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
    <div>
      <Mainnavbar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/quote' element={<Allquote />} />         
          <Route path='/add' element={<Addquote />} />
          <Route path='/quotes/:id' element={<ShowQuote />} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/logout' element={<Logout/>} /> */}
          <Route path='/login/register' element={<Signup/>} />


        </Routes>
      </main>
      <Footer/>

    </div>
  )
}

export default App