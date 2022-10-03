import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loader = ({visible = false}) => {
 
   const navigation = useNavigation()

  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          
          <Text style={{marginTop : 30, textAlign : 'center' , color : 'black', fontSize: 16}}>Etes-vous sûr que vous avez scanner 
une ski ogso ?</Text>
                 
          <TouchableOpacity style={style.rectangle244} onPress={() => navigation.navigate('Pre')}>
            <Text style={style.sure}>Réssayer</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 170,
    backgroundColor: 'white',
    marginHorizontal: 50,
    borderRadius: 5,
    alignItems : 'center',
    paddingHorizontal: 20,
  },
  container: {
    bottom : 0,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    height : 2000
  },
  rectangle244: {
    width: 130,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#eb5c26',
    justifyContent : 'center',
    marginTop : 20, 
    alignItems :'center'
  },
  sure: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
  },
});

export default Loader;