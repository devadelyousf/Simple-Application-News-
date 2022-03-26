import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Resources/screens/Home';
import Detailes from './Resources/screens/Detailes';
import Splash from './Resources/screens/Splash';
import Google from './Resources/screens/Google';
import About from './Resources/screens/About';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detailes" component={Detailes} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Google" component={Google} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;