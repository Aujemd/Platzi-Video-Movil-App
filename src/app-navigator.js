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
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerComponent from './sections/components/drawer';

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
                drawerIcon: <Text>🏠</Text>,
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

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions:{
                title: 'Inicio',
                drawerIcon: <Text>🏠</Text>,
            }
        },

        Sobre:{
            screen: About,
        },
        Suerte:{
            screen: Lucky,
        },

    },
    {
        drawerWidth: 200,
        drawerBackgroundColor: '#f6f6f6',
        contentOptions:{ //Como se ven los items dentro del drawer
            activeBackgroundColor: '#7aba2f',
            activeTintColor: 'white',
            inactiveTintColor: '#828282',
            inactiveBackgroundColor: 'white',
            itemStyle:{
                boderBottomWidth: .5,
                boderBottomColor: 'rgba(0, 0, 0, .5)',
            },
            labelStyle: {
                marginHorizontal: 0,
            },
            iconContainerStyle: {
                marginHorizontal: 5,
            }
        },
        contentComponent: DrawerComponent,
    }
)

const SwitchNavigator = createSwitchNavigator(
    {   
        App: DrawerNavigator,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Loading',
    }
)
export default createAppContainer(SwitchNavigator);