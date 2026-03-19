import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity
} from "react-native"

import { useState } from "react"

export default function CartScreen(){

const [qty,setQty]=useState(2)

const price=28
const subtotal=price*qty
const delivery=6.2
const total=subtotal+delivery

return(

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity>
<Text style={styles.back}>←</Text>
</TouchableOpacity>

<Text style={styles.title}>Shopping Cart</Text>

<Image
source={require("../images/i_delete.png")}
style={styles.delete}
/>

</View>


{/* FOOD IMAGE */}

<View style={styles.imageWrapper}>

<Image
source={require("../images/shopping_card_item_1.png")}
style={styles.food}
/>

<View style={styles.discount}>
<Text style={styles.discountText}>10% OFF</Text>
</View>

</View>


{/* SMALL FOOD SLIDER */}

<View style={styles.smallRow}>

<Image
source={require("../images/shopping_card_item_1.png")}
style={styles.smallFood}
/>

<Image
source={require("../images/shopping_card_item_2.png")}
style={styles.smallFood}
/>

<Image
source={require("../images/shopping_card_item_3.png")}
style={styles.smallFood}
/>

</View>


{/* PRODUCT CARD */}

<View style={styles.card}>

<View style={styles.row}>

<Text style={styles.foodTitle}>BURGER</Text>

<Text style={styles.price}>${price}</Text>

</View>


<View style={styles.ratingRow}>

<Text style={styles.star}>⭐</Text>

<Text style={styles.rating}>4.9 (3k+ Rating)</Text>

<View style={styles.qty}>

<TouchableOpacity
onPress={()=>setQty(qty>1?qty-1:1)}
>
<Text style={styles.btn}>−</Text>
</TouchableOpacity>

<Text style={styles.number}>{qty}</Text>

<TouchableOpacity
onPress={()=>setQty(qty+1)}
>
<Text style={styles.btn}>+</Text>
</TouchableOpacity>

</View>

</View>


{/* ADDRESS + CALL */}

<View style={styles.addressRow}>

<View style={styles.addressCard}>

<Image
source={require("../images/i_truckyouroder.png")}
style={styles.icon}
/>

<View>

<Text style={styles.addressTitle}>Delivery Address</Text>

<Text>Dhaka, Bangladesh</Text>

</View>

</View>

<TouchableOpacity style={styles.callBtn}>

<Image
source={require("../images/i_call.png")}
style={{width:22,height:22}}
/>

</TouchableOpacity>

</View>


{/* PAYMENT */}

<View style={styles.paymentRow}>

<Image
source={require("../images/i_payment.png")}
style={styles.icon}
/>

<Text style={{flex:1}}>Payment Method</Text>

<TouchableOpacity style={styles.changeBtn}>

<Text style={styles.changeText}>Change</Text>

</TouchableOpacity>

</View>


{/* SUMMARY */}

<View style={styles.summary}>

<View style={styles.summaryRow}>
<Text>Subtotal ({qty})</Text>
<Text>${subtotal}</Text>
</View>

<View style={styles.summaryRow}>
<Text>Delivery Fee</Text>
<Text>${delivery}</Text>
</View>

<View style={styles.summaryRow}>
<Text style={styles.totalText}>Payable Total</Text>
<Text style={styles.totalPrice}>${total}</Text>
</View>

</View>


{/* BUTTON */}

<TouchableOpacity style={styles.confirmBtn}>

<Text style={styles.confirmText}>Confirm Order</Text>

</TouchableOpacity>

</View>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5",
paddingTop:40
},

header:{
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

delete:{
width:22,
height:22,
resizeMode:"contain"
},

imageWrapper:{
marginTop:10,
alignItems:"center"
},

food:{
width:"90%",
height:180,
borderRadius:20
},

discount:{
position:"absolute",
top:10,
left:30,
backgroundColor:"#5A54F9",
padding:8,
borderRadius:20
},

discountText:{
color:"#fff",
fontSize:12
},

smallRow:{
flexDirection:"row",
justifyContent:"center",
marginTop:-30
},

smallFood:{
width:70,
height:70,
borderRadius:15,
marginHorizontal:10
},

card:{
backgroundColor:"#fff",
marginTop:20,
marginHorizontal:20,
borderRadius:20,
padding:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

foodTitle:{
fontSize:26,
fontWeight:"700"
},

price:{
fontSize:20,
color:"#5A54F9"
},

ratingRow:{
flexDirection:"row",
alignItems:"center",
marginTop:8
},

star:{
color:"#FFC107"
},

rating:{
marginLeft:5,
flex:1
},

qty:{
flexDirection:"row",
alignItems:"center"
},

btn:{
fontSize:22,
padding:6
},

number:{
marginHorizontal:8,
fontSize:18
},

addressRow:{
flexDirection:"row",
alignItems:"center",
marginTop:15
},

addressCard:{
flex:1,
flexDirection:"row",
alignItems:"center",
backgroundColor:"#C0EADB",
padding:15,
borderRadius:12
},

icon:{
width:22,
height:22,
marginRight:10,
resizeMode:"contain"
},

addressTitle:{
fontWeight:"600"
},

callBtn:{
marginLeft:10,
backgroundColor:"#A9A6FF",
padding:20,
borderRadius:12
},

paymentRow:{
flexDirection:"row",
alignItems:"center",
marginTop:20
},

changeBtn:{
borderWidth:1,
borderColor:"#5A54F9",
paddingHorizontal:14,
paddingVertical:4,
borderRadius:15
},

changeText:{
color:"#5A54F9"
},

summary:{
marginTop:20
},

summaryRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:6
},

totalText:{
fontWeight:"700"
},

totalPrice:{
color:"#5A54F9",
fontWeight:"700"
},

confirmBtn:{
backgroundColor:"#5A54F9",
marginTop:20,
padding:16,
borderRadius:30,
alignItems:"center"
},

confirmText:{
color:"#fff",
fontSize:16,
fontWeight:"600"
}

})