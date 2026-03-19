import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function BottomTabs() {

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle:{height:65}
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon:()=>(
            <Image
              source={require('../images/i_home.png')}
              style={{width:24,height:24}}
            />
          )
        }}
      />

      <Tab.Screen
        name="Order"
        component={CartScreen}
        options={{
          tabBarIcon:()=>(
            <Image
              source={require('../images/i_oder.png')}
              style={{width:24,height:24}}
            />
          )
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={CartScreen}
        options={{
          tabBarIcon:()=>(
            <Image
              source={require('../images/i_inbox.png')}
              style={{width:24,height:24}}
            />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon:()=>(
            <Image
              source={require('../images/i_profile.png')}
              style={{width:24,height:24}}
            />
          )
        }}
      />

    </Tab.Navigator>

  )
}