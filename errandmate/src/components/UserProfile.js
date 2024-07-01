import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import { Button, TextField, Container, Avatar } from '@mui/material'; // Updated import

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    name: '',
    photo: '',
    location: '',
    bio: ''
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        firestore.collection('profiles').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            setProfile(doc.data());
          }
        });
      }
    });
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (user) {
      firestore.collection('profiles').doc(user.uid).set(profile);
    }
  };

  return (
    <Container>
      <Avatar src={profile.photo} />
      <TextField name="name" label="Name" value={profile.name} onChange={handleChange} />
      <TextField name="photo" label="Photo URL" value={profile.photo} onChange={handleChange} />
      <TextField name="location" label="Location" value={profile.location} onChange={handleChange} />
      <TextField name="bio" label="Bio" value={profile.bio} onChange={handleChange} />
      <Button onClick={handleSave}>Save</Button>
    </Container>
  );
};

export default UserProfile;
