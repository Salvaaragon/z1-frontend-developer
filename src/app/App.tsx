import Routes from '@Components/Routes';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
