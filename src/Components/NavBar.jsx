import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavBar({ todoname, setTodoname }) {
  const [todo, setTodo] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleCreate = () => {
    if (todo.trim() === '' || description.trim() === '') {
      // Check if either input field is empty
      alert('Please fill in both ToDo Name and Description');
      return;
    }

    const id = todoname.length ? todoname[todoname.length - 1].id + 1 : 1;
    const newArray = [...todoname];
    newArray.push({
      id,
      todo,
      description,
    });
    setTodoname(newArray);
    setTodo('');
    setDescription('');
    navigate('/cards');
  };

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col sm={4} md={5}>
            <Form.Control
              className='todoname'
              type='text'
              value={todo}
              placeholder='ToDo Name'
              onChange={(e) => setTodo(e.target.value)}
            />
          </Col>
          <Col sm={4} md={5}>
            <Form.Control
              className='tododesp'
              type='text'
              value={description}
              placeholder='ToDo Description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant='success' size='md' onClick={() => handleCreate()}>
              Add ToDo
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NavBar;
