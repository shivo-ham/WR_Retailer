import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  Dimensions,
  YellowBox,
} from 'react-native';

const width = Dimensions.get('window').width;
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Warning: Encountered two children with the same key',
  'Warning: Each child is an array',
  'Class RCTCxxModule',
]);
console.disableYellowBox = true;
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createAppContainer,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import Sidebar from './src/component/Sidebar';
import Registration from './src/screen/Registration';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import ChangePassword from './src/screen/ChangePassword';
import Feedback from './src/screen/Feedback';



 
export const GMMDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'GMMPfaudler',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-home" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Profile:{screen:Profile},
    ChangePassword : {screen: ChangePassword},  
    Feedback:{screen:Feedback}
  },
  {
    initialRouteName: 'Home',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerPosition: 'left',
    drawerWidth: width * 0.8,
    contentOptions: {
      activeTintColor: '#e60000',
      activeBackgroundColor: 'purple',
      style: {
        marginVertical: 0,
      },
      labelStyle: {
        backgroundColor: 'transparent',
      },
    },
    contentComponent: (props, tintColor) => <Sidebar {...props} />,
  },
);

const Application = createStackNavigator(
   {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Registration:{screen:Registration},
    Home: {screen: GMMDrawer},  
    Profile:{screen:Profile},
    ChangePassword : {screen: ChangePassword},  
       Feedback:{screen:Feedback}
  },{headerMode:'none'}
);
const AppNavigator = createAppContainer(Application);
export default AppNavigator 
