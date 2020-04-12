import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, SafeAreaView, StatusBar, Dimensions, FlatList, Animated } from 'react-native';
import Header from '../component/Header';
import Carousel from 'react-native-banner-carousel';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Loader from '../common/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from "react-navigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from 'react-native-simple-toast';
import timeout from '../common/Timeout';
import moment from 'moment';
import API from '../common/API';
import Icon from 'react-native-vector-icons/FontAwesome';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const images = [
  "https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/1dd941ef-f647-49ab-beae-4af02ac39933-5e7a423d9e8d3-1520x800.jpeg",
  "https://securecdn.pymnts.com/wp-content/uploads/2020/03/rent-landlords-leases-coronavirus-COVID-19.jpg",
  "https://blog.ipleaders.in/wp-content/uploads/2017/04/BV-Acharya-18.jpg",
  "https://sa.kapamilya.com/absnews/abscbnnews/media/2018/news/01/06/tormentor-1.png",
  "https://appinstitute.com/wp-content/uploads/2017/08/how-to-market-your-retail-business-on-social-media.png",
  "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/06/19132955/bigstock-User-Social-Networking-And-Cha-234637759.jpg",
  "https://appinstitute.com/wp-content/uploads/2017/08/how-to-market-your-retail-business-on-social-media.png",

];

export default class Home extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    search: '', loading: false, ScholarshipVisible: false, name: '', imageIsFetched: false,
  }



  componentDidMount() {




    // AsyncStorage.getItem('Name').then(fname => {

    //    this.setState({ name: JSON.parse(fname) })

    // })

  }


  renderPage(image, index) {
    return (
      <View key={index}>

        <Image style={{ width: BannerWidth, height: BannerHeight, backgroundColor: Colors.light_gray }} source={{ uri: image }} />

      </View>
    );
  }

  render() {


    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
        <StatusBar backgroundColor={Colors.black} barStyle='light-content' />
        <Header
          backIcon={require('../images/menu.png')}
          pageTitle={this.state.name ? "Welcome" + " " + this.state.name : "Home"}
          back={() => {
            this.props.navigation.openDrawer();
          }}

        />

        <Loader loading={this.state.loading} />


        <View style={{ flex: 1, backgroundColor: Colors.whites }}>


          <ScrollView showsVerticalScrollIndicator={false}>

            <Carousel
              autoplay
              autoplayTimeout={4000}
              loop
              index={0}
              pageSize={BannerWidth}
            >
              {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>

            <View style={{ height: 30 }} />


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 120, paddingHorizontal: 25 }}>
              
              
              <TouchableOpacity 
               onPress={()=>{
                     Toast.show(
      "Under Development",
      Toast.SHORT,
      Toast.BOTTOM
    );
               }}
              style={{ height: 100, width: 140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               <Image source={require('../images/choice.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>Add Order</Text>
              </TouchableOpacity>

         
              <TouchableOpacity 
                onPress={()=>{
                  Toast.show(
   "Under Development",
   Toast.SHORT,
   Toast.BOTTOM
 );
            }}style={{ height: 100, width:140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               <Image source={require('../images/order.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>My Order</Text>           
              </TouchableOpacity>


            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 120, paddingHorizontal: 25 }}>

           
            <TouchableOpacity
              onPress={()=>{
                Toast.show(
 "Under Development",
 Toast.SHORT,
 Toast.BOTTOM
);
          }}
            style={{ height: 100, width: 140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               
               <Image source={require('../images/lorry.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>Delivery</Text>

              </TouchableOpacity>

             
              <TouchableOpacity 
                onPress={()=>{
                  Toast.show(
   "Under Development",
   Toast.SHORT,
   Toast.BOTTOM
 );
            }}
              style={{ height: 100, width: 140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               
               <Image source={require('../images/invoice.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>My Invoice</Text>

              </TouchableOpacity>


            </View>







            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 120, paddingHorizontal: 25 }}>

             
            <TouchableOpacity 
              onPress={()=>{
                Toast.show(
 "Under Development",
 Toast.SHORT,
 Toast.BOTTOM
);
          }}
            style={{ height: 100, width: 140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               
               <Image source={require('../images/user.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>Add Supplier</Text>

              </TouchableOpacity>

           
              <TouchableOpacity
                onPress={()=>{
                  Toast.show(
   "Under Development",
   Toast.SHORT,
   Toast.BOTTOM
 );
            }}
              style={{ height: 100, width: 140, backgroundColor: 'white', elevation: 3,justifyContent:'center',alignItems:'center' }}>
               
               <Image source={require('../images/drugs.png')} style={{height:30,width:30,tintColor:Colors.primary}}/>
               <Text style={{marginTop:10,fontFamily:Fonts.regular,fontSize:16}}>PharmaNxt</Text>

              </TouchableOpacity>


            </View>



          </ScrollView>



        </View>
      </SafeAreaView>
    )
  };
}








