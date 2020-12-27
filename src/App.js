import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Layout
import MainLayout from './layout/MainLayout';
import HomepageLayout from './layout/HomepageLayout';
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
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/registration"
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
