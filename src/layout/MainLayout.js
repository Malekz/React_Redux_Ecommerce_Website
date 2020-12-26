import React from 'react';

// Components
import Header from './../components/Header';

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="main">{props.children}</div>
    </div>
  );
};

export default MainLayout;
