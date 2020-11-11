import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Locate({ location }) {

  const history = useHistory();
  const { url } = useRouteMatch();
  const { type, residents, dimension, name, id } = location;
    return (
      <div>
        <Card className="mb-2" onClick={() => history.push(`${url}/${id}`)}>
          <Card.Header>
            <strong>Dimension :</strong>
            {dimension}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {" "}
              Name:
              {name}{" "}
            </Card.Title>
            <Card.Text>
              <strong>Type :</strong>
              {type}
            </Card.Text>
            <Card.Text><strong>Residents :</strong> {residents.length} </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Locate
