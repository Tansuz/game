// React
import { useState, useEffect } from 'react'

// React router dom
import { Link, useNavigate } from 'react-router-dom'

//Styling & Bootstrap
import './Last.scss'
import { Button } from 'react-bootstrap'

const Last = () => {
  const [element, setElement] = useState(null)

  const navigate = useNavigate()

  const handleClickReset = () => navigate('/start')

  const storageItems = JSON.parse(localStorage.getItem('score'))

  useEffect(() => {
    if (storageItems && storageItems.length) {
      const htmlForScore = storageItems.map((e) => (
        <div key={e.date} className='textContainer'>
          <p>{e.date}</p>
          <h4>Score: {e.score}</h4>
        </div>
      ))
      setElement(htmlForScore)
    }
    /* eslint-disable */
  }, [storageItems && storageItems.length])

  const handleClickResetScore = () => {
    localStorage.clear()
    setElement()
  }

  return (
    <div className='lastContainer'>
      <h2>Leaderboard</h2>
      {element}
      <div className='linkContainer'>
        <Button id='button' variant='secondary' onClick={handleClickReset}>
          Restart
        </Button>
        <Button id='button' variant='outline-danger' onClick={handleClickResetScore}>
          Reset scores
        </Button>
        <Link id='link' to='/home'>
          Back to homepage
        </Link>
      </div>
    </div>
  )
}

export default Last
