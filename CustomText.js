import {Text,StyleSheet} from 'react-native';

 const CustomText=(props)=>{
    return(
        <Text style={[styles.defaultStyle, props.style]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    // ... add your default style here
    defaultStyle: {
        fontFamily: 'Creato-Display'
    },
  });

export default CustomText;

