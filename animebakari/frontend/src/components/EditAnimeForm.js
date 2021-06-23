
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';



const EditAnimeForm = ({editAnime, editAnimeBtnClickHandler}) => {

    const [title, setTitle] = useState(editAnime.title);
    const [category, setCategory] = useState(editAnime.Category);
    const [rating, setRating] = useState(editAnime.rating);
    const [image, setImage] = useState(editAnime.image)
    const [synopsis, setSynopsis] = useState(editAnime.synopsis)
    const [episodes, setEpisodes] = useState(editAnime.episodes)
    const [status, setStatus] = useState(editAnime.status);
    const [spoilers, setSpoilers] = useState(editAnime.spoilers)


  const save = () => {
    //   console.log(editAnime.title)
      axios.put('http://localhost:8000/anime/' + editAnime._id, {
        title,
        category,
        rating,
        image,
        synopsis,
        episodes,
        status,
        spoilers
      })
    .then(res => {
        editAnimeBtnClickHandler(editAnime)
        alert(`${res.data.title} has been updated`);
        console.log(res.data);
    })
  }
   

    return(

        <div className="addAnimeForm">
            <span><small>Title:</small></span>
            <input 
            type='text' 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            /> <br />
            <span><small>Rating</small></span>     
            <input type='number'
            value={rating}
            onChange={(e)=>{setRating(e.target.value)}}
            /> <br />
           <span><small>Category</small></span>
            <select
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            >
                <option>Action</option>
                <option>Drama</option>
                <option>Comedy</option>
                <option>Horror/Gore</option>
            </select> <br />
            <span><small>Image</small></span>
            <input 
            type='text'
            value={image}
            onChange={(e) => {setImage(e.target.value)}} 
            /> <br />
            <span><small>Plot:</small></span>
            <textarea 
            className="plot"
            type="text"
            value={synopsis}
            onChange={(e) => {setSynopsis(e.target.value)}}
            width={200}
            height={200}
            />
            <span><small>Spoiler:</small></span>
            <textarea
            className="plot"
            type="text"
            value={spoilers}
            onChange={(e) => {setSpoilers(e.target.value)}}
            width={200}
            height={200}
            />
            <br />
            <span><small>Number of Episodes:</small></span>
            <input 
            type="number" 
            value={episodes} 
            onChange={(e)=> {setEpisodes(e.target.value)}}
            />
            <span><small>Status</small></span>
            <select 
            value={status}
            onChange={(e)=>{setStatus(e.target.value)}}
            >
                <option>Coming Soon</option>
                <option>On-Going</option>
                <option>Completed</option>
            </select>

            <Link to="/anime/all">
                <Button variant='primary' onClick={save} style={{margin:'2%'}}>Update Anime</Button>
            </Link>
           
            
        </div>
    );
}

export default EditAnimeForm;