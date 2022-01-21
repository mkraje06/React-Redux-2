import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchText = props.match.params.id;
  return {
    cards:  getCardsForSearchResults (state, searchText),
  };
};

export default connect(mapStateToProps)(SearchResults);