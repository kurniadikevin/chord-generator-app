import * as React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Linking, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import {chord} from './logic_function/chord-logic';
import {scale} from './logic_function/scale-logic';
import { getOrdinal } from './ordinalNum-logic';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import CustomText from './CustomText';


 function Home({navigation}) {

  const [dataType,setDataType]= useState('Chord');
  const [root, setRoot] = useState('C');
  const [type,setType]= useState('Mayor');
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
  const scaleType =['Mayor','Minor(Natural)','Harmonic-Minor','Melodic-Minor','Pentatonic-Mayor','Pentatonic-Minor','Whole-Tone','Augmented','Diminished'];

  const [dataSelection, setDataSelection]= useState(chordType);

  const indexingResult =(input,type)=>{
    if(input){
    const resArr = input.split(' ');
    let indexArr= [];
    for(let i=0; i<resArr.length; i++){
      if(type === 'chord'){
      indexArr.push( 1+ (i*2));
    } else if(type === 'scale'){
      indexArr.push(1 + i);
    }
  }
    let ordinalArr= indexArr.map((num)=>{
      return getOrdinal(num);
    })

    return ordinalArr.join('  ');
  } else{
    return 'Please select valid option'
  }
    }

  return (
    
  
    <ScrollView style={styles.container}>
       <Dashboard navigation= {navigation}/>
      <View style={styles.main}>

    <View style={{paddingBottom: 10}}>
      <SelectDropdown data={['Chord','Scale']}
      defaultButtonText='Chord'
      onSelect={selectedItem =>{ 
        setDataType(selectedItem);
        //make default none
        setResult('');
        setResultIndex('');

        if( selectedItem === 'Chord'){
          setDataSelection(chordType);
        } else if( selectedItem === 'Scale'){
          setDataSelection(scaleType);
        }
      }}
      buttonTextStyle={{ fontFamily: 'Creato-Display'}}
      buttonStyle={{width: 100, height: 40, opacity: 0.8}} 
      />
    </View>

      <View style={styles.main.cont}>
        <CustomText>
          <Text  style={styles.main.cont.text}>Root</Text>
        </CustomText>
        <SelectDropdown
          data={rootSelection}
          defaultButtonText='C'
          onSelect={selectedItem =>{ 
             setRoot(selectedItem)
            setRootSelectColor(selectedBtnColor)
          }
          }
          buttonStyle={{backgroundColor:  rootSelectColor}} 
          buttonTextStyle={{ fontFamily: 'Creato-Display'}}
        />
      </View>

      <View style={styles.main.cont}>
          <CustomText>
            <Text style={styles.main.cont.text}>Basic {dataType} :</Text>
          </CustomText>
          <SelectDropdown 
          data={dataSelection}
           defaultButtonText='Mayor'
          onSelect={(selectedItem) => {
            setType(selectedItem);
            setBasicSelectColor(selectedBtnColor);
            setExtSelectColor(defaultBtnColor);
        }} 
        buttonStyle={{backgroundColor:  basicSelectColor}} 
        buttonTextStyle={{ fontFamily: 'Creato-Display'}}
        />
      </View>

  {dataType === 'Chord' && 
      <View style={styles.main.contExtension}>
          <CustomText>
            <Text  style={styles.main.cont.text}>Extensions {dataType} :</Text>
          </CustomText>
          <SelectDropdown data={chordExtensions} defaultButtonText='Not Selected'
          onSelect={(selectedItem)=>{
            setType(selectedItem);
            setExtSelectColor(selectedBtnColor);
            setBasicSelectColor(defaultBtnColor);
          }}
          buttonStyle={{backgroundColor:  extSelectColor}}
          buttonTextStyle={{ fontFamily: 'Creato-Display'}}
          />
      </View>
     }

     <View style={styles.findCont}>
      
      <TouchableOpacity onPress={()=> {
        if(dataType === 'Scale'){
          setResult(scale(root,type));
          setResultIndex(indexingResult( scale(root,type) ,'scale'));
        } else {
          setResult(chord(root,type));
          setResultIndex(indexingResult( chord(root,type) ,'chord'));
        }
        }} style={{paddingRight: 10}}>
          <CustomText style={styles.findButton}>
            Find
          </CustomText>
      </TouchableOpacity>
      <View style={styles.chordCont}>
        <CustomText style={{marginLeft: 15}}>
        <Text style={{fontSize:20}}>{root} {type}</Text>
        </CustomText>
      </View>
     </View>
     
      <CustomText>
        <Text style={{fontSize:24, paddingTop:30,letterSpacing:2}}
        >{result}
        </Text>
      </CustomText>
      <CustomText style={{paddingTop: 15, letterSpacing: 2}}>
        <Text style={{fontSize:14}}
        >{resultIndex}
        </Text>
      </CustomText>
    
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
   padding: 30,
   backgroundColor: '#D2D2D2',
  
  },

 
  main : {
    padding: 10,
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cont: {
      borderWidth: 1,
      margin: 10,
      padding: 8,
      backgroundColor: '#4B505A',
      text: {
        color: '#FFFFFF'
      }
    },
    contExtension : {
      borderWidth: 1,
      margin: 5,
      padding: 8,
      backgroundColor: '#4B505A',
      text: {
        color: '#FFFFFF'
      }
    }

  },
  textFont: {
    color: 'black',
  },
  chordCont:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  findCont:{
    display: 'flex',
    flexDirection:'row',
    paddingTop: 25,
   paddingBottom: 20
  },
  findButton:{
    fontSize: 16,
    backgroundColor:  '#4B505A',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight:12,
    color: '#ffffff',
    
  }
})



function About ({navigation,route}){

 
  return(
    <ScrollView style={styles.container}>
      <Dashboard navigation={navigation} onVisitAbout = 'true' onVisitHome='false'/>
      <View style={styles.main}>
        <CustomText style={{paddingBottom: 30}}>
        <Text >Scale and chord note system using mix of flat (b) and sharp (#) the note consist C C# D Eb E F F# G Ab A Bb B. Developed using React Native </Text>
        </CustomText>
        <CustomText style={{paddingBottom: 10}}>
        <Text >?? 2023 Kevin Kurniadi, All Right Reserved</Text>
        </CustomText>
        <TouchableOpacity 
          onPress={() => Linking.openURL('https://github.com/kurniadikevin')}>
          <Image style={{width: 30, height: 30}} source={require('./assets/github-mark.png')}/>
    </TouchableOpacity>
      </View>
    
   
    </ScrollView>
  )
}

const Stack = createNativeStackNavigator();


export default function App(){
  const [fontsLoaded] = useFonts({
    'Bebas-Regular': require('./assets/fonts/Bebas-Regular.otf'),
    'Creato-Display' :require('./assets/fonts/CreatoDisplay-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();
  
  return (
    <NavigationContainer >
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}