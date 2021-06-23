
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';



const RegisterForm = ({addAnime}) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [review, setReview] = useState('No reviews available')


    const register = () => {
        // console.log(email, password)
        axios.post('http://localhost:8000/users/register', {
            username,
            password
            // review
    })
        .then(res => {
            
            const newUser = res.data;
            alert(`${res.data.username} has registered successfully!`)
        });
    }
    return(
        <div className="addAnimeForm">        
        <Form>
            <Form.Group value={username} onChange={(e)=>{setUserName(e.target.value)}} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group value={password} onChange={(e)=>{setPassword(e.target.value)}} className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                We'll never share your password with anyone else.
                </Form.Text>
            </Form.Group>
            <Link to='/'>
                <Button variant='primary' onClick={register} style={{margin:'2%'}}> 
                    Register
                </Button>
            </Link>
        </Form>
        </div>
    );
}

export default RegisterForm;