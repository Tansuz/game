// Bootstrap
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//Styling
import './Home.scss'

const Home = () => {
  const navigate = useNavigate()
  const handleClickStart = () => navigate('/start')

  return (
    <div className='exerciseContainer1'>
      <p>Peli alkaa painamalla aloita painiketta!</p>
      <p>Näytöllä oleva sana tulee kirjoittaa siten</p>
      <p>Ensiksi syötetään ensimmäinen kirjain sitten</p>
      <p>viimeinen kirjain!</p>
      <p>Kun kirjainta painetaan poistuu kaikki kyseiset kirjaimet!</p>
      <Button className='Button' onClick={handleClickStart}>
        Aloita
      </Button>
    </div>
  )
}

export default Home
