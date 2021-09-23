import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfoTeamScreen } from '../Screens/InfoTeam/screens/index';
import { View, Text, StatusBar } from 'react-native';
import * as options from './options';


const { Navigator, Screen } = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{presentation: 'card'}}>
                <Screen name="InfoTeam" component={InfoTeamScreen} options={{ headerShown: false, }} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Router;