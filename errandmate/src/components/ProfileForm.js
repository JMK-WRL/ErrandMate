// src/components/ProfileForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function ProfileForm() {
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
        <Container>
            <Typography variant="h4">Edit Profile</Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Bio"
                    name="bio"
                    value={bio}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Location"
                    name="location"
                    value={location}
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Save
                </Button>
            </form>
        </Container>
    );
}

export default ProfileForm;
