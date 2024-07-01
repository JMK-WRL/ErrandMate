import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpLogin from './components/SignUpLogin';
import UserProfile from './components/UserProfile';
import PostErrand from './components/PostErrand';
import BrowseErrands from './components/BrowseErrands';
import Chat from './components/Chat';
import ReviewRating from './components/ReviewRating';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup-login" component={SignUpLogin} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;
