import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {colors} from '../styles/base';

//All Home related screens are imported here
import Dashboard from '../screens/Dashboard/Main';
import MakeInvestment from '../screens/Dashboard/More';

//All Account related screens are imported here
import Account from '../screens/Account/Main';
import AccountDetails from '../screens/Account/more';

//All Trading  related screens are imported here
import TradingViews from '../screens/Trade/Main';
import DetailsScreen from '../screens/Trade/more';

//All Tips and Financial related screens are imported here
import AddyTips from '../screens/AddyTips/Main';
import More from '../screens/AddyTips/more';

//All Authentication and Splash screens related screens are imported here
import Login from '../screens/Start/Login';
import SignUp from '../screens/Start/SignUp';
export default class Router extends Component {
  render() {
    return <AppContainer />;
  }
}

const DashboardNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    'Make Investment': MakeInvestment,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
);

const AccountNavigator = createStackNavigator(
  {
    Account: Account,
    'Investment Breakdown': AccountDetails,
  },

  {
    defaultNavigationOptions: {
      headerShown: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Account',
    },
  },
);

const TradingIdeaNavigator = createStackNavigator(
  {
    'Trading Ideas': TradingViews,
    Details: DetailsScreen,
  },

  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Trading Ideas',
    },
  },
);

const AddyTipsNavigator = createStackNavigator(
  {
    AddyTips: AddyTips,
    Details: More,
  },

  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'AddyTip',
    },
  },
);

const AppRouter = createBottomTabNavigator({
  Home: DashboardNavigator,
  Account: AccountNavigator,
  AddyTips: AddyTipsNavigator,
  'Trade Ideas': TradingIdeaNavigator,
});

const AuthNavigation = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppRouter,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);
