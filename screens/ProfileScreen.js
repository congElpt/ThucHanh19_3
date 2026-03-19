import {
View,
Text,
Image,
StyleSheet,
TouchableOpacity,
Switch,
ImageBackground
} from "react-native"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useState } from "react"

export default function ProfileScreen({navigation}){

const [dark,setDark]=useState(false)
const { logout, user } = useContext(AuthContext)
return(

<View style={styles.container}>

{/* HEADER BACKGROUND */}
<ImageBackground
source={require("../images/background_top.png")}
style={styles.headerBg}
resizeMode="stretch"
>

<View style={styles.headerRow}>

<TouchableOpacity>
<Text style={styles.back}>←</Text>
</TouchableOpacity>

<Text style={styles.title}>Profile</Text>

<View style={{width:30}}/>

</View>

</ImageBackground>


{/* AVATAR */}
<View style={styles.avatarWrapper}>

<View style={styles.avatarCircle}>

<Image
source={require("../images/avatar.png")}
style={styles.avatar}
/>

<TouchableOpacity style={styles.editBtn}>
<Image
source={require("../images/i_edit.png")}
style={styles.editIcon}
/>
</TouchableOpacity>

</View>

</View>


{/* USER INFO */}
<Text style={styles.name}>Rakibul Hasan</Text>

<Text style={styles.email}>{user?.email}</Text>


{/* MENU */}
<View style={styles.menu}>

<MenuItem
icon={require("../images/i_home_profile.png")}
label="Home"
/>

<MenuItem
icon={require("../images/i_p_mycard.png")}
label="My Card"
/>


<View style={styles.menuItem}>

<Image
source={require("../images/i_darkmode.png")}
style={styles.icon}
/>

<Text style={styles.menuText}>
Dark Mood
</Text>

<View style={{flex:1}}/>

<Switch
value={dark}
onValueChange={()=>setDark(!dark)}
/>

</View>


<MenuItem
icon={require("../images/i_truckyouroder.png")}
label="Truck Your Order"
/>

<MenuItem
icon={require("../images/i_setting.png")}
label="Settings"
/>

<MenuItem
icon={require("../images/i_help.png")}
label="Help Center"
/>

</View>


{/* LOGOUT */}
<TouchableOpacity style={styles.logoutBtn} onPress={logout}>

<Text style={styles.logoutText}>
Log Out
</Text>

</TouchableOpacity>

</View>

)

}



function MenuItem({icon,label}){

return(

<TouchableOpacity style={styles.menuItem}>

<Image source={icon} style={styles.icon}/>

<Text style={styles.menuText}>
{label}
</Text>

<View style={{flex:1}}/>

<Text style={styles.arrow}>›</Text>

</TouchableOpacity>

)

}



const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5"
},

headerBg:{
height:140,
borderBottomLeftRadius:40,
borderBottomRightRadius:40,
overflow:"hidden",
paddingTop:50
},

headerRow:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingHorizontal:20
},

back:{
fontSize:22
},

title:{
fontSize:18,
fontWeight:"600"
},


avatarWrapper:{
alignItems:"center",
marginTop:-50
},

avatarCircle:{
width:130,
height:130,
borderRadius:65,
backgroundColor:"#fff",
alignItems:"center",
justifyContent:"center",
elevation:4
},

avatar:{
width:110,
height:110,
borderRadius:55
},

editBtn:{
position:"absolute",
right:5,
bottom:5,
width:32,
height:32,
borderRadius:16,
backgroundColor:"#5A54F9",
alignItems:"center",
justifyContent:"center"
},

editIcon:{
width:16,
height:16,
tintColor:"#fff"
},

name:{
fontSize:20,
fontWeight:"700",
textAlign:"center",
marginTop:10
},

email:{
textAlign:"center",
color:"#777",
marginBottom:20
},


menu:{
paddingHorizontal:20
},

menuItem:{
flexDirection:"row",
alignItems:"center",
paddingVertical:16
},

icon:{
width:22,
height:22,
marginRight:15,
resizeMode:"contain"
},

menuText:{
fontSize:15
},

arrow:{
fontSize:20,
color:"#777"
},


logoutBtn:{
marginHorizontal:20,
marginTop:20,
backgroundColor:"#5A54F9",
height:50,
borderRadius:14,
alignItems:"center",
justifyContent:"center"
},

logoutText:{
color:"#fff",
fontWeight:"600",
fontSize:16
}

})