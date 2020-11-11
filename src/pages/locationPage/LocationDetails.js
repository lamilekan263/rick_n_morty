import React, { useState, useEffect } from 'react';
import { Container, Row, Image,Col } from 'react-bootstrap';
import { Link  } from 'react-router-dom'
import Axios from "axios";
import Spinner from '../../component/spinner/Spinner';
import { apiRoutes } from "../../api";
function LocationDetails({ match }) {

    const id = match.params.id;
  const [locationDetails, setlocationDetails] = useState(null);
  const [url, seturl] = useState(null)
  useEffect(() => {
    try {
      Axios.get(`${apiRoutes.locations}/${id}`)
        .then(response => {
          setlocationDetails(response.data)
          const promiseArray = response.data.residents.map(url => Axios.get(url));
          Promise.all(promiseArray).then(res => {
            const result = res.map( el => el.data)
            seturl(result)
})
         
        })
      .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
      }
    }, [id])
    console.log(url);
  


    return (
      <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Link to="/location">back</Link>

        <div>
          {!locationDetails  ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <div>
                <h4>{locationDetails.name}</h4>
                <hr />
                <p>Dimention : {locationDetails.dimension}</p>
                <p>Type : {locationDetails.type}</p>
              </div>
              <div>
                <h4>Residents</h4>
                <hr />
                  <Row>
                    {!url ? (
                      <h1>No Resident here</h1>
                    ) : (url && Array.isArray(url)&& url.map( ul => {
                          return (
                            <Col xs={12} md={4} key={ul.id}>
                              <Container>
                                <center>
                                  <p>name: {ul.name}</p>
                                </center>
                                <Image src={ul.image} roundedCircle />
                              </Container>
                            </Col>
                          );
                        })
                   )}
                  </Row>
              </div>
            </React.Fragment>
          )}
        </div>
      </Container>
    );
}

export default LocationDetails
