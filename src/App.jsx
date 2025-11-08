
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Projects from './pages/Projects'
import Stair from './components/common/Stair'
import { useEffect, useState } from 'react'


const App = () => {
  const location = useLocation()
  const [showStair, setShowStair] = useState(false)

  useEffect(() => {
    // Trigger stair animation on route change
    setShowStair(true)
    const timer = setTimeout(() => {
      setShowStair(false)
    }, 1500) // Duration matches your animation time
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  
  return (
    <div>
      {showStair && <Stair />}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App