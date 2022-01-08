import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqData } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText= {faqData.title} image={faqData.image}/>
    {/* <h2>FAQ</h2> */}
    <h2>FAQ</h2>
    <p>{faqData.text}</p>
  </Container>
);

Faq.propTypes = {
  image: PropTypes.node,
};

export default Faq;