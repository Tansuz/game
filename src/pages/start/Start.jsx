//React
import { useEffect, useState } from 'react'

// Router
import { useNavigate } from 'react-router-dom'

//Styling & icons
import './Start.scss'
import forward from './../../images/forward.svg'
import backward from './../../images/backward.svg'

const Start = () => {
  const [seconds, setSeconds] = useState(30)
  const [keyboard, setKeyboard] = useState(undefined)
  const [textNumber, setTextNumber] = useState(Math.floor(Math.random() * 30))
  const [text, setText] = useState(null)
  const [order, setOrder] = useState(0)
  const [score, setScore] = useState(0)

  const navigate = useNavigate()

  const handleSend = () => {
    if (score) {
      var today = new Date()
      var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()
      var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
      var dateTime = date + ' ' + time
      const parseScore = JSON.parse(localStorage.getItem('score')) || []
      const obj = { score: score, date: dateTime }
      parseScore.push(obj)
      localStorage.setItem('score', JSON.stringify(parseScore))
    }
  }

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      handleSend()
      navigate('/last')
      return () => {}
    }
    /* eslint-disable */
  }, [seconds, navigate])

  const texts = [
    'text',
    'elephant',
    'sausage',
    'truck',
    'tree',
    'bridge',
    'dog',
    'cat',
    'yellow',
    'black',
    'bottle',
    'ball',
    'firetruck',
    'headphones',
    'mouse',
    'computer',
    'shirt',
    'chair',
    'table',
    'flower',
    'candle',
    'sofa',
    'laptop',
    'red',
    'tv',
    'bed',
    'mechanic',
    'kitchen',
    'toilet',
    'backpack',
  ]

  const changeBird = () => {
    let randomNumber = Math.floor(Math.random() * 30)
    if (textNumber === randomNumber) {
      setTextNumber(Math.floor(Math.random() * texts.length))
    } else {
      setTextNumber(randomNumber)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', logKey)
    return () => {
      window.removeEventListener('keydown', logKey)
    }
  }, [])

  if (text && text.charAt(0) === keyboard && order === 0) {
    let remove = text.replaceAll(keyboard, '')
    setText(remove)
    setOrder(1)
  }
  if (text && text.charAt(text.length - 1) === keyboard && order === 1) {
    let remove = text.replaceAll(keyboard, '')
    setText(remove)
    setOrder(0)
  }

  function logKey(e) {
    setKeyboard(e.key)
    return setKeyboard('')
  }

  useEffect(() => {
    setText(texts[textNumber])
    /* eslint-disable */
  }, [textNumber])

  useEffect(() => {
    if (text === '' && !text) {
      setScore(score + 1)
      return changeBird()
    }
  }, [text])

  return (
    <div className='startContainer'>
      <h3 id='seconds'>{seconds}</h3>
      {order === 0 ? (
        <img src={forward} className='forwardBackwardImage' alt='first' />
      ) : (
        <img src={backward} className='forwardBackwardImage' alt='first' />
      )}
      <h1 id='h1'>{text}</h1>
      <h4>Score: {score}</h4>
    </div>
  )
}

export default Start
