import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { apiRoutes } from "../../api";

import { Container,Col,  Row } from 'react-bootstrap';

import Spinner from "../../component/spinner/Spinner";
import Locate from '../../component/locate/Locate' 
function LocationPage() {


    const [Location, setLocation] = useState(null);

    useEffect(() => {
        try {
            Axios.get(apiRoutes.locations)
                .then(response => {
                setLocation(response.data.results);
            })
            .catch(err => console.log(err))
        }catch(error){
            console.log(error)
        }
    }, [])
    console.log(Location)
    return (
        <Container>
            <Row>
                {!Location ? <Spinner />
                    : Location.map(loc => {
                        return (
                          <Col xs={12} md={4} lg={4} key={loc.id}>
                            <Locate location={loc} />
                          </Col>
                        );
                })}
            </Row>
       </Container>
    )
}

export default LocationPage
