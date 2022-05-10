import React from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen/SearchScreen';
import { UpcomingMovieScreen } from '../screens/UpcomingMovieScreen/UpcomingMovieScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types/navigation';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#181818',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={26} color={color} />,
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingMovieScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="local-movies" size={26} color={color} />,
          title: 'Coming Soon',
        }}
      />
    </Tab.Navigator>
  );
};
