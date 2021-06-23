import axios from "axios";
import { useEffect, useState } from "react";
import ComingSoon from './ComingSoon';

const Updates = () => {
    const [unreleasedAnimes, setUnreleasedAnimes] = useState({})
    useEffect((_id) => {
		axios('http://localhost:8000/comingsoon')
		.then(res => {
		  setUnreleasedAnimes(res.data)
		})
	  }, []);
    return(

        <div>
            <h1>Coming Soon!</h1>
            {/* {
            unreleasedAnimes.map(anime => {
                return <ComingSoon anime={anime}/>
            })
            } */}
        </div>
    );
}

export default Updates;