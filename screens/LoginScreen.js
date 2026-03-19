import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native"

import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export default function LoginScreen({ navigation }) {

  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      setError("Vui lòng điền đầy đủ thông tin")
      return
    }

    const ok = login(email, password)

    if (!ok) {
      setError("Sai tài khoản hoặc mật khẩu")
    }
  }

  return (
    <View style={styles.container}>

      {/* BACKGROUND TOP */}
      <ImageBackground
        source={require("../images/background_top.png")}
        style={styles.bgTop}
        resizeMode="stretch"
      >
        <Text style={styles.title}>Đăng Nhập</Text>
        <Text style={styles.subtitle}>
          Chào mừng bạn quay trở lại!
        </Text>
      </ImageBackground>

      {/* FORM */}
      <View style={styles.form}>

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Nhập email của bạn"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        {/* PASSWORD */}
        <Text style={styles.label}>Mật khẩu</Text>
        <View style={styles.inputBox}>

          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <Image
            source={require("../images/avatar.png")}
            style={styles.eye}
          />

        </View>

        {/* ERROR */}
        {!!error && (
          <Text style={styles.error}>{error}</Text>
        )}

        {/* FORGOT */}
        <Text style={styles.forgot}>
          Quên mật khẩu?
        </Text>

        {/* BUTTON */}
        <TouchableOpacity
          style={styles.btn}
          onPress={handleLogin}
        >
          <Text style={styles.btnText}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>

        {/* REGISTER */}
        <Text style={styles.register}>
          Chưa có tài khoản?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}Đăng ký ngay
          </Text>
        </Text>

        {/* OR */}
        <View style={styles.orRow}>
          <View style={styles.line}/>
          <Text style={styles.or}>hoặc</Text>
          <View style={styles.line}/>
        </View>

        {/* SOCIAL */}
        <View style={styles.socialRow}>

          <View style={styles.socialBtn}>
            <Image
              source={require("../images/avatar.png")}
              style={styles.socialIcon}
            />
            <Text>Google</Text>
          </View>

          <View style={styles.socialBtn}>
            <Image
              source={require("../images/avatar.png")}
              style={styles.socialIcon}
            />
            <Text>Facebook</Text>
          </View>

        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f5f5f5"
  },

  bgTop:{
    height:180,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    overflow:"hidden",
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:28,
    fontWeight:"700"
  },

  subtitle:{
    marginTop:5,
    color:"#777"
  },

  form:{
    padding:20,
    marginTop:10
  },

  label:{
    marginTop:10,
    marginBottom:5
  },

  inputBox:{
    backgroundColor:"#eaeaea",
    borderRadius:15,
    paddingHorizontal:15,
    flexDirection:"row",
    alignItems:"center"
  },

  input:{
    flex:1,
    height:50
  },

  eye:{
    width:20,
    height:20,
    tintColor:"#888"
  },

  error:{
    color:"red",
    marginTop:10
  },

  forgot:{
    textAlign:"right",
    color:"#4c4cff",
    marginTop:10
  },

  btn:{
    backgroundColor:"#4c4cff",
    marginTop:20,
    padding:16,
    borderRadius:30,
    alignItems:"center"
  },

  btnText:{
    color:"#fff",
    fontWeight:"600",
    fontSize:16
  },

  register:{
    textAlign:"center",
    marginTop:15,
    color:"#777"
  },

  link:{
    color:"#4c4cff",
    fontWeight:"600"
  },

  orRow:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20
  },

  line:{
    flex:1,
    height:1,
    backgroundColor:"#ccc"
  },

  or:{
    marginHorizontal:10,
    color:"#777"
  },

  socialRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20
  },

  socialBtn:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#eee",
    padding:12,
    borderRadius:12,
    width:"48%",
    justifyContent:"center"
  },

  socialIcon:{
    width:20,
    height:20,
    marginRight:8
  }

})