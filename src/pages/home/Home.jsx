// Bootstrap
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//Styling
import './Home.scss'

const Home = () => {
  const navigate = useNavigate()
  const handleClickStart = () => navigate('/start')

  return (
    <div className='homeContainer'>
      <h3>Ohjeet</h3>
      <p>Peli alkaa painamalla aloita painiketta!</p>
      <p>Näytöllä oleva sana tulee kirjoittaa siten</p>
      <p>Ensiksi syötetään ensimmäinen kirjain sitten</p>
      <p>viimeinen kirjain!</p>
      <p>Kun kirjainta painetaan poistuu kaikki kyseiset kirjaimet!</p>
      <Button id='button' onClick={handleClickStart}>
        Aloita
      </Button>
    </div>
  )
}

export default Home
