import React from 'react';

// Components
import Header from './../components/Header';
import Footer from './../components/Footer';

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
