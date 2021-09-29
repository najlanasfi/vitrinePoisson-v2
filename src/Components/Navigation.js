import React from 'react';
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom';

const Navigation=({setSelectRating,setSearchCondition})=>{
return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">Vitrine Poisson</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="me-auto">
      <Nav.Link><Link  style={{textDecoration:'none',color:"white"}} to="/Add">Add </Link></Nav.Link>
      <Nav.Link><Link  style={{textDecoration:'none',color:"white"}} to="/List">List </Link></Nav.Link>

      </Nav>
      <Nav>

   <Rating onClick={(x) => setSelectRating(x)}
       ratingValue={setSelectRating} fillColor="#1E90FF"/>
                    
    <Form.Control type="text" placeholder="Search" 
    style ={{ width: "250px" , marginLeft: "1rem"}}
    onChange={(e) => setSearchCondition(e.target.value)}
    ></Form.Control>
      
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)
}
export default Navigation