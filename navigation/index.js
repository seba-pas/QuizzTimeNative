import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Difficulty from '../screens/Difficulty';
import Category from '../screens/Category'
import React from 'react'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}}/>
      <Stack.Screen name="Difficulty" component={Difficulty} options={{headerShown: false}}/>
      <Stack.Screen name="Category" component={Category} options={{headerShown: false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown: false}}/>    
    </Stack.Navigator>
  );
}

