import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Albums } from '../components/Albums';
import { SharedAlbum } from '../components/SharedAlbum';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Albums' component={Albums}></Stack.Screen>
            <Stack.Screen name='Shared Albums' component={SharedAlbum}></Stack.Screen>
        </Stack.Navigator>
    );
};
