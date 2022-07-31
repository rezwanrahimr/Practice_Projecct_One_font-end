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
    
    // Delete method
    const handleDelete = id =>{
       const process = window.confirm('are you sure delete this item');
       if(process){
        const url = `http://localhost:5000/service/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            alert('delete item')
            const result = service.filter(servicess => servicess._id !== id);
            setService(result);
        })
       }
    }
   
    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-4'>OUR SERVICE</h1>
            <section >
                <h3 className='mt-3'>OUR EXPERT</h3>
                <div className='d-flex'>
                {
                    service.map(services => <>
                        <Card className='p-3 m-3' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={services.photoUrl} />
                            <Card.Body>
                                <Card.Title>{services.name}</Card.Title>
                                <Card.Text>
                                    {services.someText}
                                </Card.Text>
                                <Link to={`/singleUser/${services._id}`}><Button variant="primary">Go somewhere</Button></Link>
                                <Button className='ms-2' variant="primary" onClick={()=> handleDelete(services._id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </>)
                }
                </div>
            </section>
        </div>
    );
};

export default Home;