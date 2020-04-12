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
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import API from '../common/API';
import Loader from '../common/Loader';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      username: '',
      password: '',
      inputBorderColor: Colors.medium_gray,
      inputBorderColor2: Colors.medium_gray,
      Visible:'Email',
      token:''
    };

    this.onSubmitUsername = this.onSubmitUsername.bind(this);

    this.usernameRef = this.updateRef.bind(this, 'username');
    this.passwordRef = this.updateRef.bind(this, 'password');
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  onSubmitUsername() {
    console.log(this.password);
  }



  Design = () =>{
    return(
      <View style={{marginTop:20}}>
        <View style={{height:20}}></View>
        {/* <Text style={{ textAlign: 'center', fontFamily: Fonts.medium, fontSize: 20, color: Colors.primary, margin: 20 }}>OR</Text>


        <View style={{ flexDirection: 'row', width: '36%', alignSelf: 'center', justifyContent: 'space-between', height: 50 }}>

          <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
            <Image source={require('../images/fb.png')} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
            <Image source={require('../images/google.png')} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>

        </View> */}

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontFamily: Fonts.thin }}>Not a member yet? </Text>
         
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Registration')}}>
          <Text style={{ fontSize: 18, fontFamily: Fonts.regular, textDecorationLine: 'underline',marginLeft:4 }}>Register now</Text>
          </TouchableOpacity>
        
        </View>

      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
   <StatusBar backgroundColor={Colors.black} barStyle='light-content' />
<Loader loading={this.state.loading}/>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
          style={{ flex: 1, backgroundColor: Colors.white, }}>
          <View
            style={{
              flex: 1,
              zIndex: 999,
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={{width:'100%',elevation:0.2,backgroundColor:'white',height:40,flexDirection:'row',alignItems:'center'}}>
               <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Splash')}} style={{marginLeft:10,width:40,height:'100%',justifyContent:'center',alignItems:'center'}}> 
                <Icon name="angle-left" size={40} style={{ color:Colors.black}}/>
               </TouchableOpacity>
               <Text style={{fontFamily:Fonts.regular,fontSize:18,marginLeft:10}}>Back</Text>
               </View>
              <View
                style={{
                  width: width,
                  alignItems: 'center',paddingHorizontal:20,marginTop:10
                  
                }}>
                    <View style={{ height: 10 }} />
                <Image
                  source={require('../images/icon.webp')}
                  style={{
                    height:100,
                    width:100,
                    alignSelf:'flex-start',
                    resizeMode:'cover',marginLeft:20,
                    tintColor: Colors.primary,
                  }}
                />
                <View style={{flexDirection:'row',position:'absolute',top:50,alignItems:'center'}}>
                <Text style={{fontSize:34,color:Colors.primary,fontFamily:Fonts.bold}}>E</Text>
                <Text style={{fontSize:22,color:Colors.black,fontFamily:Fonts.bold}}> - WR</Text>
                </View>
             
              </View>
              <View style={{ height: 10 }} />
            

              <View
                style={{
                  alignItems: 'center',
                  height:30,
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-around',
                  padding: 5, alignSelf: 'center'
                }}>

                {/* <TouchableOpacity onPress={()=>{this.setState({Visible:'Email'})}} style={{backgroundColor:'white',elevation:0.2,height:'100%',width:'49%',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.TextStyle}>
                    Email{' '}
                  </Text>
                </TouchableOpacity>

                <View style={{width:2,height:'100%'}}></View>

                <TouchableOpacity onPress={()=>{this.setState({Visible:'Phone'})}} style={{backgroundColor:'white',elevation:0.2,height:'100%',width:'49%',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.TextStyle}>
                    Phone{' '}
                  </Text>
                </TouchableOpacity> */}


              </View>
             
               {this.state.Visible == 'Email' ?
              <View
                style={{ flex: 1, width: width, paddingHorizontal: width * 0.1 }}>

                <Text style={styles.label}>Username</Text>
                <TextInput
                  placeholder="Enter Username"
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor,
                  
                  }]}
                  autoCapitalize='none'

                  onFocus={() => this.setState({ inputBorderColor: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor: Colors.medium_gray })
                  }
                  onChangeText={username => this.setState({ username })}
                  returnKeyType={"next"}
                  onSubmitEditing={(event) => {
                    this.refs.Password.focus();
                  }}

                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor2,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor2: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor2: Colors.medium_gray })
                  }
                  autoCapitalize='none'

                  ref='Password'
                  placeholder="Enter Password"
                  returnKeyType={"next"}
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                    this.props.navigation.navigate('Home')
                  }}
                  onChangeText={password => this.setState({ password })}

                />
                 <TouchableOpacity
                  onPress={() =>  this.props.navigation.navigate('Home')}
                  activeOpacity={0.8}
                  style={{width:'100%',borderRadius: 8,elevation: 3,backgroundColor:Colors.primary, marginTop: 20,height: 42 }}>
                    <ImageBackground style={{borderRadius: 8,justifyContent: 'center', alignItems: 'center',height:'100%'}} source={require('../images/bg.png')}>
                     <Text style={{ fontFamily: Fonts.bold, fontSize: 18, color: Colors.white }}>Login</Text>

                   </ImageBackground>
                </TouchableOpacity>

                {this.Design()}
            
              </View>
               :
               <View style={{ flex: 1, width: width, paddingHorizontal: width * 0.1 }}>

               <Text style={styles.label}>Phone</Text>

               <TextInput
                 placeholder="Enter Phone No."
                 selectionColor={Colors.primary}
                 style={[styles.textInput, {
                   textAlignVertical: this.props.multiline ? "top" : "center",
                   borderColor: this.state.inputBorderColor,
                   minHeight: this.props.multiline ? 100 : null,
                 }]}
                 autoCapitalize='none'
                 keyboardType={"phone-pad"}
                 onFocus={() => this.setState({ inputBorderColor: Colors.primary })}
                 onBlur={() =>
                   this.setState({ inputBorderColor: Colors.medium_gray })
                 }
                 onChangeText={username => this.setState({ username })}
                 returnKeyType={"next"}
                 onSubmitEditing={(event) => {
                   this.refs.Password.focus();
                 }}

               />

                  <TouchableOpacity
                    // onPress={() => this.Login()}
                    onPress={()=>{const resetAction = StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Home' }),
                      ],
                    });
                    this.props.navigation.dispatch(resetAction);}}
                    activeOpacity={0.8}
                    style={{ width: '100%', borderRadius: 8, elevation: 3, backgroundColor: Colors.primary, marginTop: 20, height: 50 }}>
                    <ImageBackground style={{ borderRadius: 8, justifyContent: 'center', alignItems: 'center', height: '100%' }} source={require('../images/bg.png')}>
                      <Text style={{ fontFamily: Fonts.bold, fontSize: 18, color: Colors.white }}>GET OTP</Text>
                    </ImageBackground>

                </TouchableOpacity>

                {this.Design()}

               </View>}
            </ScrollView>
          </View>


        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
  textInput: {
    padding: 15,
    paddingVertical: Platform.OS == "ios" ? 12 : 5,
    paddingHorizontal: 10,
    fontSize: 16,

    fontFamily: Fonts.regular,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,

  },
  label: {

    marginTop: 15,
    color: Colors.black,
    fontSize: 14,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  required: {
    marginTop: 15,
    color: 'red',
    fontSize: 14,
    paddingLeft: 3,
    paddingVertical: 3,
    fontFamily: Fonts.medium,
  },
  TextStyle: {
    fontSize: 18,
    color: Colors.primary,
    fontFamily: Fonts.black,
  }
});



