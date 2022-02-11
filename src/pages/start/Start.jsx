//React
import { useEffect, useState } from 'react'

// Router
import { useNavigate } from 'react-router-dom'

//Styling
import './Start.scss'

const Start = () => {
  const [seconds, setSeconds] = useState(30)
  const [key, setKey] = useState(undefined)
  const [birdNumber, setBirdNumber] = useState(0)
  const [bird, setBird] = useState(null)
  const [order, setOrder] = useState(0)
  const [score, setScore] = useState(0)

  const navigate = useNavigate()

  const handleSend = () => {
    const parseScore = JSON.parse(localStorage.getItem('score')) || []
    const obj = { score: score }
    parseScore.push(obj)
    localStorage.setItem('score', JSON.stringify(parseScore))
  }

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      handleSend()
      navigate('/last')
    }
  })

  const birds = [
    'talitiainen',
    'sinitiainen',
    // 'Kuusitiainen',
    // 'Kirjosieppo',
    // 'Leppälintu',
    // 'Kottarainen',
    // 'Varpunen',
    // 'Pikkuvarpunen',
    // 'Harmaasieppo',
    // 'Tervapääsky',
    'makkara',
    'kuormaauto',
    'puu',
    'silta',
  ]

  const changeBird = () => {
    setBirdNumber((prev) => {
      if (prev === birds.length - 1) {
        return 0
      } else {
        return prev + 1
      }
    })
  }

  if (bird && bird.charAt(0) === key && order === 0) {
    let remove = bird.replaceAll(key, '')
    setBird(remove)
    setOrder(1)
  }
  if (bird && bird.charAt(bird.length - 1) === key && order === 1) {
    let remove = bird.replaceAll(key, '')
    setBird(remove)
    setOrder(0)
  }

  window.addEventListener('keypress', (e) => {
    setKey(e.key)
  })

  useEffect(() => {
    setBird(birds[birdNumber])
    /* eslint-disable */
  }, [birdNumber])

  useEffect(() => {
    if (bird === '') return changeBird(), setScore(score + 1)
  }, [bird])

  return (
    <div className='exerciseContainer1'>
      <h3>{seconds}</h3>
      <h1 id='h1'>{bird}</h1>
      <h4>{order === 0 ? 'Syötä sanan ensimmäinen kirjain!' : 'Syötä sanan viimeinen kirjain!'}</h4>
      <h4>Score: {score}</h4>
    </div>
  )
}

export default Start
