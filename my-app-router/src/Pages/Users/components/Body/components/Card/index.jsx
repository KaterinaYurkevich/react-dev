import React from 'react';
import { Card as StoryCard } from 'react-bootstrap';

export function Card (props) {
  const { name, username, email, address, phone, website, company } = props;
     
  return (
    <StoryCard className="cards_user">
      <StoryCard.Body className="cards_body">
          <StoryCard.Title className="cards_title">{name}</StoryCard.Title>
          <StoryCard.Text className="cards_text">
            Login: {username}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
            Email: {email}
          </StoryCard.Text>
          <p>Address:</p>
          <StoryCard.Text className="cards_text">
            City: {address.city}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
            Street: {address.street}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
          Suite: {address.suite}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
            Phone: {phone}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
            Website: {website}
          </StoryCard.Text>
          <StoryCard.Text className="cards_text">
            Company: {company.name}
          </StoryCard.Text>
      </StoryCard.Body>
    </StoryCard>
  )
}

