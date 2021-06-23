import React from 'react';
import axios from 'axios';
import './Description.css'
import {Button, Card, Accordion} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Description.css'

const Review = ({review, deleteReview, prevPage}) => {
  const btn = () => {
    console.log(review);
  }

  const deleteBtnClickHandler =(_id) => {
    axios.delete('http://localhost:8000/reviews/' + _id)
    .then(res => {
      deleteReview(_id);
      alert(`${res.data.title} has been deleted`)
    })
  }

  return(


    <div>
      {/* <div>
        <h2> {review.title} </h2> <br />
      <small>{review.content}</small>
      </div> */}

{/* <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion> */}

        <Card style={{height:'90%', flex: 1}}>
        <Card.Img variant="top" src={review.image} style={{height:'400px', objectFit:"cover"}} />
          <Card.Body>
            <Card.Title>{review.title}</Card.Title> <br />
            <Card.Text>
              <p>{review.preview}</p>
            </Card.Text> <br />
            <Link to={"/review/"+review.title} style={{margin:'2%'}}>
              <Button variant="primary">Read Review</Button> 
            </Link>
            <Button variant='danger text-gray' onClick={()=>{deleteBtnClickHandler(review._id)}}> Delete Review </Button> 
          </Card.Body>
        </Card>
        <br />
    </div>
    
)
}


export default Review;