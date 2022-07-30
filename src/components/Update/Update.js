import React from 'react';

const Update = () => {
    const handleUpdate = event =>{
        const name = event.target.name.value;
        const url = event.target.url.value; 
    }
    return (
        <div>
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