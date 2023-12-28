import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Create({todoname,setTodoname}) {
    let [todo,setTodo] = useState("")
  let [description,setDescription] = useState("")
  
  const handleCreate = ()=>{
    let id = todoname.length?todoname[todoname.length-1].id+1 : 1// fetch the last index element.id+1 or if array is empty id will be 1
    let newArray = [...todoname]// deep copy Achieve Immutability
    newArray.push({
      id,
      todo,
      description
    })
    setTodoname(newArray)
    setTodo("");
    setDescription("");
    
  }
  return <>
   <br></br>
  <Container>
      <Row>
        <Col sm={4} md={5}><Form.Control className='todoname' type="text" value={todo} placeholder="ToDo Name" onChange={(e)=>setTodo(e.target.value)}/></Col>
        <Col sm={4} md={5}><Form.Control className='tododesp' type="text" value={description} placeholder="ToDo Description" onChange={(e)=>setDescription(e.target.value)}/></Col>
        <Col><Button variant="success" size="md" onClick={()=>handleCreate()}>
          Add ToDo
        </Button></Col>
      </Row>
    </Container>
  </>
}


export default Create