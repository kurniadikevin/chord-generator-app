import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync();


export default function Dashboard(props){

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

    return(
        <View>
            <View style={styles.title}>
            <Text style={{fontSize : 24, fontFamily: 'Bebas-Regular'}}>Music Chord Generator </Text>
        </View>
        <View style={styles.dashboard}>
            <Button style={styles.dashboard.text} title='Home' onPress={()=>{props.navigation.navigate('Home')}}/>
            <Button style={styles.dashboard.text} title='About' onPress={()=>{props.navigation.navigate('About',{about_id: ''})}}/>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        paddingBottom: 20,
      },
      dashboard:{
        display: 'flex',
        flexDirection : 'row',
        height: 50,
        justifyContent: 'center',
        alignItems:'center',
        text : {
          paddingRight : 10,
          paddingLeft : 10,
        }
      },

})