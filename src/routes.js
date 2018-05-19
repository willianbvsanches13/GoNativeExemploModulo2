import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { metrics, colors } from 'styles';

import HeaderRight from 'components/HeaderRight';

// Pages
import Welcome from 'pages/welcome';
import Repositories from 'pages/repositories';
import Organizations from 'pages/organizations';

const headerTitle = (state) => {
  switch (state) {
    case 0:
      return 'Repositórios';
    case 1:
      return 'Organizações';
    default:
      return '';
  }
};

const createNavigator = (isLogged = false) =>
  createStackNavigator({
    Welcome: { screen: Welcome },
    User: {
      screen: createBottomTabNavigator({
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
      }, {
        tabBarOptions: {
          shoIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColo: colors.whiteTransparent,
          style: {
            backgroundColor: colors.secundary,
          },
        },
      }),
    },
  }, {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: ({ navigation }) => ({
      title: headerTitle(navigation.state.index),
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  });

export default createNavigator;
