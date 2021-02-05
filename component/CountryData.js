/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Form, Item, Picker, Grid, Col} from 'native-base';
import {globalStyles} from '../globalstyle/globalStyles';

class CountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country_name: '',
    };
  }

  // Render Countries
  dropdownList() {
    // console.log('country test', this.props.countries);
    if (this.props.countries) {
      // console.log('test if');
      return this.props.countries.map((data, index) => {
        // here you will get covid data by countries.
        // console.log('datacountry', data);
        return (
          <Picker.Item
            label={data.country_name}
            value={data.country_name}
            key={index}
          />
        );
      });
    }
  }
  AffectedCases() {
    if (this.state.dataitem) {
      return <Text>{this.state.dataitem.cases}</Text>;
    }
  }
  DeathCases() {
    if (this.state.dataitem) {
      return <Text>{this.state.dataitem.deaths}</Text>;
    }
  }
  RecoveredCases() {
    if (this.state.dataitem) {
      return <Text>{this.state.dataitem.total_recovered}</Text>;
    }
  }
  ActiveCases() {
    if (this.state.dataitem) {
      return <Text>{this.state.dataitem.active_cases}</Text>;
    }
  }
  SeriousCases() {
    if (this.state.dataitem) {
      return <Text>{this.state.dataitem.serious_critical}</Text>;
    }
  }

  CountryChange(value) {
    this.setState({
      country_name: value,
    });
    if (value) {
      let countryObject = this.props.countries.filter((item) => {
        return item.country_name == value;
      });
      let single_country = countryObject[0];
      console.log('newdata', single_country);
      if (single_country) {
        this.setState({
          dataitem: single_country,
        });
      }
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.selectCountryText}>Select Your Country</Text>
          <Form style={styles.countryDropdown}>
            <Item picker style={{height: 30}}>
              <Picker
                mode="dropdown"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.country_name}
                onValueChange={this.CountryChange.bind(this)}>
                {this.dropdownList()}
              </Picker>
            </Item>
          </Form>
        </View>
        <View>
        <Grid style={globalStyles.firstcontainer}>
          <Col>
            <View style={globalStyles.affectedview}>
              <Text style={globalStyles.caseNameTitle}>Affected</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.AffectedCases()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.deathview}>
              <Text style={globalStyles.caseNameTitle}>Death</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.DeathCases()}
              </Text>
            </View>
          </Col>
        </Grid>
        <Grid>
          <Col>
            <View style={globalStyles.recoveredview}>
              <Text style={globalStyles.caseNameTitle}>Recovered</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.RecoveredCases()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.activeview}>
              <Text style={globalStyles.caseNameTitle}>Active</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.ActiveCases()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.seriousview}>
              <Text style={globalStyles.caseNameTitle}>Serious</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.SeriousCases()}
              </Text>
            </View>
          </Col>
        </Grid>
      </View>
      </View>
    );
  }
}

export default CountryData;

const styles = StyleSheet.create({
  countryDropdown: {
    color: '#000',
    backgroundColor: '#fff',
    width: 180,
    position: 'absolute',
    right: 0,
  },
  selectCountryText: {
    color: '#fff',
    fontSize: 16,
  },
});
