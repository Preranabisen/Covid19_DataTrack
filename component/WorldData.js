/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import {Grid, Col} from 'native-base';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../globalstyle/globalStyles';

class WorldData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
    };
  }

  AffectedData() {
    if (this.props.worldCase) {
      return <Text>{this.props.worldCase.total_cases}</Text>;
    }
  }
  DeathData() {
    if (this.props.worldCase) {
      return <Text>{this.props.worldCase.total_deaths}</Text>;
    }
  }
  RecoveredData() {
    if (this.props.worldCase) {
      return <Text>{this.props.worldCase.total_recovered}</Text>;
    }
  }
  ActiveData() {
    if (this.props.worldCase) {
      return <Text>{this.props.worldCase.active_cases}</Text>;
    }
  }
  SeroiusData() {
    if (this.props.worldCase) {
      return <Text>{this.props.worldCase.serious_critical}</Text>;
    }
  }

  render() {
    return (
      <View>
        <Grid style={globalStyles.firstcontainer}>
          <Col>
            <View style={globalStyles.affectedview}>
              <Text style={globalStyles.caseNameTitle}>Affected</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.AffectedData()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.deathview}>
              <Text style={globalStyles.caseNameTitle}>Death</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.DeathData()}
              </Text>
            </View>
          </Col>
        </Grid>
        <Grid>
          <Col>
            <View style={globalStyles.recoveredview}>
              <Text style={globalStyles.caseNameTitle}>Recovered</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.RecoveredData()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.activeview}>
              <Text style={globalStyles.caseNameTitle}>Active</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.ActiveData()}
              </Text>
            </View>
          </Col>
          <Col>
            <View style={globalStyles.seriousview}>
              <Text style={globalStyles.caseNameTitle}>Serious</Text>
              <Text style={globalStyles.caseCountTitle}>
                {this.SeroiusData()}
              </Text>
            </View>
          </Col>
        </Grid>
      </View>
    );
  }
}

export default WorldData;
