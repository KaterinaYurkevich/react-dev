import React from 'react';
import { Link } from 'react-router-dom'
import { Card as StoryCard } from 'react-bootstrap';

export function Card (props) {
  const { id, title, body } = props;
   
  return (
    <StoryCard className="cards">
      <StoryCard.Body className="cards_body">
          <StoryCard.Title className="cards_title">{title}</StoryCard.Title>
          <StoryCard.Text className="cards_text">
            {body}
          </StoryCard.Text>
          <Link to={`/More about this/${id}`} className="card-button">Read more</Link>
      </StoryCard.Body>
    </StoryCard>
  )
}

