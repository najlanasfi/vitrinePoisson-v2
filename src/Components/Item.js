import React,{useState}  from 'react'
import {Card,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import {Link} from 'react-router-dom'

 const   Item = ({itemP}) => {

    const [rating, setRating]=useState(0)
    const handleRating= (rate) => {
        setRating(rate)
    }
return (
  <Card  style={{marginTop:"1.5rem", width: "30%" , marginLeft: "2rem" }}>
    <Card.Img variant="top" src={itemP.imageP}/>
     <Card.Body>
     <Card.Title>{itemP.nom}</Card.Title>
    <Rating onClick={handleRating} ratingValue={itemP.rating} fillColor="#1E90FF"/>
     <br></br>
     <Button variant="primary"  style={{marginBottom:"2rem"}} > 
     <Link style={{textDecoration:'none',color:"white"}} to={`/poisson/${itemP.id}`}>Show Details</Link>
     </Button>
     </Card.Body>
     </Card> 


   
)
}
export default Item