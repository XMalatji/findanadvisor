import React from 'react'
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,65,65)',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  splashLogo:{
    color:'white',
    fontSize:40
  },
  btnStart:{
    backgroundColor:'white',
    height:40,
    alignItems: 'center',
    width:90,
    padding: 10
  },
  redTxt:{
    color:'red'
  },
  footer:{
    position:'relative',
    top:100,
    color:'white'
  }
})



export default class Splash extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.splashLogo}> Financial Appvisor </Text>
        <TouchableOpacity
         style={styles.btnStart}
      
       >
         <Text style={styles.redTxt}
       
         >
          Login</Text>
       </TouchableOpacity>

       <Text style={styles.footer}
          onPress={() => Actions.register()} 
       >
         Need an account? Register here. 
         </Text>
      </View>
    )
  }
}
