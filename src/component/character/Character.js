import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Card, Badge } from 'react-bootstrap';
import './Character.css'

function Character({character }) {

  const history = useHistory();
  const { url } = useRouteMatch()
  const { image,  name, id } = character;
  
  return (
    <Card className="card" onClick={() => history.push(`${url}/${id}`)}>
      <Card.Img variant="top" src={image} alt={character.status} />
      <Card.Body>
        <Card.Text>
          <p> Name :</p> <Badge variant="primary">{name}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

  


export default Character
