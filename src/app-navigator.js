import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react'
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import Header from './sections/components/header';
import About from './screens/containers/about';
import Lucky from './screens/containers/lucky';
import Loading from './screens/containers/loading';
import Login from './screens/containers/login';
import Profile from './screens/containers/profile';
import {Text} from 'react-native';

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

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions:{
                title: 'Inicio',
                tabBarIcon: <Text>🏠</Text>,
            }
        },
        About: {
            screen: About,
        },
        Lucky: {
            screen: Lucky,
        },
        Profile: {
            screen: Profile,
        }
    },
    {
        tabBarOptions:{
            activeTint: 'white',
            activeBackgroundColor: '#65a721',
        }
    }
)

const SwitchNavigator = createSwitchNavigator(
    {   
        App: TabNavigator,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Loading',
    }
)
export default createAppContainer(SwitchNavigator);