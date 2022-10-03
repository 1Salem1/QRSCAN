import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './config/MyStack';

const App = () => {
  return (
    <NavigationContainer>
     <Navigation/>
    </NavigationContainer>
  );
};

export default App;