import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css'

const Description = ({pokemon, full, prevPage}) => {
  return(
    <div className="description">
        {
            full ? 
            <div className="descriptionContainer">
            <Link to={"/"+pokemon.name}>
              <img className="pokemonImage" src={pokemon.img} alt={pokemon.name} width={200} />
            </Link>
              <Link className="name" to={"/"+pokemon.name}>
                   <h2>Name: {pokemon.name}</h2>
              </Link>
                <p>
                    {
                        pokemon.types.map( type => <h3> {type}</h3>)
                    }
                </p>
                <p>
                    {pokemon.description} 
                </p>    
                    <br/>
                    <Link to={prevPage} ><button>❌</button></Link>  
            </div>
                 : null
        }
   
    </div>
    
)
}


export default Description;