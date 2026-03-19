import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './navigation/RootNavigation'
import { AuthProvider } from "./context/AuthContext"
export default function App() {
  return (
     <AuthProvider>
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
    </AuthProvider>
  )
}