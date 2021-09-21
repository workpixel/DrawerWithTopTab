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
import {ScrollView,Text, Button, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';


import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import SettingScreen from './SettingScreen';
import GameScreen from './GameScreen';
import HealthScreen from './HealthScreen';
import {useRoute} from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const CustomDrawer = (props) => {
  let last          = props.state.routes;

  //let curentScreen = props.navigation.state.routes[0].routes[last].routeName;

  //console.log(last);

 console.log( props.state.routes[0].state.index);

  return (
    <ScrollView style={styles.container}>
      <View  style={{ flex: 1, color: "#ff5c00" }}  >
        

<DrawerItem
            label='Home'
           focused={getActiveRouteState2(
            props,
            'HomeScreenStack'
          )}
          onPress={() => {
            props.navigation.dispatch({
              ...CommonActions.reset({
                index: 2,
                routes: [{ name: "HomeScreen" }]
              })
            });
            props.navigation.navigate('HomeScreen');
          }}
          />
<DrawerItem
            label='Explore'
            focused={getActiveRouteState2(
              props,
              'ExploreScreenStack'
            )}
            onPress={() => {
              props.navigation.navigate('ExploreScreen');
            }}
          />

<DrawerItem
            label='Setting'
           
            focused={getActiveRouteState2(
              props,
              'SettingScreenStack'
            )}
            onPress={() => {
              props.navigation.navigate('SettingScreen');
            }}

          />

<DrawerItem
            label='Game'
           
            focused={getActiveRouteState2(
              props,
              'GameScreenStack'
            )}
            onPress={() => {
              props.navigation.navigate('GameScreen');
            }}

          />

<DrawerItem
            label='Health'
           
            focused={getActiveRouteState2(
              props,
              'HealthScreenStack'
            )}
            onPress={() => {
              props.navigation.navigate('HealthScreen');
            }}

          />
      </View>
    </ScrollView>
  );
};

const getActiveRouteState = function (routes, index, name) {
  if(routes[index].name === name){
    return true;
  } else {
    return false;
  }
};


const getActiveRouteState2 = function (myprops,routeName) {
  const { items } = myprops;
  const currentRouteName = myprops.state.routeNames[myprops.state.routes[0].state.index];

  console.log(myprops.state.index,currentRouteName,routeName);

  return currentRouteName === routeName;
};

const styles = StyleSheet.create ({
  myState: {
    alignSelf: 'flex-end',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'red'
  },
  container: {
    flex: 1, 
    textAlign: 'left',
    marginTop: 60,
    color:"#ff5c00",
  },
})

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


const TabStack = props => {
  return (
    <Tab.Navigator
      initialRouteName={props.route.params.screen}
      screenOptions={{
        "tabBarActiveTintColor": "#FFFFFF",
        "tabBarInactiveTintColor": "#F8F8F8",
        "tabBarLabelStyle": {
          "textAlign": "center"
        },
        "tabBarIndicatorStyle": {
          "borderBottomColor": "#ffffff",
          "borderBottomWidth": 4
        },
        "tabBarStyle": {
          "backgroundColor": "#f4511e"
        },
      }}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#e91e63',
      }}
      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
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
              props.navigation.navigate("HomeScreen");        
          },
        }}
        initialParams={{'key':'HomeScreenStack'}} 
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
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
              props.navigation.navigate("ExploreScreen");
              
          },
        }}

        initialParams={{'key':'ExploreScreenStack'}} 
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
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
              props.navigation.navigate("SettingScreen");
          },
        }}

        initialParams={{'key':'SettingScreenStack'}} 
      />

      <Tab.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          tabBarLabel: "National Games",
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
              props.navigation.navigate("GameScreen");
          },
        }}

        initialParams={{'key':'GameScreenStack'}} 
      />

<Tab.Screen
        name="HealthScreen"
        component={HealthScreen}
        options={{
          tabBarLabel: "Health News",
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
              props.navigation.navigate("HealthScreen");
          },
        }}

        initialParams={{'key':'HealthScreenStack'}} 
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



const ExploreScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ExploreScreen"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="TabStack2"
      component={TabStack}
      initialParams={{'key':'TabStack2'}} 
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
      name="TabStack3"
      component={TabStack}
      initialParams={{'key':'TabStack3'}} 
    />
  </Stack.Navigator>

  );
};

const GameScreenStack = ({navigation}) => {
  return (

    <Stack.Navigator initialRouteName="GameScreen"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="TabStack4"
      component={TabStack}
      initialParams={{'key':'TabStack4'}} 
    />
  </Stack.Navigator>

  );
};

const  HealthScreenStack = ({navigation}) => {
  return (

    <Stack.Navigator initialRouteName="HealthScreen"  screenOptions={{
      headerShown: false
    }}>
    <Stack.Screen
      name="TabStack5"
      component={TabStack}
      initialParams={{'key':'TabStack5'}} 
    />
  </Stack.Navigator>

  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition={'right'}
        drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }}
        drawerContent={(props) => <CustomDrawer {...props} />}
        >
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home Screen Left Nav',}}
          component={TabStack}
          initialParams={{screen:'HomeScreen'}}
        />       
        <Drawer.Screen
          name="ExploreScreenStack"
          options={{drawerLabel: 'Explore Screen Left Nav'}}
          component={TabStack}
          initialParams={{screen:'ExploreScreen'}}
        />
         <Drawer.Screen
          name="SettingScreenStack"
          options={{drawerLabel: 'Setting Screen Left Nav'}}
          component={TabStack}
          initialParams={{screen:'SettingScreen'}}
        />
        <Drawer.Screen
          name="GameScreenStack"
          options={{drawerLabel: 'Game Screen Left Nav'}}
          component={TabStack}
          initialParams={{screen:'GameScreen'}}
        />
        <Drawer.Screen
          name="HealthScreenStack"
          options={{drawerLabel: 'Health Screen Left Nav'}}
          component={TabStack}
          initialParams={{screen:'HealthScreen'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;