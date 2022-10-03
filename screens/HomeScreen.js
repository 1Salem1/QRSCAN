import { View, Text , StyleSheet , Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>
     <Image
        
        source={require('../assets/images/logo.png')}
      />
      <TouchableOpacity style={style.button} onPress={()=> navigation.navigate('Usine')}>
        <Text style={style.continue}>Continuer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen


const style = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems :'center'
    },
    button : {
        top : '30%',
        width: 315,
        height: 70,
        borderRadius: 20,
        backgroundColor: '#000000',
        justifyContent:'center',
        alignItems:'center'
    },
    continue: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
      
      },
})