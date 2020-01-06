import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CheckIn from './pages/CheckIn';
import HelpOrder from './pages/HelpOrder';
import HelpOrderAsk from './pages/HelpOrderNew/HelpOrderAsk';
import HelpOrderAnswer from './pages/HelpOrderNew/HelpOrderAnswer';

// import Answer from './pages/Answer';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn,
            HelpOrderNew: {
              screen: createStackNavigator({
                HelpOrderAsk,
                HelpOrderAnswer,
              }),
            },
            HelpOrder,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4d64',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
