// src/components/SignUpLogin.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { Button, TextField, Container } from '@material-ui/core';

const SignUpLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSignUp}>Sign Up</Button>
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default SignUpLogin;

