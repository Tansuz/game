// React
import { useState, useEffect } from 'react'

// React router dom
import { Link } from 'react-router-dom'

//Styling
import './Last.scss'

const Last = () => {
  const [element, setElement] = useState(null)

  const storageItems = JSON.parse(localStorage.getItem('score'))

  useEffect(() => {
    if (storageItems && storageItems.length) {
      const htmlForScore = storageItems.map((e) => (
        <div key={e.score} className='textContainer'>
          <h4>Score: {e.score}</h4>
        </div>
      ))
      setElement(htmlForScore)
    }
    /* eslint-disable */
  }, [storageItems && storageItems.length])

  return (
    <div className='exerciseContainer1'>
      <h2>Leaderboard</h2>
      {element}
      <Link to='/home'>Back to homepage</Link>
    </div>
  )
}

export default Last
