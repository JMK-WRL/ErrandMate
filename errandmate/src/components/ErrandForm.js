import React, { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(4),
        backgroundColor: '#fff',
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
        marginBottom: theme.spacing(2),
    },
    formField: {
        marginBottom: theme.spacing(2),
    },
}));

function ErrandForm() {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        description: '',
        category: '',
        location: '',
        deadline: '',
        instructions: '',
    });

    const { description, category, location, deadline, instructions } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Handle errand posting
    };

    return (
        <Container maxWidth="sm" className={classes.formContainer}>
            <Typography variant="h4" className={classes.formTitle}>Post an Errand</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Description"
                    name="description"
                    value={description}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                />
                <TextField
                    label="Category"
                    name="category"
                    value={category}
                    onChange={onChange}
                    select
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                >
                    <MenuItem value="groceries">Groceries</MenuItem>
                    <MenuItem value="pharmacy">Pharmacy</MenuItem>
                    <MenuItem value="postal">Postal Services</MenuItem>
                    <MenuItem value="drycleaning">Dry Cleaning</MenuItem>
                </TextField>
                <TextField
                    label="Location"
                    name="location"
                    value={location}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                />
                <TextField
                    label="Deadline"
                    name="deadline"
                    type="date"
                    value={deadline}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Instructions"
                    name="instructions"
                    value={instructions}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                />
                <Button type="submit" variant="contained" color="primary" className={classes.formField}>
                    Post
                </Button>
            </form>
        </Container>
    );
}

export default ErrandForm;
