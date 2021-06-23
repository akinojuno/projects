import { Route } from 'react-router-dom';
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';


const NavBar = () => {
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <ReactBootStrap.Navbar.Brand href="/">Anime Bakari</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                {/* <ReactBootStrap.Nav.Link href="/anime/all">List</ReactBootStrap.Nav.Link> */}
                <ReactBootStrap.NavDropdown title="Anime List" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="/anime/all">All</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="/anime/action">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="/anime/comedy">Comedy</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="/anime/drama">Drama</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="/anime/horror.gore">Horror/Gore</ReactBootStrap.NavDropdown.Item>
                    
                
                </ReactBootStrap.NavDropdown>
                <ReactBootStrap.Nav.Link href="/addanime">Add Anime</ReactBootStrap.Nav.Link>
                <Route exact path={'/review'}>
                    <ReactBootStrap.Nav.Link href="/addreview">Add Reviews</ReactBootStrap.Nav.Link>
                </Route>
                
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/review">Reviews</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="/updates">
                    Updates!
                </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        // <div>
        //      <nav classID="navigation" >			
        //     <Link to="/">
        //         <span>Home</span>
        //     </Link>
        //     <Link to={'/anime/action'}>
        //         <span>
        //             Action
        //         </span>
        //     </Link>		
        //     <Link to={'/anime/drama'}>
        //         <span>
        //             Drama
        //         </span>
        //     </Link>	
        //     <Link to={'/anime/comedy'}>
        //         <span>
        //             Comedy
        //         </span>
        //     </Link>	
        //     <Link to={'/anime/horror.gore'}>
        //         <span>
        //             Horror/Gore
        //         </span>
        //     </Link>	
        //     <Link to={'/addanime'}>
        //         <span>
        //             Add New Anime
        //         </span>
        //     </Link>	
        // </nav>
        // </div>
       
    );
}

export default NavBar;