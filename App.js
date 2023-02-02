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

  const [root, setroot] = useState('');
  const [type,setType]= useState('');
  const [result,setResult]= useState('');
 

  const chordType = ["Mayor", "Minor", "Mayor7", "Minor7",'Dominant7','Diminished','Diminished7','Augmented','Half-Diminished7'];
  const chordExtensions=['Mayor9','Minor9','Dominant9','Mayor11','Minor11','Dominant11','Mayor13','Minor13','Dominant13'];

 

  return (
    
  
    <ScrollView style={styles.container}>
      <Dashboard navigation= {navigation}/>
      <View style={styles.main}>
      <TextInput
        style={{height: 40, borderWidth: 1,width: 200, fontSize:20}}
        placeholder="Root"
        onChangeText={newText => setroot(newText)}
        defaultValue={root}
      />
      <View>
      <Text>Basic :</Text>
      <SelectDropdown data={chordType} defaultButtonText='Basic Chord'
      onSelect={(selectedItem) => {
        setType(selectedItem);
      }} 
      />
      </View>

      <View>
      <Text>Exntensions Chord :</Text>
      <SelectDropdown data={chordExtensions} defaultButtonText='Extensions Chord'
      onSelect={(selectedItem)=>{
        setType(selectedItem);
      }}
      />
      </View>
     
      <Text style={{fontSize:20, padding:30}}>{root} {type}</Text>
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