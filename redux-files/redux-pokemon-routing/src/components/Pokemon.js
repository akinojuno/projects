import React from 'react';
import { Route, Link } from 'react-router-dom'

const Pokemon = (props) => {
    return (
      
      <tr>
        <Link to={"/"+ props.name}>
          <img className="poke-image" src={props.image} width="100px"/>
        </Link>
          <td>{props.name}</td>
          <td>{props.type[0]} {props.type[1]}</td>
      </tr>
     

    )
}

export default Pokemon;