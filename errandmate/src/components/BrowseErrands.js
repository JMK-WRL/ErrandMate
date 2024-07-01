// src/components/BrowseErrands.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { Container, List, ListItem, ListItemText, MenuItem, Select, InputLabel } from '@material-ui/core';

const categories = ['All', 'Groceries', 'Pharmacy', 'Postal Services'];

const BrowseErrands = () => {
    const [errands, setErrands] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchErrands = async () => {
            const errandsSnapshot = await firestore.collection('errands').get();
            setErrands(errandsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchErrands();
    }, []);

    const filteredErrands = filter === 'All' ? errands : errands.filter(errand => errand.category === filter);

    return (
        <Container>
            <InputLabel id="category-filter-label">Category</InputLabel>
            <Select labelId="category-filter-label" value={filter} onChange={(e) => setFilter(e.target.value)}>
                {categories.map((category) => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
            </Select>
            <List>
                {filteredErrands.map((errand) => (
                    <ListItem key={errand.id}>
                        <ListItemText primary={errand.description} secondary={`${errand.location} - ${errand.deadline}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default BrowseErrands;
