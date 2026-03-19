import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'

export default function CategoryItem({title,icon}){

  return(

    <TouchableOpacity style={styles.container}>

      <Image source={icon} style={styles.icon}/>

      <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>

  )

}

const styles = StyleSheet.create({

container:{
alignItems:'center',
backgroundColor:'#f1f1f1',
padding:12,
borderRadius:12,
width:75
},

icon:{
width:28,
height:28,
resizeMode:'contain',
marginBottom:6
},

text:{
fontSize:12
}

})