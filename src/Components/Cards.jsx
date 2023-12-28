import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cards({ todoname, setTodoname, showModal, setShowModal }) {
  const navigate = useNavigate();
  const [editTodo, setEditTodo] = useState({ id: null, todo: '', description: '', status: 'notcompleted' });
  const [filterStatus, setFilterStatus] = useState('all');
  const [originalTodo, setOriginalTodo] = useState({ id: null, todo: '', description: '', status: '' });

  useEffect(() => {
    setOriginalTodo(editTodo);
  }, [editTodo]);

  const modalHandle = (todo) => {
    setEditTodo({
      id: todo.id,
      todo: todo.todo,
      description: todo.description,
      status: todo.status,
    });
    setOriginalTodo(todo);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTodo({
      ...editTodo,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedTodoname = todoname.map((todo) =>
      todo.id === editTodo.id ? { ...todo, ...editTodo } : todo
    );
    setTodoname(updatedTodoname);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updatedTodoname = todoname.filter((todo) => todo.id !== id);
    setTodoname(updatedTodoname);
  };

  const handleStatusChange = (e, id) => {
    const { value } = e.target;
    const updatedTodoname = todoname.map((todo) =>
      todo.id === id ? { ...todo, status: value === '1' ? 'completed' : 'notcompleted' } : todo
    );
    setTodoname(updatedTodoname);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTodoname = todoname.filter((todo) => {
    if (filterStatus === 'all') return true;
    return filterStatus === todo.status;
  });

  return (
    <>
      <Container className='cardsorder'>
        <Row>
          <Col>
            <Form.Select className='filterDropdown' onChange={handleFilterChange}>
              <option value='all'>All</option>
              <option value='completed'>Completed</option>
              <option value='notcompleted'>Not Completed</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {filteredTodoname.map((todo) => (
            <Col sm={4} className='mb-6' key={todo.id}>
              <Card>
                <Card.Body>
                  <Card.Text>{`Name : ${todo.todo}`}</Card.Text>
                  <Card.Text>{`Description : ${todo.description}`}</Card.Text>
                  <Card.Text className='sts'>
                    Status:
                    {'  '}
                    <Form.Select
                      value={todo.status === 'completed' ? '1' : '0'}
                      className='stsselect'
                      onChange={(e) => handleStatusChange(e, todo.id)}
                    >
                      <option value='0'>Not Completed</option>
                      <option value='1'>Completed</option>
                    </Form.Select>
                  </Card.Text>
                  <Button className='editbtn' variant='primary' onClick={() => modalHandle(todo)}>
                    Edit
                  </Button>{' '}
                  <Button variant='danger' onClick={() => handleDelete(todo.id)}>
                    Delete
                  </Button>{' '}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control className='todoname' type='text' name='todo' value={editTodo.todo} onChange={handleInputChange} />
            <Form.Control className='todoname' type='text' name='description' value={editTodo.description} onChange={handleInputChange} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cards;
