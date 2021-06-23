
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const AddAnimeForm = ({addAnime}) => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Action');
    const [rating, setRating] = useState(1);
    const [image, setImage] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [episodes, setEpisodes] = useState(1);
    const [status, setStatus] = useState('On-Going');
    const [spoilers, setSpoilers] = useState('No Spoilers Available')
    // const [review, setReview] = useState('No reviews available')


    const addAnimeBtnClickHandler = () => {
        axios.post('http://localhost:8000/anime', {
            title,
            category,
            rating,
            image,
            synopsis,
            episodes,
            spoilers,
            status
            // review
    })
        .then(res => {
            
            const newAnime = res.data;
            alert(`${res.data.title} has been added to your list`)
            addAnime(newAnime);

        });
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
                type="text"
                value={synopsis}
                onChange={(e) => {setSynopsis(e.target.value)}}
                className="plot"
            />
            <br />
            <span><small>Spoiler:</small></span>
            <textarea 
                type="text"
                value={spoilers}
                onChange={(e) => {setSpoilers(e.target.value)}}
                className="plot"
                placeholder="Add Spoiler here..."
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
                {/* <span><small>Review:</small></span>
                <input 
                type="text"
                value={review}
                onChange={(e) => {setReview(e.target.value)}}
                className="plot"
                /> */}

            <Link to="/anime/all">
                <Button variant='primary' onClick={addAnimeBtnClickHandler} style={{margin:'2%'}}> Add Anime </Button>
                    {/* <button onClick={addAnimeBtnClickHandler}>Add Anime</button> */}
            </Link>
        </div>
    );
}

export default AddAnimeForm;