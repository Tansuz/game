//Router
import { Routes, Route } from 'react-router-dom'

// Styling
import './App.scss'

// Pages
import Home from './pages/home/Home'
import Start from './pages/start/Start'
import Last from './pages/last/Last'

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <div className='AppContainer'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/start' element={<Start />} />
          <Route path='/last' element={<Last />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
