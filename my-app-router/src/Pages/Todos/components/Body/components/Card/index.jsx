import React from 'react';
import { Card as StoryCard } from 'react-bootstrap';

export function Card (props) {
  const { id, title, completed } = props;
   
  return (
    <StoryCard className="cards cards_todo">
      <StoryCard.Body className="cards_body">
          <StoryCard.Title className="cards_title">{id}: {title}</StoryCard.Title>
          <StoryCard.Text className="cards_text card_text_todo">
            Completed: {completed ? 'true' : 'false'}
          </StoryCard.Text>
      </StoryCard.Body>
    </StoryCard>
  )
}

