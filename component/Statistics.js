import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
} from 'react-native';

import WorldData from './WorldData';
import CountryData from './CountryData';
import api from '../api';
import {Spinner} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldCase: '',
      countries: [],
      active: 0,
      xTabOne: 0,
      xTabTwo: 0,
      translateX: new Animated.Value(0),
      translateXTabOne: new Animated.Value(0),
      translateXTabTwo: new Animated.Value(width),
      translateY: -1000,
      loading: false,
    };
  }

  // fat arrow function which is accept one variable which is type
  handleSlide = (type) => {
    let {active, translateX, translateXTabOne, translateXTabTwo} = this.state;
    Animated.spring(translateX, {
      toValue: type, // when user click on tabtwo than the type would be xTabTwo and and value would be xTabTwo, tovalue change to be x coordinate of xTabTwo
      duration: 100, // 100 mlsec
      useNativeDriver: true, // Add This line
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true, // Add This line
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true, // Add This line
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true, // Add This line
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true, // Add This line
        }).start(),
      ]);
    }
  };
  componentDidMount() {
    this.CovidData();
  }
  // Get Covid Data
  CovidData() {
    this.setState({loading: true});
    api
      .covid()
      .then((res) => {
        console.log('worlddata', res);
        this.setState({
          loading: false,
          worldCase: res.world_total,
          countries: res.countries_stat,
        });
      })
      .catch((err) => {
        this.setState({loading: false});
        console.log(err);
      });
  }
  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY,
    } = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.statisticsView}>
            <View style={styles.statisticsDataView}>
              <View style={styles.tabmainview}>
                <View style={styles.tabsubview}>
                  <Animated.View
                    style={{
                      position: 'absolute',
                      width: '50%',
                      height: 42,
                      top: 2,
                      left: 2,
                      backgroundColor: '#fff',
                      borderRadius: 20,
                      transform: [
                        {
                          translateX,
                        },
                      ],
                    }}
                  />
                  <TouchableOpacity
                    style={styles.globalViewBtn}
                    onLayout={(event) =>
                      this.setState({
                        xTabOne: event.nativeEvent.layout.x,
                      })
                    }
                    onPress={() =>
                      this.setState({active: 0}, () =>
                        this.handleSlide(xTabOne),
                      )
                    }>
                    <Text
                      style={{
                        color: active === 1 ? '#fff' : '#000',
                      }}>
                      Global
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.countryViewBtn}
                    onLayout={(event) =>
                      this.setState({
                        xTabTwo: event.nativeEvent.layout.x,
                      })
                    }
                    onPress={() =>
                      this.setState({active: 1}, () =>
                        this.handleSlide(xTabTwo),
                      )
                    }>
                    <Text
                      style={{
                        color: active === 1 ? '#000' : '#fff',
                      }}>
                      My Country
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          translateX: translateXTabOne,
                        },
                      ],
                    }}
                    onLayout={(event) =>
                      this.setState({
                        translateY: event.nativeEvent.layout.height,
                      })
                    }>
                    <WorldData worldCase={this.state.worldCase}></WorldData>
                  </Animated.View>

                  <Animated.View
                    style={{
                      transform: [
                        {
                          translateX: translateXTabTwo,
                        },
                        {
                          translateY: -translateY,
                        },
                      ],
                    }}>
                    <CountryData countries={this.state.countries}></CountryData>
                  </Animated.View>
                </View>
              </View>
            </View>
            <View style={styles.statisticsBottomView}>
              <View style={{flex: 1}}>
                <Image
                  source={require('../android/app/src/asset/homeimage.png')}
                  style={styles.homeimage}
                />
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.coronaQuotes}>
                  "We are in this together and we will get through this,
                  together."
                </Text>
                <Text style={styles.stayQuotes}>#STAY HOME #STAY SAFE</Text>
              </View>
            </View>
            {this.state.loading === true && (
              <View style={styles.myloader}>
                <Text style={{color: '#fff'}}>Please wait...</Text>
                <Spinner color='blue' />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Statistics;

const styles = StyleSheet.create({
  myloader: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
},
  statisticsView: {
    backgroundColor: '#633689',
  },
  statisticsDataView: {
    flex: 1,
    backgroundColor: '#633689',
  },
  statisticsBottomView: {
    flex: 1,
    padding: 20,
    paddingBottom: 30,
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  tabmainview: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
  },
  tabsubview: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    height: 46,
    position: 'relative',
    borderRadius: 25,
  },
  globalViewBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 46,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    color: '#000',
  },
  countryViewBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 46,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    color: '#000',
  },
  coronaQuotes: {
    paddingTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stayQuotes: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeimage: {
    width: 100,
    height: 100,
    position: 'absolute',
    left: 15,
    top: 30,
  },
});
