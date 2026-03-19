import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ScrollView,
ImageBackground,
Dimensions,
TextInput
} from "react-native"

import { useRef, useState } from "react"
import { foods } from "../data/data"

const { width } = Dimensions.get("window")

export default function HomeScreen({ navigation }) {

const [activeCategory, setActiveCategory] = useState("pizza")
const [page, setPage] = useState(0)
const [search, setSearch] = useState("")

const bannerRef = useRef(null)

const banners = [
require("../images/banner_home.png"),
require("../images/banner_home.png"),
require("../images/banner_home.png")
]

const onScroll = (e) => {
const index = Math.round(
e.nativeEvent.contentOffset.x / (width - 40)
)
setPage(index)
}

// FILTER DATA
const filteredFoods = foods.filter(item => {
const matchCategory = item.category === activeCategory

const matchSearch = item.name
.toLowerCase()
.includes(search.toLowerCase())

return matchCategory && matchSearch
})

return (

<View style={styles.container}>

<ScrollView showsVerticalScrollIndicator={false}>

{/* TOP BACKGROUND */}
<ImageBackground
source={require("../images/background_top.png")}
style={styles.topBackground}
resizeMode="stretch"
>

{/* HEADER */}
<View style={styles.header}>

<View style={styles.headerLeft}>
<Image
source={require("../images/avatar.png")}
style={styles.avatar}
/>
</View>

<View style={styles.headerCenter}>

<Text style={styles.locationText}>
Your Location
</Text>

<View style={styles.locationRow}>
<Image
source={require("../images/i_locthongtin.png")}
style={styles.locationIcon}
/>

<Text style={styles.city}>
Savar, Dhaka
</Text>
</View>

</View>

<TouchableOpacity style={styles.notification}>
<Image
source={require("../images/i_noti.png")}
style={styles.notificationIcon}
/>
</TouchableOpacity>

</View>

</ImageBackground>


{/* SEARCH BAR */}
<View style={styles.searchWrapper}>

<View style={styles.searchBar}>

<Image
source={require("../images/i_search.png")}
style={styles.searchIcon}
/>

<TextInput
placeholder="Search your food"
placeholderTextColor="#fff"
value={search}
onChangeText={setSearch}
style={styles.searchText}
/>

<Image
source={require("../images/i_setting.png")}
style={styles.filterIcon}
/>

</View>

</View>


{/* CATEGORY */}
<View style={styles.categoryRow}>

{[
{ id:"pizza", icon:require("../images/i_pizza.png"), label:"PIZZA"},
{ id:"burger", icon:require("../images/i_burger.png"), label:"BURGER"},
{ id:"drink", icon:require("../images/i_drink.png"), label:"DRINK"},
{ id:"rice", icon:require("../images/i_rice.png"), label:"RICE"}
].map((item)=>{

const active = activeCategory === item.id

return(

<TouchableOpacity
key={item.id}
onPress={()=>setActiveCategory(item.id)}
style={[
styles.categoryBox,
active && styles.categoryActive
]}
>

<Image
source={item.icon}
style={styles.categoryIcon}
/>

<Text
style={[
styles.categoryText,
active && styles.categoryTextActive
]}
>
{item.label}
</Text>

</TouchableOpacity>

)

})}

</View>


{/* BANNER SLIDER */}
<ScrollView
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
ref={bannerRef}
onScroll={onScroll}
scrollEventThrottle={16}
style={{marginTop:20}}
>

{banners.map((img,index)=>(
<TouchableOpacity
key={index}
onPress={()=>navigation.navigate("Order")}
style={styles.bannerCard}
>

<Image
source={img}
style={styles.bannerImage}
/>

</TouchableOpacity>
))}

</ScrollView>


{/* DOT INDICATOR */}
<View style={styles.indicator}>

{banners.map((_,i)=>(
<View
key={i}
style={[
styles.dot,
page === i && styles.dotActive
]}
/>
))}

</View>


{/* POPULAR */}
<View style={styles.popularHeader}>

<Text style={styles.popularTitle}>
Popular Items
</Text>

<Text style={styles.viewAll}>
View All
</Text>

</View>


{/* FOOD LIST (dynamic) */}
<View style={styles.foodRow}>

{filteredFoods.map(item => (

<View key={item.id} style={styles.foodCard}>
<Image
source={item.image}
style={styles.foodImage}
/>

<Text style={styles.foodName}>
{item.name}
</Text>
</View>

))}

</View>

</ScrollView>

</View>
)
}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5"
},

topBackground:{
paddingTop:50,
paddingBottom:60,
borderBottomLeftRadius:40,
borderBottomRightRadius:40,
overflow:"hidden"
},

header:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingHorizontal:20
},

headerLeft:{
width:60
},

headerCenter:{
flex:1,
alignItems:"center"
},

avatar:{
width:44,
height:44,
borderRadius:22
},

locationText:{
fontSize:12,
color:"#777",
textAlign:"center"
},

locationRow:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center"
},

locationIcon:{
width:16,
height:16,
marginRight:4
},

city:{
fontSize:15,
fontWeight:"600"
},

notification:{
width:42,
height:42,
borderRadius:21,
backgroundColor:"#fff",
justifyContent:"center",
alignItems:"center"
},

notificationIcon:{
width:20,
height:20
},

searchWrapper:{
marginTop:-30,
paddingHorizontal:20
},

searchBar:{
backgroundColor:"#5A54F9",
borderRadius:28,
flexDirection:"row",
alignItems:"center",
paddingHorizontal:16,
height:52
},

searchIcon:{
width:18,
height:18,
tintColor:"#fff"
},

searchText:{
flex:1,
marginLeft:10,
color:"#fff"
},

filterIcon:{
width:20,
height:20,
tintColor:"#fff"
},

categoryRow:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:20,
marginTop:25
},

categoryBox:{
width:72,
height:72,
backgroundColor:"#eee",
borderRadius:14,
alignItems:"center",
justifyContent:"center"
},

categoryActive:{
backgroundColor:"#2ecc71"
},

categoryIcon:{
width:28,
height:28,
marginBottom:6
},

categoryText:{
fontSize:11
},

categoryTextActive:{
color:"#fff"
},

bannerCard:{
width:width-40,
marginHorizontal:20
},

bannerImage:{
width:"100%",
height:120,
borderRadius:16
},

indicator:{
flexDirection:"row",
justifyContent:"center",
marginTop:10
},

dot:{
width:6,
height:6,
backgroundColor:"#ccc",
borderRadius:3,
marginHorizontal:4
},

dotActive:{
backgroundColor:"#333"
},

popularHeader:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:20,
marginTop:20
},

popularTitle:{
fontSize:16,
fontWeight:"600"
},

viewAll:{
color:"#777"
},

foodRow:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
paddingHorizontal:20,
marginTop:15
},

foodCard:{
width:"48%",
marginBottom:15
},

foodImage:{
width:"100%",
height:110,
borderRadius:14
},

foodName:{
marginTop:6,
fontWeight:"600"
}

})