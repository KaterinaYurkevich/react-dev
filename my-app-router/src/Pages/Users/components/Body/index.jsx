import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPosts } from '../../../../services/getPosts';
import { Users_URL } from '../../../../constants/server';
import { Card } from './components/Card';

export function Body() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts(Users_URL).then(body => setUsers(body));
    setIsLoading(false);
  }, [])

  return (
      <Container className='d-flex flex-wrap justify-content-between'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(users) && users.map(user => <Card key={user.id} {...user} />)}
      </Container>
  )
}