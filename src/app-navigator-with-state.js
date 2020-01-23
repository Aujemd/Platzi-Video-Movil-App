import { 
  createReduxContainer
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";

class AppNavigatorWithState extends createReduxContainer(AppNavigator, 'root') {
componentDidMount() {
  super.componentDidMount && super.componentDidMount();
  BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  super.componentWillUnmount && super.componentWillUnmount();
}

onBackButtonPressAndroid = () => {
  const { dispatch } = this.props;
  const { state } = this.getCurrentNavigation();
  // ... do something with state
  dispatch(NavigationActions.back());
  return true;
};
}

const mapStateToProps = (state) => {
return {
  state : state.navigation
}
}
export default connect(mapStateToProps)(AppNavigatorWithState);