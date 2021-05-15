/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { View,Text } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import useColorScheme from '../hooks/useColorScheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator screenOptions={{
       headerShown: true ,
       headerStyle:{
         backgroundColor:Colors[colorScheme].background,
         elevation:0
       },
       headerTintColor:Colors[colorScheme].text,
       headerTitleStyle:{
         fontWeight:"600",
         fontSize:20,
         letterSpacing:1,
         elevation:0
       },
       headerRight:()=>(
         <View style={{marginRight:20}} >
          
          <Text 
          style={{
            fontSize:20,
            fontWeight:"bold"
          }}
          >K4</Text>
         </View>
       )
       }}
       
       >
      <Stack.Screen name="Root" component={BottomTabNavigator}
      options={{
        title:"Calculus",
       
      }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
