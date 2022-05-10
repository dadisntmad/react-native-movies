import React from 'react';
import { BottomTabNavigator } from './BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
