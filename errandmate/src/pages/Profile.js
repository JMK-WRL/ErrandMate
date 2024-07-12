import React, { useState } from 'react';
import { TextField, Button, Container, Typography, makeStyles } from '@material-ui/core';

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

function ProfileForm() {
    const classes = useStyles();

    const [formData, setFormData] = useState({
        bio: '',
        location: '',
    });

    const { bio, location } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Handle profile update
    };

    return (
        <Container maxWidth="sm" className={classes.formContainer}>
            <h1>Edit Profile</h1>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Bio"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                />
                <TextField
                    label="Location"
                    name="location"
                    value={location}
                    onChange={onChange}
                    fullWidth
                    variant="outlined"
                    className={classes.formField}
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </Container>
    );
}

export default ProfileForm;
