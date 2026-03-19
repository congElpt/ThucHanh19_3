import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity
} from "react-native"

import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export default function RegisterScreen({ navigation }) {

  const { register } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    if (!email || !password) return

    register(email, password)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Đăng ký</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={{color:"#fff"}}>Đăng ký</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", padding:20 },
  title:{ fontSize:22, fontWeight:"700", marginBottom:20 },
  input:{ backgroundColor:"#eee", padding:12, marginBottom:10, borderRadius:10 },
  button:{ backgroundColor:"#5A54F9", padding:15, borderRadius:10, alignItems:"center" }
})