import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Update = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const handleUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoUrl = event.target.url.value;
        const someText = event.target.someText.value;
        const data = { name, photoUrl, someText };

        // put method
        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('update item sucessfully')
            })
    }

    // get method
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service);
    return (
        <div>

            <div>
                <h1>Load A single user</h1>
                <section>
                    
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={service.photoUrl} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.someText}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                 
                </section>
            </div>
            <h1>update : </h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='Name' />
                <input type="text" name='url' placeholder='Url' />
                <input type="text" name='someText' placeholder='some text' />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;