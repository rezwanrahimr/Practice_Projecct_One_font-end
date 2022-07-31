import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleUser = () => {

    const { id } = useParams();
    const [singleSer, setSingleService] = useState([]);
    const url = `http://localhost:5000/service/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, [])
    console.log(singleSer);
    return (
        <div>
            <h1>Load A single user</h1>
            <section>
                {
                    singleSer.map(useer => <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={useer.photoUrl} />
                            <Card.Body>
                                <Card.Title>{useer.name}</Card.Title>
                                <Card.Text>
                                    {useer.someText}
                                </Card.Text>
                                <Link to={`/update/${useer._id}`}><Button>Update</Button></Link>
                            </Card.Body>
                        </Card>
                    </>)}
            </section>
        </div>
    );
};

export default SingleUser;