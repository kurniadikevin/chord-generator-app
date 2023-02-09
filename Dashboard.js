import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button,TouchableOpacity } from 'react-native';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import CustomText from './CustomText';

SplashScreen.preventAutoHideAsync();


export default function Dashboard(props){


    return(
        <View>
            <View style={styles.title}>
            <CustomText>
              <Text style={{fontSize : 24}}>Music Chord Generator </Text>
            </CustomText>
        </View>
        <View style={styles.dashboard}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate('Home')}} style={{paddingRight: 10}}>
            <CustomText style={styles.buttonText}>
              Home
            </CustomText>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate('About')}}>
              <CustomText  style={styles.buttonText}>
              About
              </CustomText>
            </TouchableOpacity>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title : {
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        paddingBottom: 10,
      },
      dashboard:{
        display: 'flex',
        flexDirection : 'row',
        height: 40,
        justifyContent: 'center',
        alignItems:'center',

        text : { 
        }
      },
      buttonStyle : {

      },
      buttonText:{
        fontSize: 16
      }

})