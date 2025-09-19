import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
    </div>
  )
}

export default App