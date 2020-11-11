import React from 'react';
import { Container } from 'react-bootstrap';


import './HomePage.css';


function HomePgae() {
    return (
      <Container className="home">
            <h2>Rick and Morty</h2>
            <hr />
        <div className="poster" >
          <img className="potser__image"
            src="https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-wallpaper-background-028.jpg"
            alt=""
          />
        </div>
      </Container>
    );
}

export default HomePgae
