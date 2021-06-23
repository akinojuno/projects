import React from 'react';
import { Link } from 'react-router-dom';
import './Description.css';
import { Button} from 'react-bootstrap';

const Post = ({anime, full, review, editReviewBtnClickHandler}) => {
  const btn = () => {
    console.log(anime);
  }
  return(
    <div className="description">
        {
            full ? 
            <div>
            <Link to={"/"+review.title}>
              <img className="pokemonImage" src={review.image} alt={review.name} width={"80%"} style={{borderRadius: "10px"}}/>
            </Link>

               <h2>{review.title}</h2>
                <p>
                    {review.content} 
                </p>  
                {/* <p>Comments:</p>
                <small>{
                review.comments.map(comment => {
                    return <div><p> {comment} </p></div>
                })
                
                }</small>   */}
                <Link to={'/edit/review/' + review._id} style={{margin:'2%'}}>
                  <Button variant='warning' onClick={()=> {editReviewBtnClickHandler(review)}}>Edit Entry</Button>
                </Link>
                    {/* <br/> */}
                    <Link to={'/review'} ><Button variant='danger'>X</Button></Link>  
            </div>
                 : null
        }
   
    </div>
    
)
}


export default Post;