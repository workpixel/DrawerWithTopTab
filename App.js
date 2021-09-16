// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
    case 'SettingScreen':
        return 'Setting';
    case 'TabStack':
      return 'Home';
  }
};

const TabStack = props => {
  return (
    <Tab.Navigator
      initialRouteName={props.route.params.key}
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#f4511e',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#ffffff',
          borderBottomWidth: 4,
        },
      }}
      
      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: props.screenProps,
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="home"
             color={color}
             size={size}
            />
          ),*/
        }}
        listeners={{
          tabPress: e => {
              // Prevent default action
              e.preventDefault();
              props.navigation.navigate("HomeScreenStack");        
          },
        }}
        initialParams={{'key':'HomeScreen'}} 
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="settings"
             color={color}
             size={size}
            />
          ),*/
        }}

        listeners={{
          tabPress: e => {
              // Prevent default action
              e.preventDefault();
              props.navigation.navigate("ExploreScreenStack");
          },
        }}

        initialParams={{'key':'ExploreScreen'}} 
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting Screen',
          /*tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
             name="settings"
             color={color}
             size={size}
            />
          ),*/
        }}

        listeners={{
          tabPress: e => {
              // Prevent default action
              e.preventDefault();
              props.navigation.navigate("SettingScreenStack");
          },
        }}

        initialParams={{'key':'SettingScreen'}} 
      />
</Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="TabStack1"
        component={TabStack}
        initialParams={{'key':'HomeScreen'}} 
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (

    <Stack.Navigator initialRouteName="SettingScreen"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="TabStack2"
      component={TabStack}
      initialParams={{'key':'SettingScreen'}} 
    />
  </Stack.Navigator>

  );
};

const ExploreScreenStack = ({navigation}) => {
  return (

    <Stack.Navigator initialRouteName="ExploreScreen"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="TabStack3"
      component={TabStack}
      initialParams={{'key':'ExploreScreen'}} 
    />
  </Stack.Navigator>

  );
};  

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        >
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home Screen Left Nav'}}
          component={HomeScreenStack}
        />       
        <Drawer.Screen
          name="ExploreScreenStack"
          options={{drawerLabel: 'Explore Screen Left Nav'}}
          component={ExploreScreenStack}
        />
         <Drawer.Screen
          name="SettingScreenStack"
          options={{drawerLabel: 'Setting Screen Left Nav'}}
          component={SettingScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;