import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getUsers } from '../../../../services/getUsers';
import { Card } from './components/Card';

export function Body() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then(body => setUsers(body));
    setIsLoading(false);
  }, [])

  return (
      <Container className='d-flex flex-wrap justify-content-between'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(users) && users.map(user => <Card key={user.id} {...user} />)}
      </Container>
  )
}