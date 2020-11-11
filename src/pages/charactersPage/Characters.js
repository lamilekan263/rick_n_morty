import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col, Container } from "react-bootstrap";

import Character from '../../component/character/Character'
import { apiRoutes } from '../../api';
import Spinner from '../../component/spinner/Spinner';

function Characters(props) {
    const [characterList, setcharacterList] = useState(null);
    console.log(props)
    useEffect(() => {
        try {
            Axios.get(apiRoutes.characters)
                .then(response => {
                    setcharacterList(response.data.results)
                })
            .catch()
        } catch (err) {
            console.log(err)
        }
    }, [])
   console.log(characterList)
    return (
      <Container>
        <Row>
          {!characterList ? (
            <Spinner />
          ) : (
            characterList.map((char) => {
              return (
                <Col xs={12} md={4} lg={4} key={char.id} >
                  <Character character={char} />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    );
}

export default Characters
