/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
  Linking,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Grid, Col, Icon} from 'native-base';

class Home extends React.Component {
  makeCall = () => {
    let phonenumber = '';

    if (Platform.OS === 'android') {
      phonenumber = 'tel:$(111)';
    } else {
      phonenumber = 'telprompt:$(111)';
    }

    Linking.openURL(phonenumber);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{backgroundColor: '#fff'}}>
          <View style={styles.headerview}>
            <View style={styles.headersubview}>
              <Text style={styles.firstheader}>Are you a feeling sick?</Text>
              <Text style={styles.secondheader}>
                If you feeling sick with any of covid-19 symptoms please call us
                immediately for help.
              </Text>
              <TouchableOpacity
                onPress={this.makeCall}
                activeOpacity={0.7}
                style={styles.touchableButton}>
                <Icon name="call" style={styles.callicon}></Icon>
                <Text style={styles.TextStyle}>Call Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.preventView}>
            <Text style={styles.preventtext}>Prevention</Text>
            <Grid>
              <Col style={styles.imagestyle}>
                <Image
                  source={require('../android/app/src/asset/distance.png')}
                  style={styles.firstimage}
                />
                <Text style={styles.textstyle}>Avoid Close Contact</Text>
              </Col>
              <Col style={styles.imagestyle}>
                <Image
                  source={require('../android/app/src/asset/hands.jpeg')}
                  style={styles.imageview}
                />
                <Text style={styles.textstyle}>Clean your hands often</Text>
              </Col>
              <Col>
                <Image
                  source={require('../android/app/src/asset/mask.png')}
                  style={styles.imageview}
                />
                <Text style={styles.textstyle}>Wear a facemask</Text>
              </Col>
            </Grid>
          </View>
          <View style={styles.ownTestview}>
            <View>
              <ImageBackground
                source={require('../android/app/src/asset/background.jpg')}
                imageStyle={{borderRadius: 20}}
                style={styles.backgroundimage}>
                <View style={styles.homeBottomView}>
                  <View style={{flex: 1}}>
                    <Image
                      source={require('../android/app/src/asset/nurse.png')}
                      style={styles.nurseimage}
                    />
                  </View>
                  <View style={{flex: 2, padding: 20}}>
                    <Text style={styles.cardfirsttext}>Do Your Own Test!</Text>
                    <Text style={styles.cardsecondtext}>
                      Follow the instructions to do your own test
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  homeBottomView:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap:'wrap'
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginTop: 20,
  },
  nurseimage: {
    width: 100,
    height: 140,
    position: 'absolute',
    top: -35,
    left: 10,
  },
  headerview: {
    flex: 1,
    backgroundColor: '#633689',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headersubview: {
    padding: 25,
  },
  textstyle: {
    textAlign: 'center',
  },
  imagestyle: {
    paddingRight: 30,
  },
  firstheader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondheader: {
    color: '#fff',
    lineHeight: 20,
  },
  preventView: {
    flex: 1,
    padding: 25,
  },
  preventtext: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 20,
  },
  firstimage: {
    width: 100,
    height: 100,
  },
 
  imageview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ownTestview: {
    flex: 1,
    padding: 18,
    paddingTop: 0,
    borderRadius: 25,
  },
  cardfirsttext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardsecondtext: {
    color: '#fff',
  },
  helplinetext: {
    marginTop: 30,
    fontSize: 18,
    color: '#fff',
  },
  touchableButton: {
    width: 130,
    padding: 10,
    marginTop: 20,
    backgroundColor: 'green',
    borderRadius: 25,
  },
  TextStyle: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    left: 45,
    paddingTop: 10,
  },
  callicon: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 10,
  },
});
