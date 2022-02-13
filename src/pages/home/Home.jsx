// Bootstrap
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//Styling & icons
import './Home.scss'
import forward from './../../images/forward.svg'
import backward from './../../images/backward.svg'

const Home = () => {
  const navigate = useNavigate()
  const handleClickStart = () => navigate('/start')

  return (
    <div className='homeContainer'>
      <h3>Instructions</h3>
      <div className='textContainer'>
        <h4>Game starts by pressing start button! </h4>
        <h4> Word on the screen should be write like: </h4>
        <h4>1. Enter first letter of the word then last and then first etc. </h4>
        <h4>
          2. Everytime letter have been pressed all of that letter gonna be removed of the word
        </h4>
        <h4>3. When all the letters have been removed next word appears on the screen</h4>
        <h4>4. You get 1 point per word.</h4>
      </div>
      <div className='iconContainer'>
        <p>
          <img src={forward} className='forwardBackwardImage' alt='first' /> Icon presents FIRST
          letter
        </p>
        <p>
          <img src={backward} className='forwardBackwardImage' alt='first' /> Icon presents LAST
          letter
        </p>
      </div>
      <Button id='button' variant='success' onClick={handleClickStart}>
        Start
      </Button>
    </div>
  )
}

export default Home
