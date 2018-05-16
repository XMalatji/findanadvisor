import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 50,
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

  },
  text: {
    color: '#1a1a1a',
    fontSize: 16
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 30
  },
  logoDiv: {},
  paragraphCenter: {
    textAlign: 'center',
    marginTop: 40
  },
  form:{
    position:'relative',
    marginTop:60
  },
  heading:{
     fontSize: 22, 
     fontWeight: '600',
     marginTop: 20,
  },
  inputBox:{
    height: 40,
    borderBottomColor: '#1a1a1a',
    borderBottomWidth: 1,
    marginTop:20
  },
  textLabel:{
    position:'relative',
    marginTop:20,
    display:'none'
  }
})

export default class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameInput: ''
    };
  }
  validateString(txt){
    this.setState({
      nameInput:txt
    })
 
  }
  render () {
    return (
      <View style={styles.container}>
      
          <Image style={styles.logo} source={require('./logo.png')} />
        <Text style={styles.heading}>
          Register
        </Text>

        <Text style={styles.paragraphCenter}>
          Choose between R29.99 pm /
          R299.99 per year - 2months free

        </Text>

        <View style={ { marginTop:80,
          alignSelf: 'stretch'} }>
            
        <Text style={styles.textLabel}>Name</Text>
          <TextInput
            style={styles.inputBox}
            maxLength={30}
            placeholder={'Name'}
            onChangeText={text => this.validateString(text)}
          />
    
        <Text style={styles.textLabel}>Phone Number</Text>
          <TextInput
            style={styles.inputBox}
            maxLength={10}
            placeholder={'Phone Number'}
            onChangeText={text => this.validateString(text)}
          />
    
        </View>

      </View>
    )
  }
}
