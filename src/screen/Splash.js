import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  AppState,
  ImageBackground
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from "react-navigation";

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });


componentDidMount(){
  AsyncStorage.setItem('UserId','userid')
  AsyncStorage.setItem('Name','harry')
  AsyncStorage.setItem('lName','lanem')
  AsyncStorage.setItem('email','email')
  AsyncStorage.setItem('phone','66545')
  AsyncStorage.setItem('Presult','resuld')
 setTimeout(() => {
    const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Login' })],
  });
  this.props.navigation.dispatch(resetAction);
 }, 2000);
}
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
          <View style={{ height: '40%' }} />
         <View
                style={{
                  width: width,
                  alignItems: 'center',paddingHorizontal:30,marginTop:10
                  
                }}>
                  
                <Image
                  source={require('../images/icon.webp')}
                  style={{
                    height:100,
                    width:100,
                    alignSelf:'flex-start',
                    resizeMode:'cover',marginLeft:50,
                    tintColor: Colors.primary,
                  }}
                />
                <View style={{flexDirection:'row',marginLeft:0,position:'absolute',top:50,alignItems:'center'}}>
                  <View style={{width:60}}/>
                <Text style={{fontSize:34,color:Colors.primary,fontFamily:Fonts.bold}}>E</Text>
                <Text style={{fontSize:22,color:Colors.black,fontFamily:Fonts.bold}}> - WR</Text>
                </View>
             
              </View>
              <View style={{ height: 10 }} />
            
      </SafeAreaView>
    );
  }
}





