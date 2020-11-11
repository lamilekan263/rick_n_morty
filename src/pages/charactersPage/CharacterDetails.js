import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Card, Badge } from "react-bootstrap";
import Axios from 'axios';
import Spinner from "../../component/spinner/Spinner";
import { apiRoutes } from '../../api'


function CharacterDetails({ match }) {
    const id = match.params.id;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        try {
            Axios.get(`${apiRoutes.characters}/${id}`)
                .then(response => {
                setDetails( response.data)
            })
            .catch( err => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }, [id])
    console.log(details)
    if (!details) {
        return <Spinner />
    }
     const {  origin,image, location, species, gender, status} = details
    return (
      <Container style={{marginTop :'20px', marginBottom :'20px'}}>
        <Link to="/characters">
          <p>back</p>
        </Link>
        <h5>CharacterDetails</h5>
        <hr />
        <Card className="card">
          <Row>
            <Col sm={12} md={4} lg={6}>
              <Card.Img variant="top" src={image} alt={status} />
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Card.Body>
                <Card.Text>
                  <strong>Origin :</strong>{" "}
                  <Badge variant="primary">{origin.name}</Badge>
                </Card.Text>
                <Card.Text>
                  <strong>Location :</strong>{" "}
                  <Badge variant="primary">{location.name}</Badge>
                </Card.Text>
                <Card.Text>
                  <strong>Species :</strong>{" "}
                  <Badge variant="primary">{species}</Badge>
                </Card.Text>
                <Card.Text>
                  <strong>Gender :</strong>{" "}
                  <Badge variant="primary">{gender}</Badge>
                </Card.Text>
                <Card.Text>
                  <strong>Status :</strong>{" "}
                  <Badge variant="primary">{status}</Badge>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
}

export default CharacterDetails
