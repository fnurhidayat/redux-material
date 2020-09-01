import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import style from './style.module.css'

const Person = ({ name, address, phoneNumber, photo }) => (
  <Card className="container-fluid p-4 text-center">
    <Card.Img variant="top" src={photo} className={style.photoProfile} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <Row className="my-2">
          <Col>{address}</Col>
        </Row>

        <Row className="my-2">
          <Col>{phoneNumber}</Col>
        </Row>
      </Card.Text>
      <Button variant="danger">Remove</Button>
    </Card.Body>
  </Card>
)

export default Person 
