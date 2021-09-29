import react from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import { useParams} from 'react-router';
import { useSelector } from 'react-redux'
function Detail  (props) {
    const p=useSelector(state => state.poisson.poissons)
const params=useParams();
    console.log(p)
  let m=p.find((el)=>(el.id == params.id));
  //console.log(m)
   return(
       <div>
           <Container>
               <Row>
                   <Col >  <img  width="600" height="400" src={m.imageP}/></Col>
                   <Col style={{marginTop:"2rem"}}>
                   <h1>{m.nom}</h1>
                   <a>{m.prix} €</a>
                   <p>{m.description}</p>
                   </Col>
               </Row>
           </Container>
       </div>
   )
  }  
  
  export default Detail;