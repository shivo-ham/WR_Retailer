import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
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
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import API from '../common/API';
import Loader from '../common/Loader';

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      fname: '',
      lname: '',
      phone:'',
      email:'',
      password:'',
      repassword:'',
      inputBorderColor1: Colors.medium_gray,
      inputBorderColor2: Colors.medium_gray,
      inputBorderColor3: Colors.medium_gray,
      inputBorderColor4: Colors.medium_gray,
      inputBorderColor5: Colors.medium_gray,
      inputBorderColor6: Colors.medium_gray,
      inputBorderColor7: Colors.medium_gray,avatarSource: null,
     

      Visible:'Email'
    };

    this.onSubmitUsername = this.onSubmitUsername.bind(this);

    this.usernameRef = this.updateRef.bind(this, 'username');
    this.passwordRef = this.updateRef.bind(this, 'password');
  }

  componentDidMount(){
    AsyncStorage.getItem('Name').then(fname=>{
      AsyncStorage.getItem('lName').then(lname=>{
        AsyncStorage.getItem('Profile').then(Profile=>{
          console.log(Profile);
          
      // this.setState({user:JSON.parse(fname)+" "+JSON.parse(lname),avatarSource: JSON.parse(Profile) })
      this.setState({avatarSource: JSON.parse(Profile) })
  
    })
  }) })
  }


  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {

      console.log('options,,image', options);
      console.log(',response,image', options, response);


      if (response.didCancel) {
        Toast.show(
          "You cancelled photo picker",
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (response.error) {
        Toast.show(
          "" + response.error,
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (response.customButton) {
        Toast.show(
          "" + response.customButton,
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else {
        let source = { uri: response.uri };
        AsyncStorage.setItem('Profile',JSON.stringify(source))
        this.setState({
          avatarSource:source,
        });
        console.log(source);
        
      }
    });
  }



  updateRef(name, ref) {
    this[name] = ref;
  }

  onSubmitUsername() {
    console.log(this.password);
  }
  CheckValueIsNumberOrNot = () => {

    if (isNaN(this.state.phone)) {
      Toast.show(
        "Number is invalid ",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else { }

  }
  Registration = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!this.state.fname){
      Toast.show(
        "Please Enter First name",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.lname){
      Toast.show(
        "Please Enter Last name",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
   
    else if (this.CheckValueIsNumberOrNot() == "") {
      Toast.show(
        "Number is invalid..",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.email){
      Toast.show(
        "Please Enter Email",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if (reg.test(this.state.email) === false) {
      Toast.show(
        "Email is invalid.",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.phone){
      Toast.show(
        "Please Enter Phone",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.password){
      Toast.show(
        "Please Enter Password",
        Toast.SHORT,
        Toast.BOTTOM
      );
    }
    else if(!this.state.repassword){
      Toast.show(
        "Please Enter Confirm Password",
        Toast.SHORT,
        Toast.BOTTOM
      );

    }
    else if(this.state.password != this.state.repassword){
      Toast.show(
        "Please Enter Same password",
        Toast.SHORT,
        Toast.BOTTOM
      );
      
  } else {
    
                  const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Login' }),
                    ],
                  });
                  this.props.navigation.dispatch(resetAction);
      
  
  }


};



  Design = () =>{
    return(
      // <View style={{margin:10}}>
      //   <Text style={{ textAlign: 'center', fontFamily: Fonts.medium, fontSize: 20, color: Colors.primary, margin: 20 }}>OR</Text>


      //   <View style={{ flexDirection: 'row', width: '40%', alignSelf: 'center', justifyContent: 'space-between', height: 50 }}>

      //     <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
      //       <Image source={require('../images/fb.png')} style={{ height: '100%', width: '100%' }} />
      //     </TouchableOpacity>

      //     <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'black' }}>
      //       <Image source={require('../images/google.png')} style={{ height: '100%', width: '100%' }} />
      //     </TouchableOpacity>

      //   </View>
      <View style={{marginTop:10}}>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontFamily: Fonts.thin }}>Have a account? </Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
            <Text style={{ fontSize: 18, fontFamily: Fonts.regular, textDecorationLine: 'underline',marginLeft:4 }}>Please login</Text>
         </TouchableOpacity>
        </View>
        <View style={{height:40}}></View>
      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
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
               <TouchableOpacity onPress={()=>{  this.props.navigation.goBack()}} style={{marginLeft:10,width:40,height:'100%',justifyContent:'center',alignItems:'center'}}> 
                <Icon name="angle-left" size={40} style={{ color:Colors.black}}/>
               </TouchableOpacity>
             
              <Text style={{fontFamily:Fonts.regular,fontSize:18,marginLeft:10}}>Profile</Text>

          </View>
            
    

          <View style={{ paddingHorizontal: 20,marginTop:20 }}>

<View style={{ height: 80, width: 80, elevation: 0 }}>
  <Image style={{ height: '100%', width: '100%', borderRadius: 30, 
  resizeMode: this.state.avatarSource ? 'center' : 'cover' }}
   source={this.state.avatarSource ? this.state.avatarSource :require('../images/userp.png')} />
   {/* source={this.state.Source ?{uri:this.state.Source} :require('../images/userp.png')} /> */}
</View>

<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}
  style={{ height: 28, width: 28, justifyContent: 'center', alignItems: 'center', borderColor: 'white', borderWidth: 1, position: 'absolute', left: 80, bottom: 8, borderRadius: 14, elevation: 0 }}>
  <Image style={{ height: 20, width: 20, tintColor: 'black' }} source={ require('../images/add_image.png')} />
</TouchableOpacity>
</View>
        
              <View
                style={{ flex: 1, width: width, paddingHorizontal: 20}}>

                <Text style={styles.label}>First Name</Text>
                <TextInput
                  placeholder="Enter First Name"
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor1,
                  
                  }]}
                  autoCapitalize='none'

                  onFocus={() => this.setState({ inputBorderColor1: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor1: Colors.medium_gray })
                  }
                  onChangeText={fname => this.setState({ fname })}
                  returnKeyType={"next"}
                  onSubmitEditing={(event) => {
                    this.refs.lname.focus();
                  }}

                />


                <Text style={styles.label}>Last Name</Text>
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

                  ref='lname'
                  placeholder="Enter Last Name"
                  returnKeyType={"next"}
                 
                  onChangeText={lname => this.setState({ lname })}
                  onSubmitEditing={(event) => {
                    this.refs.email.focus();
                  }}
                />


                 <Text style={styles.label}>Email id</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor3,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor3: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor3: Colors.medium_gray })
                  }
                  autoCapitalize='none'
                  keyboardType={'email-address'}
                  ref='email'
                  placeholder="Enter Email Id"
                  returnKeyType={"next"}
                  
                  onSubmitEditing={(event) => {
                    this.refs.phone.focus();
                  }}
                  onChangeText={email => this.setState({ email })}
                />

           <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor4,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor4: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor4: Colors.medium_gray })
                  }
                  autoCapitalize='none'

                  ref='phone'
                  placeholder="Enter Phone Number"
                  returnKeyType={"next"}
                   keyboardType={"phone-pad"}
                  onSubmitEditing={(event) => {
                    this.refs.password.focus();
                  }}
                  onChangeText={phone => this.setState({ phone })}
                />

       <Text style={styles.label}>Password</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor5,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor5: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor5: Colors.medium_gray })
                  }
                  autoCapitalize='none'

                  ref='password'
                  placeholder="Enter Password"
                  returnKeyType={"next"}
                  secureTextEntry={true}
                  onSubmitEditing={(event) => {
                    this.refs.repassword.focus();
                  }}
                  onChangeText={password => this.setState({ password })}
                />

            <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor6,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor6: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor6: Colors.medium_gray })
                  }
                  autoCapitalize='none'

                  ref='repassword'
                  placeholder="Enter Confirm Password"
                  returnKeyType={"next"}
                  secureTextEntry={true}
                  onSubmitEditing={(event) => {
                    this.refs.GST.focus();
                  }}
                  onChangeText={repassword => this.setState({ repassword })}
                />

