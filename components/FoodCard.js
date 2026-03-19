import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'

export default function FoodCard({image,title}){

  return(

    <TouchableOpacity style={styles.container}>

      <Image source={image} style={styles.image}/>

      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>

  )

}

const styles = StyleSheet.create({

container:{
width:160,
backgroundColor:'#fff',
borderRadius:15,
padding:10,
elevation:4
},

image:{
width:'100%',
height:100,
resizeMode:'cover',
borderRadius:10
},

title:{
marginTop:8,
fontWeight:'600'
}

})