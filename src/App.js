//Router
import { Routes, Link, Route } from 'react-router-dom'

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
      <nav>
        <ul id='navigation'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/start'>Start</Link>
          </li>
          <li>
            <Link to='/last'>Last</Link>
          </li>
        </ul>
      </nav>
      <div className='AppContainer'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/start' element={<Start />} />
          <Route path='/last' element={<Last />} />
        </Routes>
        {/* <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/start' element={<Start />} />
          <Route path='/last' element={<Last />} />
          <Route path='*' element={<Home />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default App
