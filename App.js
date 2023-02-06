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
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


 function Home({navigation}) {

  const [root, setRoot] = useState('C');
  const [type,setType]= useState('');
  const [result,setResult]= useState('');
  const [resultIndex,setResultIndex]= useState('');

  const defaultBtnColor='#4B505A';
  const selectedBtnColor='white';

  const [rootSelectColor,setRootSelectColor]= useState(defaultBtnColor);
  const [basicSelectColor,setBasicSelectColor]= useState(defaultBtnColor);
  const [extSelectColor,setExtSelectColor]= useState(defaultBtnColor);
 
  const rootSelection=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
  const chordType = ["Mayor", "Minor", "Mayor7", "Minor7",'Dominant7','Diminished','Diminished7','Augmented','Half-Diminished7'];
  const chordExtensions=['Mayor9','Minor9','Dominant9','Mayor11','Minor11','Dominant11','Mayor13','Minor13','Dominant13'];

  const indexingResult =(input)=>{
    const resArr = input.split(' ');
    let indexArr= [];
    for(let i=0; i<resArr.length; i++){
      indexArr.push( 1+ (i*2));
    }
    return indexArr.join(' ');
    }

  return (
    
  
    <ScrollView style={styles.container}>
     <Dashboard navigation= {navigation}/>
      <View style={styles.main}>

      <View style={styles.main.cont}>
        <Text  style={styles.main.cont.text}>Root</Text>
        <SelectDropdown
          data={rootSelection}
          defaultButtonText='Not Selected'
          onSelect={selectedItem =>{ 
             setRoot(selectedItem)
            setRootSelectColor(selectedBtnColor)
          }
          }
          
          buttonStyle={{backgroundColor:  rootSelectColor}} 
        />
      </View>

      <View style={styles.main.cont}>
          <Text style={styles.main.cont.text}>Basic Chord :</Text>
          <SelectDropdown 
          data={chordType} defaultButtonText='Not Selected'
          onSelect={(selectedItem) => {
            setType(selectedItem);
            setBasicSelectColor(selectedBtnColor);
            setExtSelectColor(defaultBtnColor);
        }} 
        buttonStyle={{backgroundColor:  basicSelectColor}} 
        />
      </View>

      <View style={styles.main.cont}>
          <Text  style={styles.main.cont.text}>Extensions Chord :</Text>
          <SelectDropdown data={chordExtensions} defaultButtonText='Not Selected'
          onSelect={(selectedItem)=>{
            setType(selectedItem);
            setExtSelectColor(selectedBtnColor);
            setBasicSelectColor(defaultBtnColor);
          }}
          buttonStyle={{backgroundColor:  extSelectColor}}
          />
      </View>
     
     <View style={styles.findCont}>
      <Button title='Find' onPress={()=> {
        setResult(chord(root,type));
        setResultIndex(indexingResult( chord(root,type) ));
      }}
        style={styles.buttonStyle}/>
      <Text style={{fontSize:20 , marginLeft: 10, fontFamily:'Bebas-Regular'}}>{root} {type}</Text>
     </View>
        <Text style={{fontSize:24, paddingTop:30,/*  fontFamily:'Bebas-Regular' */}}/*bebas-regular  having auto uppercase */
        >{result}
        </Text>
        <Text style={{fontSize:24,paddingTop:15,letterSpacing:3 /*  fontFamily:'Bebas-Regular' */}}/*bebas-regular  having auto uppercase */
        >{resultIndex}
        </Text>
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
      backgroundColor: '#4B505A',
      text: {
        color: '#FFFFFF'
      }
    }

  },
  textFont: {
    color: 'black',
    fontFamily:'Bebas-Regular'
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
  const [fontsLoaded] = useFonts({
    'Bebas-Regular': require('./assets/fonts/Bebas-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}