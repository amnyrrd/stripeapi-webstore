import React from 'react';
import Directory from '../../components/directory/Directory';
// import './Homepage.styles.scss';

import { HomepageContainer } from './Homepage.styles';

const Homepage = ({ history }) => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
