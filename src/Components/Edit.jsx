import React from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState} from 'react'


function Edit({setedittodo,edittodo,showModal,setShowModal,todoname,setTodoname}) {
  let [etodo,seteTodo] = useState("")
  let [edescription,seteDescription] = useState("")
    const handleClose = () => {
        setShowModal(false);
        
      };
     
  return <>
 
 <Modal show={showModal} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control className='todoname' type="text" value={todoname.id} />
            <Form.Control className='todoname' type="text"  />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleSaveChanges}>
            Save changes
          </Button> */}
        </Modal.Footer>
      </Modal>
  </>
}

export default Edit