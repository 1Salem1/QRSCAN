import { View, Text , StyleSheet ,Image, TouchableOpacity ,StatusBar } from 'react-native'
import React from 'react'

const UsineScreen = ({navigation}) => {
  return (
    <View style={style.container}>
         <StatusBar style="auto" />
        <TouchableOpacity style={{ marginTop : 60,}}>
        <Image
        
        source={require('../assets/images/Usine.png')}
      />
        </TouchableOpacity>
<View style={{height : 70}}></View>
        <TouchableOpacity onPress={ ()=> navigation.navigate('Pre')}>
        <Image  
        
        source={require('../assets/images/Usine2.png')}
      />
        </TouchableOpacity>
      
       
    </View>
  )
}

export default UsineScreen

const style = StyleSheet.create({
    container :  {
       
        flex : 1 ,
        alignItems:'center',
        backgroundColor : 'white'

    }
})

