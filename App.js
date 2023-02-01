import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
//import Dropdown from 'react-native-input-select';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Dashboard from './Dashoard';
import { chord } from './logic';



 function Home({navigation}) {

  const [root, setroot] = useState('');
  const [type,setType]= useState('');
  const [result,setResult]= useState('');

  return (
    
  
    <ScrollView style={styles.container}>
      <Dashboard navigation= {navigation}/>
      <View style={styles.main}>
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Root"
        onChangeText={newText => setroot(newText)}
        defaultValue={root}
      />
      <TextInput
        style={{height: 40, borderWidth: 1}}
        placeholder="Type"
        onChangeText={newText => setType(newText)}
        defaultValue={type}
      />
     
      <Button title='Find' onPress={()=> setResult(chord(root,type))}/>
      <Text style={{fontSize:20, padding:30}}
      >{result}</Text>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
   padding: 50,
    
  },

 
  main : {
    padding: 10,
    paddingTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    

  },
  text: {
    color: 'black',
  
  }
});

function Profile({navigation}){
  return(
    <View>
     <Dashboard navigation={navigation}/>

     <Text>Profile page</Text>
    
    </View>
  )
}

function About ({navigation,route}){

  
  const {about_id}= route.params;

  return(
    <View>
    <Dashboard navigation={navigation}/>
    <Text>About all</Text>
   
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}