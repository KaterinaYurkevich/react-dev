import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getTodos } from '../../../../services/getTodos';
import { Card } from './components/Card';

export function Body() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTodos().then(body => setTodos(body));
    setIsLoading(false);
  }, [])
  
  return (
      <Container className='d-flex flex-wrap justify-content-between'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(todos) && todos.map(todo => <Card key={todo.id} {...todo} />)}
      </Container>
  )
}
