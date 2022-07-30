import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    console.log(service)
    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-4'>OUR SERVICE</h1>
            <section>
                <h3 className='mt-3'>OUR EXPERT</h3>
                {
                    service.map(services => <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={services.photoUrl} />
                            <Card.Body>
                                <Card.Title>{services.name}</Card.Title>
                                <Card.Text>
                                    {services.someText}
                                </Card.Text>
                                <Link to={`/singleUser/${services._id}`}><Button variant="primary">Go somewhere</Button></Link>
                            </Card.Body>
                        </Card>
                    </>)
                }
            </section>
        </div>
    );
};

export default Home;