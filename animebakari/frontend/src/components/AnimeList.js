import {useState} from 'react';
import { Route, Link } from 'react-router-dom'
import { Button, Fade } from 'react-bootstrap';
import axios from 'axios';

const AnimeList = ({anime, deleteAnime, editAnimeBtnClickHandler,}) => {

  const [open, setOpen] = useState(false)

  const deleteBtnClickHandler =(_id) => {
    axios.delete('http://localhost:8000/anime/' + _id)
    .then(res => {
      deleteAnime(_id);
      alert(`${res.data.title} has been deleted`)
    })
  }

  // const 
    return (
      
         <tr> 
              <td> 
                <Button variant='danger text-gray' onClick={()=>{deleteBtnClickHandler(anime._id)}}> Delete Entry </Button> <br />
                <Link to={"/" + anime.title}>
                  <img  className="anime-img" src={anime.image} alt={anime.title} /> 
                </Link> <br />
                <Link to={'/edit/anime/' + anime._id}>
                  <Button variant='warning' onClick={()=> {editAnimeBtnClickHandler(anime)}}>Edit Entry</Button>
                </Link>
                
              </td>
              <td>
                <br/>
                <br/>
                <div>
                  <h2>{anime.title}</h2> <br />
                  <small> Category: {anime.category} </small> <br />
                  <small>Number of Episodes: {anime.episodes}</small> <br />
                  <small>Status: {anime.status}</small>
                </div>
                
              </td>
              
              <td> 
                <br/>
                <br/> 
                <br/>
                Rating: {anime.rating} <br />
                <Button variant='danger'
                  onClick={() => setOpen(!open)}
                  aria-controls="example-fade-text"
                  aria-expanded={open}
                >
                  Show Spoilers
                </Button>
                <Fade in={open}>
                  <div id="example-fade-text">
                    <br />
                   {anime.spoilers}
                  </div>
                </Fade>
                {/* <Link to={'/review/'}>
                  <Button variant='info text-gray'>Read Review</Button>
                </Link> */}
              
              </td>  
                                 
          </tr>
    )
}

export default AnimeList;