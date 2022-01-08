import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { infoData } from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    {/* <h2>Info</h2> */}
    <p>{infoData.text}</p>
  </Container>
);

Info.propTypes = {
  image: PropTypes.node,
};

export default Info;