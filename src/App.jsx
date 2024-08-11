import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' exact element = {<Home />} />
      {/* changed login path from /login to /*/}
      <Route path='/' exact element = {<Login />} />
      <Route path='/signup' exact element = {<Signup />} />
    </Routes>
  </Router>
)
function App() {
  return <>{routes}</>
}

export default App
