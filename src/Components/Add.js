import React ,{useState} from 'react'
import { Form,Container,Button,Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddPoisson } from '../Slices/poissonSlice'
import { useHistory } from 'react-router';

const Add = () => {

    const history=useHistory();
    const dispatch=useDispatch();
   
    const [newPoisson,setNewPoisson]=useState({nom:'',description:'',image:''})

    const handleAdd=()=>{
    dispatch(AddPoisson(newPoisson))
    setTimeout(()=>{
    history.push("/list")
},500);   
}

return (
    <div style={{marginTop:'1.5rem'}}>
    <Container >
         <Row>
             <Col md={{ span: 6, offset: 3 }}>
         
     <Form>
     <Form.Group className="mb-3">
     <Form.Label>Nom:</Form.Label>
     <Form.Control type="text" onChange={(e)=>setNewPoisson({...newPoisson,nom:e.target.value})} placeholder="Enter Nom"></Form.Control>
     <Form.Label>Description:</Form.Label>
     <Form.Control type="text" onChange={(e)=>setNewPoisson({...newPoisson,description:e.target.value})} placeholder="Enter Description"></Form.Control>
     <Form.Label>Image:</Form.Label>
     <Form.Control type="text" onChange={(e)=>setNewPoisson({...newPoisson,imageP:e.target.value})} placeholder="Enter Image"></Form.Control>
     <Form.Label>Rating: </Form.Label>
     <Form.Control type="number"onChange={(e)=>setNewPoisson({...newPoisson,rating:e.target.value})} placeholder="Enter Rating"/>
    <Button  onClick={()=>handleAdd()} className="btn btn-dark btn-lg btn-block" style={{marginTop:'2rem'}}>ADD  </Button>
      </Form.Group>
     </Form>
     </Col>
         </Row>
         </Container>
 </div>
)
}
export default Add