import { View, Text , TouchableOpacity , StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { string } from '../util/config';
import { useFocusEffect } from '@react-navigation/native';
import { jsonToCSV } from 'react-native-csv'
import { useEffect } from 'react';
import { objectToCsv } from '../util/config';

const PrepaScreen = ({navigation, route}) => {
  const [List , setList] = useState([])

  const [text , setText] = useState()

  const textv = route?.params


const generateCSV = () => {




  

  }


 const  checkText = () => {
    
      var  obj =  string(text)
      setList( List => [...List, {
          name : obj.name + ' ' + obj.size ,
          serie : obj.serie
      }])
      
      
      
  }




    React.useEffect(() => {
      
   checkText()

     
    }, [text])
  

   

console.log(List)

  return (
    <><View style={{ backgroundColor: 'white', height: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign style={{ right: 70 }} name="left" size={34} color="black" />
          </TouchableOpacity>
          <Text style={styles.plan}>Préparation de {"\n"}la marchandise</Text>

      </View >
      
      <ScrollView style={styles.container}>
      <Text style={styles.personalInformation}>Tableau récapitulatif</Text>
            

            <View style={{flexDirection :'row' , justifyContent : 'space-around' , marginTop : 30 , marginBottom : 20}}>
                <Text style={styles.phoneNumber}>#</Text>
                <Text style={styles.phoneNumber} >Modéle</Text>
      <Text style={styles.phoneNumber} >N° de série</Text>
            </View>



{
 List.map((e , i)=>{
        
          
         
         
         
          return (
            
            <View  key={i} style={{flexDirection :'row' , justifyContent : 'space-around' , marginTop : 10}}>
            <Text style={styles.layer62}>{i}</Text>
            <Text style={styles.layer62} >{e.name}</Text>
            <Text style={styles.layer62} >{e.serie}</Text>
        </View>
    
        )
         
         
 })

 
}





          </ScrollView>
     <View style={{backgroundColor : 'white' , alignItems:'center'}}>
     <TouchableOpacity style={styles.button} onPress={()=> generateCSV()}>
        <Text style={styles.continue}>Partager la liste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('Qr')}>
        <Text style={styles.continue}>Scanner un Code QR</Text>
      </TouchableOpacity>
     </View>
          
          
          </>
  )
}

export default PrepaScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop : 30,
      paddingHorizontal :30
     
     
    },
    maintext: {
      fontSize: 16,
      margin: 20,
    },
    barcodebox: {
      
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: 30,
    }  ,
      button : {
      width: 315,
      height: 70,
      borderRadius: 20,
      backgroundColor: '#e8500e',
      justifyContent:'center',
      alignItems:'center',
      marginTop : 30,
  },
  
  continue: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'left',
    
    },
    plan: {
      color: '#000000',
      fontSize: 24,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'center',
    },
    button1 : {
      width: 315,
      height: 70,
      borderRadius: 20,
      backgroundColor: 'black',
      justifyContent:'center',
      alignItems:'center',
      marginVertical : 20,
  },



  personalInformation: {
    width: 275,
    height: 25,
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',

  },
  phoneNumber: {
    color: '#c4c4c4',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
    width: 100,
    
  },

  layer62: {
    width: 100,
    color: '#1f1f1f',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  
  });