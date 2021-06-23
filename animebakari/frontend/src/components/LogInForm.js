import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';

const LogInForm = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('')


    const loginUser = () => {
        
        axios.post('http://localhost:8000/users/login', {
            username,
            password
        }).then(res => {
            console.log(username, password)
            if(res.data.error){
                alert(res.data.error);
            } else {
                props.login(res.data.user)
                alert(`Welcome, ${username}!`)
                // console.log(props.login)
            }
        })
    }


    return(
        <div style={{color:'gray'}}>
        <Form>
            <Row>
                <Col>Login:</Col>
                <Col>
                    <Form.Group value={username} onChange={(e)=>{setUserName(e.target.value)}} size="sm" className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter  username" />
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group value={password} onChange={(e)=>{setPassword(e.target.value)}} size="sm" className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col> 
                <Col>
                    <Button onClick={loginUser} size="sm" variant="primary" type="submit">
                    Submit
                    </Button>
                </Col>
            </Row>
        </Form>
      
        <small style={{fontSize:'12px'}}>
            No account yet? <Link to='/register'>Register</Link>
        </small>
        
        
        </div>
       
    );
}

const mapDispatchToProps = dispatch => {
    return{
        login: user => {
            dispatch({ type: 'LOGIN', payload: user 
        });
        }
    }
}

export default connect(null, mapDispatchToProps) (LogInForm);