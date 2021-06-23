import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css';
import {Button, CloseButton} from 'react-bootstrap';

const Description = ({anime, full, prevPage}) => {
  const btn = () => {
    console.log(anime);
  }
  return(
    <div className="description">
        {
            full ? 
            <div>
            <Link to={"/"+anime.title}>
              <img src={anime.image} alt={anime.name} width={200} />
            </Link>
               <h2>{anime.title}</h2>
                <small>
                  {anime.category}
                </small>
                <p>
                    {anime.synopsis} 
                </p>    
                    <br/>
                    <Link to={'/anime/all'} ><Button variant='danger'>X</Button></Link>  
            </div>
                 : null
        }
   
    </div>
    
)
}


export default Description;