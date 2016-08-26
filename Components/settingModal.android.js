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
  Alert,
  Animated
} from 'react-native';
var {height, width} = Dimensions.get('window');


class SettingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideInValue: new Animated.Value(65),
    };
  }
  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.open}
        onRequestClose={() => {this.props.toggleModal()}}
        animationType='fade'
        >
        <View style={styles.updateModalMask}></View>
        <Animated.View style={[
            styles.updateModal,
            {transform: [{translateY: this.state.slideInValue}]}
          ]} >
          <View style={{padding:18,paddingTop:16,paddingBottom:6}} >
            <Text>Limit</Text>
            <Input selectTextOnFocus={true} keyboardType='numeric' value={this.props.limit.toString()} placeholder="Limit" onChangeText={(limit) => {this.props.setLimit(limit)}} />
            <Text>Offset</Text>
            <Input selectTextOnFocus={true} keyboardType='numeric' value={this.props.offset.toString()} placeholder="Offset" onChangeText={(offset) => {this.props.setOffset(offset)}} />
          </View>
          <Button style={{margin: 15,elevation:0}} block warning onPress={()=>this.updatePokemons()} >更新 Pokemon</Button>
        </Animated.View>
      </Modal>
    );
  }

  componentDidMount() {
    this.state.slideInValue.setValue(65);
    Animated.spring(
      this.state.slideInValue,
      {
        toValue: 0,
        friction: 5,
        tension: 0
      }
    ).start();
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.open !== this.props.open && nextProps.open === true){
      this.state.slideInValue.setValue(65);
      Animated.spring(
        this.state.slideInValue,
        {
          toValue: 0,
          friction: 5,
          tension: 0
        }
      ).start();
    }
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
