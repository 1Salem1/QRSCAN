import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from '@expo/vector-icons'; 
import { string } from '../util/config';
import Loader from '../components/Error';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

export default function QrScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [error , setError]  = useState(false)

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    navigation.navigate('Pre' ,data
    )
   // console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <><View style={{ backgroundColor :'white' , height : 100 , flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}}>
     
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign  style={{ right: 40}}  name="left" size={34} color="black" />
        </TouchableOpacity>
          <Text style={styles.plan}>Scanner un code QR</Text>
      </View><View style={styles.container}>
      <Loader visible={error}/>
              <View style={styles.barcodebox}>
                  <BarCodeScanner
                      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                      style={{ height: 500, width: 400 }} />
              </View>
            
              <Text style={styles.maintext}>{text}</Text>
            

              {scanned && <><TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                  <Text style={styles.continue}>Scan me Again</Text>
              </TouchableOpacity><TouchableOpacity style={styles.button1} onPress={() => navigation.navigate()}>
                      <Text style={styles.continue}>Next Step</Text>
                  </TouchableOpacity></>
              
              }
          </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent : 'center'
   
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
    marginBottom : 10
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
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems:'center',
    marginVertical : 30,
},

});