import React from 'react';
import { Link } from 'react-router-dom';

  return (
    <div>
      <nav>
      <Link to={props.types}>
      <button>{props.types}</button>
      </Link>
      </nav>
    </div>

  );
}

export default Selection;