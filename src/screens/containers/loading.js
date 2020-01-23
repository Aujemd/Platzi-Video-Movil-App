import React, { Component } from 'react';
import LoadingLayout from '../../sections/components/loading';
import { connect } from 'react-redux';
import {StatusBar} from 'react-native';

class Login extends Component {

    componentDidMount(){

        this.focus = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('white'); //Solo en android porque en IOS EL Background  color es transparante
        });

        if(this.props.user){
            this.props.navigation.navigate('App');
        }else{
            this.props.navigation.navigate('Login');
        }

    }

    render(){
        return(
            <LoadingLayout></LoadingLayout>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Login);