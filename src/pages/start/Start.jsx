//React
import { useEffect, useState } from 'react'

// Router
import { useNavigate } from 'react-router-dom'

//Styling
import './Start.scss'

const Start = () => {
  const [seconds, setSeconds] = useState(60)
  const [keyboard, setKeyboard] = useState(undefined)
  const [textNumber, setTextNumber] = useState(Math.floor(Math.random() * 30))
  const [text, setText] = useState(null)
  const [order, setOrder] = useState(0)
  const [score, setScore] = useState(0)

  const navigate = useNavigate()

  const handleSend = () => {
    var today = new Date()
    var date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear()
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    var dateTime = date + ' ' + time
    const parseScore = JSON.parse(localStorage.getItem('score')) || []
    const obj = { score: score, date: dateTime }
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

  const randomnumber = Math.floor(Math.random() * 30)

  const changeBird = () => {
    if (randomnumber === textNumber) {
      setTextNumber(textNumber + 1)
    }
    if (randomnumber === 30) {
      setTextNumber(29)
    } else {
      setTextNumber(randomnumber)
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
      changeBird(), setScore(score + 1)
    }
  }, [text])

  return (
    <div className='startContainer'>
      <h3>{seconds}</h3>
      <h1 id='h1'>{text}</h1>
      <h4>{order === 0 ? 'Syötä sanan ensimmäinen kirjain!' : 'Syötä sanan viimeinen kirjain!'}</h4>
      <h4>Score: {score}</h4>
    </div>
  )
}

export default Start
