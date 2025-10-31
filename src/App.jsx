
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Projects from './pages/Projects'


const App = () => {

  
  return (
    <div>

      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/history' element={<History/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App