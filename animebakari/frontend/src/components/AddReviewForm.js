
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';



const AddReviewForm = ({addReview}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState ('')
    const [preview, setPreview] = useState('')
    // const [review, setReview] = useState('No reviews available')


    const addReviewBtnClickHandler = () => {
        axios.post('http://localhost:8000/reviews', {
            title,
            content, 
            image,
            preview
            // review
    })
        .then(res => {
            const newReview = res.data;
            alert(`${res.data.title} has been added to your list`)
            addReview(newReview);

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
            <span><small>Preview</small></span>     
                <textarea type='text'
                value={preview}
                onChange={(e)=>{setPreview(e.target.value)}}
                /> <br />
            <span><small>Content</small></span>     
                <textarea type='text'
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
                /> <br />
            <span><small>Image</small></span>
            <input 
                type='text'
                value={image}
                onChange={(e) => {setImage(e.target.value)}} 
            /> <br />

            <Link to="/review">
                <Button variant='primary' onClick={addReviewBtnClickHandler} style={{margin:'2%'}}> Add Review </Button>
                    {/* <button onClick={addAnimeBtnClickHandler}>Add Anime</button> */}
            </Link>
        </div>
    );
}

export default AddReviewForm;