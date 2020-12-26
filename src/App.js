import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layout
import MainLayout from './layout/MainLayout';

// Pages
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration/index';

// Styling
import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
