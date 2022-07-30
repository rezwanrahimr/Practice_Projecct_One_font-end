import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {

    return (
        <div>

<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.366a0da1e4d8f45cc01bc4698c153928?rik=Rh65vqeP5XQByQ&riu=http%3a%2f%2fwww.socomec.com%2ffiles%2flive%2fsites%2fsystemsite%2ffiles%2fUPS%2fservices%2fappli_531_a-b.jpg&ehk=8lZ4i%2fDTmFCgAaoC9bj%2bELTF5KoiCTvKiVcrg4Ev%2bZc%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.6f5d3e320a2cae12ad9dceaaf1371f6f?rik=pCJ26L9lQCCCjg&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://global-uploads.webflow.com/5fc8e6cf08e17bf384e456a5/5fd50d8e37945a22e4853b04_9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Banner;