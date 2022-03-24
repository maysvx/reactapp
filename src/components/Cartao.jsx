import React from 'react'
import { Button, Card, Carousel, Container, ListGroup, Nav, Navbar, Col, Row } from 'react-bootstrap';

const Cartao = ({img, text, titulo}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                 <Button variant="danger">Assista Agora</Button>
                </Card.Body>
              </Card>
    </div>
  )
}

export default Cartao