import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
// import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
      // changeSearchString: PropTypes.func,
      // match: PropTypes.any,
    }

    render() {
      const { cards } = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name='cat' />
            </span>
              TITLES
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      );
    }
}

export default SearchResults;