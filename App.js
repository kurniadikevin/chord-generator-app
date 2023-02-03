import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import Dashboard from './Dashoard';
import { chord } from './logic';



 function Home({navigation}) {

  const [root, setRoot] = useState('C');
  const [type,setType]= useState('');
  const [result,setResult]= useState('');
 
  const rootSelection=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
  const chordType = ["Mayor", "Minor", "Mayor7", "Minor7",'Dominant7','Diminished','Diminished7','Augmented','Half-Diminished7'];
  const chordExtensions=['Mayor9','Minor9','Dominant9','Mayor11','Minor11','Dominant11','Mayor13','Minor13','Dominant13'];

 

  return (
    
  
    <ScrollView style={styles.container}>
     <Dashboard navigation= {navigation}/>
      <View style={styles.main}>

      <View style={styles.main.cont}>
        <Text  style={styles.main.cont.text}>Root</Text>
        <SelectDropdown
          data={rootSelection}
          defaultButtonText='C'
          style={{height: 40, borderWidth: 1,width: 200, fontSize:20}}
          placeholder="Root"
          onSelect={selectedItem => setRoot(selectedItem)}
          defaultValue={root}
        />
      </View>

      <View style={styles.main.cont}>
        <Text style={styles.main.cont.text}>Basic Chord :</Text>
        <SelectDropdown
         data={chordType} defaultButtonText='Basic Chord'
        onSelect={(selectedItem) => {
          setType(selectedItem);
      }} 
      />
      </View>

      <View style={styles.main.cont}>
        <Text  style={styles.main.cont.text}>Exntensions Chord :</Text>
        <SelectDropdown data={chordExtensions} defaultButtonText='Extensions Chord'
        onSelect={(selectedItem)=>{
          setType(selectedItem);
        }}
        />
      </View>
     
     <View style={styles.findCont}>
      <Button title='Find' onPress={()=> setResult(chord(root,type))}
        style={styles.buttonStyle}/>
      <Text style={{fontSize:20 , marginLeft: 10}}>{root} {type}</Text>
     </View>
      <Text style={{fontSize:24, padding:30}}
      >{result}</Text>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
   padding: 50,
   backgroundColor: '#F2E1C3',

  },

 
  main : {
    padding: 10,
    paddingTop: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cont: {
      borderWidth: 1,
      margin: 9,
      padding: 3,
      backgroundColor : '#4B505A',
      text: {
        color: '#FFFFFF'
      }
    }

  },
  text: {
    color: 'black',
  
  },
  findCont:{
    display: 'flex',
    flexDirection:'row',
    paddingTop: 25,
   
  },
  buttonStyle:{
    backgroundColor : '#4B505A'
  }


});



function About ({navigation,route}){

  
  const {about_id}= route.params;

  return(
    <ScrollView style={styles.container}>
      <Dashboard navigation={navigation}/>
      <View style={styles.main}>
        <Text>About all</Text>
      </View>
    
   
    </ScrollView>
  )
}

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}