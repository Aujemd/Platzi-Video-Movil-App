import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import Close from './sections/components/close';
const Main = createStackNavigator(
    {
        Home,
        Movie,
        Category,
    },
    {
        navigationOptions: {
            header : () => <Header></Header>
        }
    }
)

export default createAppContainer(Main);