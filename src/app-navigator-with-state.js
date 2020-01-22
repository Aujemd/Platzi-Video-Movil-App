import { connect } from'react-redux';
import AppNavigator from'./app-navigator';
import {
  createReduxContainer,
} from'react-navigation-redux-helpers';

const AppNavigatorWithState = createReduxContainer(AppNavigator, 'root');

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)