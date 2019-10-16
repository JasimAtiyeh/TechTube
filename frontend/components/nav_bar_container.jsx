import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {logout} from '../actions/session_actions';

const mapStateToProps = state => {
  let userId = state.session.id;
  let currentUser = state.entities.users[userId];

  return {currentUser};
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);