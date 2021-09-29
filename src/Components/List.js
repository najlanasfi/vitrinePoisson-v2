import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import {Container} from 'react-bootstrap'
const List = (searchCondition,selectRating) => {
const p=useSelector(state => state.poisson.poissons)
console.log(p);
return (
   
        <Container style={{display:"flex", flexWrap:"wrap"}}>
       {p
       .filter
       (el=>el.nom)
       .map(itemP=>(
           <Item itemP={itemP} />
       ))} 
       </Container>
    
)
}
export default List