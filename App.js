import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screen/home';
import Dashboard from './screen/dashboard';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} 
         options={{
          title: "Home screen",
        }}
          />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{title: "Dashboard screen"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
