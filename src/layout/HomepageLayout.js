import React from 'react';

// Components
import Header from './../components/Header';

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
    </div>
  );
};

export default HomepageLayout;
