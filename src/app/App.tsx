import Routes from '@Components/Routes';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '@Store/configStore';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  const { persistor, store } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
