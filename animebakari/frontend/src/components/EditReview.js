
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';



const EditAnimeForm = ({editReview, editReviewBtnClickHandler}) => {

    const [title, setTitle] = useState(editReview.title);
    const [content, setContent] = useState(editReview.content);
    const [image, setImage] = useState(editReview.image);
    const [preview, setPreview] = useState(editReview.preview);



  const saveReview = () => {
    //   console.log(editAnime.title)
      axios.put('http://localhost:8000/reviews/' + editReview._id, {
        title,
        content,
        image,
        preview
      })
    .then(res => {
        editReviewBtnClickHandler(editReview)
        alert(`${res.data.title} has been updated`);
        console.log(res.data);
    })
  }
   

    return(

        <div className="addAnimeForm">
          <span><small>Image:</small></span>
            <input 
            type='text' 
            value={image}
            onChange={(e)=> setImage(e.target.value)}
            /> <br />
          <span><small>Title:</small></span>
            <input 
            type='text' 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            /> <br />
            <br />
            <span><small>Content:</small></span>
            <textarea 
            className="plot"
            type="text"
            value={content}
            onChange={(e) => {setContent(e.target.value)}}
            width={200}
            height={200}
            />
            <br />
            <span><small>Preview:</small></span>
            <textarea 
            className="plot"
            type="text"
            value={preview}
            onChange={(e) => {setPreview(e.target.value)}}
            width={200}
            height={200}
            />

            <Link to="/review">
                <Button variant='primary' onClick={saveReview} style={{margin:'2%'}}>Update Review</Button>
            </Link>
           
            
        </div>
    );
}

export default EditAnimeForm;