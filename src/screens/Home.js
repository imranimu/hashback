//import liraries
import { Link } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class HomeScreen extends Component {

    constructor(props) {
        super(props);      
        this.state = {
          token: '',
          apiurl: '', 
        };
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{color: "#000"}}>Home Screen | Hash Ads</Text>

                <Link to={{screen: 'Login'}}>Go Login</Link>   

                <TouchableOpacity onPress={() => navigate('Login')}>
                    <Text>Touch Here</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
});

//make this component available to the HomeScreen
export default HomeScreen;