<Text style={styles.label}>GST Number</Text>
                <TextInput
                  selectionColor={Colors.primary}
                  style={[styles.textInput, {
                    textAlignVertical: this.props.multiline ? "top" : "center",
                    borderColor: this.state.inputBorderColor7,
                  
                  }]}
                  onFocus={() => this.setState({ inputBorderColor7: Colors.primary })}
                  onBlur={() =>
                    this.setState({ inputBorderColor7: Colors.medium_gray })
                  }
                  autoCapitalize='none'

                  ref='GST'
                  placeholder="Enter GST Number"
                  returnKeyType={"next"}
                  secureTextEntry={true}
                  onSubmitEditing={(event) => {
                    // this.refs.phone.focus();
                  }}
                  onChangeText={repassword => this.setState({ repassword })}
                />

                 <TouchableOpacity
            onPress={() => this.Registration()}
                  activeOpacity={0.8}
                  style={{width:'100%',borderRadius: 8,elevation: 3,backgroundColor:Colors.primary, marginTop: 20,height: 42 }}>
                    <ImageBackground style={{borderRadius: 8,justifyContent: 'center', alignItems: 'center',height:'100%'}} source={require('../images/bg.png')}>
                       <Text style={{ fontFamily: Fonts.bold, fontSize: 18, color: Colors.white }}>Submit</Text>
                   </ImageBackground>
                </TouchableOpacity>

<View style={{height:20}}></View>
              
            
                 </View>
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
     marginTop:1, 
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