import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { InfoTeamScreen } from '../Screens/InfoTeam/screens/index';
import { FormScreen } from '../Screens/InfoTeam/screens/Form';
import { SuccesScreen } from '../Screens/InfoTeam/screens/Success';


const { Navigator, Screen } = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{presentation: 'card'}}>
                <Screen name="InfoTeam" component={InfoTeamScreen} options={{ headerShown: false, }} />
                <Screen name="Form" component={FormScreen} options={{ headerShown: false, }} />
                <Screen name="Success" component={SuccesScreen} options={{ headerShown: false, }} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Router;