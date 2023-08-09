import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AllTrainsPage from './AllTrainsPage';
import SingleTrainPage from './SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={AllTrainsPage} />
          <Route path="/train/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
