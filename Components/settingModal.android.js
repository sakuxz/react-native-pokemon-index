/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, Badge, Tabs, Card, CardItem, List, ListItem, InputGroup, Input } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Modal,
  Alert
} from 'react-native';
var {height, width} = Dimensions.get('window');


class SettingModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.props.open}
        onRequestClose={() => {this.props.toggleModal()}}
        >
        <View style={styles.updateModalMask}></View>
        <View style={styles.updateModal}>
          <View style={{padding:18,paddingTop:16,paddingBottom:6}} >
            <Text>Limit</Text>
            <Input selectTextOnFocus={true} keyboardType='numeric' value={this.props.limit.toString()} placeholder="Limit" onChangeText={(limit) => {this.props.setLimit(limit)}} />
            <Text>Offset</Text>
            <Input selectTextOnFocus={true} keyboardType='numeric' value={this.props.offset.toString()} placeholder="Offset" onChangeText={(offset) => {this.props.setOffset(offset)}} />
          </View>
          <Button style={{margin: 15,elevation:0}} block warning onPress={()=>this.updatePokemons()} >更新 Pokemon</Button>
        </View>
      </Modal>
    );
  }

  componentDidUpdate(){
  }

  updatePokemons(){
    this.props.toggleModal();
    this.props.updateData();
  }

}

const styles = StyleSheet.create({
  updateModal: {
    backgroundColor: 'white',
    marginTop: 150,
    padding: 25,
    elevation: 8,
    borderRadius: 2,
    position: 'absolute',
    bottom: -5,
    left: width*0.025,
    width: width*0.95,
  },
  updateModalMask: {
    backgroundColor: 'white',
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    top: 0,
    left: 0
  }
});

export default SettingModal;
