import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPosts } from '../../../../services/getPosts';
import { Posts_URL } from '../../../../constants/server';
import { Card } from './components/Card';

export function Body() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosts(Posts_URL).then(body => setPosts(body));
    setIsLoading(false);
  }, [])

  return (
      <Container className='d-flex flex-wrap justify-content-between'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(posts) && posts.map(post => <Card key={post.id} {...post} />)}
      </Container>
  )
}
