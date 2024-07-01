import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Updated import

import SignUpLogin from './components/SignUpLogin';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/signup-login" element={<SignUpLogin />} /> {/* Changed component to element */}
        <Route path="/user-profile" element={<UserProfile />} /> {/* Changed component to element */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
