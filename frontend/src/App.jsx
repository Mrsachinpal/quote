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
import ImageQuote from './pages/ImageQuote'
import Author from './pages/Author'
import AuthorShow from './pages/AuthorShow'
import Tagshow from './pages/Tagshow'

function App() {
  return (
    <div>
      <Mainnavbar />
      <main>
        <Routes>
          <Route path='/' element={<Allquote />} />
          <Route path='/quote' element={<Allquote />} />         
          <Route path='/add' element={<Addquote />} />
          <Route path='/quotes/:id' element={<ShowQuote />} />
          <Route path='/author' element={<Author/>} />
          <Route path='/authors/:author' element={<AuthorShow/>} />
          <Route path='/quote/:tag' element={<Tagshow/>} />

        </Routes>
      </main>
      <Footer/>

    </div>
  )
}

export default App