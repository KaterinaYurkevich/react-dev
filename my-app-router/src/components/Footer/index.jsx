import React from 'react'
import { Container } from 'react-bootstrap'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container className='text-center'>
        <div className='footer_contacts'>
          <p className="our-contacts-adress-email">E-mail:&nbsp; 
             <a href="mailto:wildvacation@gmail.com">actual_news@gmail.com</a>
          </p>
          <p className="our-contacts-adress-adress">Адрес:&nbsp;
            <span>Немига 5а, офис 18,  Минск</span>
          </p>
          <p>Mobile:&nbsp; 
            <div className="box-phone">
              <p><a href="tel:+375 33 888-44-22">+375 33 300-30-30</a></p>
              <p><a href="tel:+375 29 963-85-21">+375 29 111-00-00</a></p>
            </div>
          </p>
        </div>
        <b>Created at {currentYear}</b>
      </Container>
    </footer>
  )
}
