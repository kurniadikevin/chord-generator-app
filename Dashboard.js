import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import CustomText from './CustomText';


SplashScreen.preventAutoHideAsync();


export default function Dashboard(props){

  let homeToggle=styles.buttonTextOnVisit;
  let aboutToggle;

  if(props.onVisitHome === 'true'){
    homeToggle= styles.buttonTextOnVisit;
    aboutToggle= styles.buttonText;
  } else if(props.onVisitAbout==='true'){
    homeToggle= styles.buttonText;
    aboutToggle= styles.buttonTextOnVisit;
  }

    return(
        <View>
            <View style={styles.title}>
            <CustomText>
              <Text style={{fontSize : 24}}>Scale Chord Generator</Text>
            </CustomText>
        </View>
        <View style={styles.dashboard}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate('Home')
              }} style={{paddingRight: 10}}>
            <CustomText style={homeToggle}>
              Home
            </CustomText>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{
              props.navigation.navigate('About');

              }}>
              <CustomText  style={aboutToggle}>
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
      },
      buttonTextOnVisit:{
        fontSize: 16,
        fontWeight:'700'
      }

})