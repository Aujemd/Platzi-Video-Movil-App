import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Loading from './sections/components/loading';

const Main = createStackNavigator(
    {
        Home: Loading
    }
)

export default createAppContainer(Main);