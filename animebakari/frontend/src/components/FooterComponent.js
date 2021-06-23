import {Card} from 'react-bootstrap';


const FooterComponent = () => {
    return(
        <Card bg='dark'>
        <Card.Header as="h6">Anime Bakari Ⓒ </Card.Header>
        <Card.Body>
          <Card.Title as="small"><small>All rights Reserved</small></Card.Title> <br />
          <Card.Text as="small">
           <small>Providing reliable anime reviews since 2021.</small> 
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default FooterComponent;