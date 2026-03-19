import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

import BottomTabs from './BottomTabs'
import CartScreen from '../screens/CartScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createNativeStackNavigator()

export default function RootNavigation(){

  const { user } = useContext(AuthContext)

  return(

    <Stack.Navigator screenOptions={{headerShown:false}}>

      {user ? (
        <>
          <Stack.Screen name="Main" component={BottomTabs}/>
          <Stack.Screen name="Cart" component={CartScreen}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
        </>
      )}

    </Stack.Navigator>

  )
}