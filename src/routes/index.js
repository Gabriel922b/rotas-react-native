import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import HomeScreen from "../screens/HomeScreen"; 
//import DetailScreen from "../screens/DetailScreen";
//import Login from "../screens/Login";
import Login02 from "../screens/Login02";
import Home02 from "../screens/Home02.jsx";

import { Component } from "react";


const Stack = createNativeStackNavigator();

export default class Routes extends Component {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login02">
                    <Stack.Screen
                        name="Login02"
                        component={ Login02 }
                        options={{title: 'Tela de Login'}}
                    />
                    <Stack.Screen
                        name="Home02"
                        component={ Home02 }
                        options={{title: 'Tela inicial'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}