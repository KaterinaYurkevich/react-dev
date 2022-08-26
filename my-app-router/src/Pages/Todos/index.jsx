import React from 'react';
import { Container } from 'react-bootstrap';
import { Body } from "./components/Body";

export function Todos() {
  return (
    <Container>
      <h1>Todos</h1>
      <Body />
    </Container>
  )
}