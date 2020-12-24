import React from 'react';

// import components
import Header from './components/Header/index';
import Homepage from './pages/Homepage/index';

// import styling
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
