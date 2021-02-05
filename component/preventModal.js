/* eslint-disable quotes */
/* eslint-disable react/no-string-refs */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';

import Modal from 'react-native-modalbox';

class PreventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showAddModal = () => {
    this.refs.myModal.open();
  };

  render() {
    return (
      <Modal ref={'myModal'} position="center" style={{backgroundColor: 'red'}}>
        <View style={{backgroundColor: '#fff', width: 300, height: 300}}>
          <Text style={{color: '#000'}}> Test</Text>
        </View>
      </Modal>
    );
  }
}
export default PreventModal;
