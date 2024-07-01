// src/components/PostErrand.js
import React, { useState } from 'react';
import { firestore } from '../firebase';
import { Button, TextField, Container, MenuItem, Select, InputLabel } from '@material-ui/core';

const categories = ['Groceries', 'Pharmacy', 'Postal Services'];

const PostErrand = () => {
    const [errand, setErrand] = useState({
        description: '',
        location: '',
        deadline: '',
        instructions: '',
        category: ''
    });

    const handleChange = (e) => {
        setErrand({ ...errand, [e.target.name]: e.target.value });
    };

    const handlePost = () => {
        firestore.collection('errands').add(errand);
    };

    return (
        <Container>
            <TextField name="description" label="Description" value={errand.description} onChange={handleChange} />
            <TextField name="location" label="Location" value={errand.location} onChange={handleChange} />
            <TextField name="deadline" label="Deadline" type="date" value={errand.deadline} onChange={handleChange} />
            <TextField name="instructions" label="Instructions" value={errand.instructions} onChange={handleChange} />
            <InputLabel id="category-label">Category</InputLabel>
            <Select labelId="category-label" name="category" value={errand.category} onChange={handleChange}>
                {categories.map((category) => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
            </Select>
            <Button onClick={handlePost}>Post Errand</Button>
        </Container>
    );
};

export default PostErrand;
