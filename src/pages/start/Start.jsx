//React
import { useEffect, useState } from 'react'

//Styling
import './Start.scss'

const Start = () => {
  const [key, setKey] = useState(undefined)
  const [birdNumber, setBirdNumber] = useState(0)
  const [bird, setBird] = useState(null)
  const [order, setOrder] = useState(0)

  const birds = [
    'Talitiainen',
    'Sinitiainen',
    'Kuusitiainen',
    'Kirjosieppo',
    'Leppälintu',
    'Kottarainen',
    'Varpunen',
    'Pikkuvarpunen',
    'Harmaasieppo',
    'Tervapääsky',
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
    if (bird === '') return changeBird()
  }, [bird])

  return (
    <div className='exerciseContainer1'>
      <h2>Start</h2>
      <h1 id='h1'>{bird}</h1>
      <h3>{key}</h3>
      <h4>
        {order === 0 ? 'Syötä linnun ensimmäinen kirjain!' : 'Syötä linnun viimeinen kirjain!'}
      </h4>
    </div>
  )
}

export default Start
