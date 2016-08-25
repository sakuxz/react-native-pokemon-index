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
  ListView,
  Modal,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Pokemon from '../Components/pokemon';
import SettingModal from '../Components/settingModal';
var {height, width} = Dimensions.get('window');

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    // this.updateData();

    this.state = {
      settingModal: true,
      limit: 0,
      offset: 0,
      data: this.ds.cloneWithRows([])
    };

  }

  render() {
    return (
      <Container>


        <View style={styles.container}>

          <SettingModal updateData={this.updateData.bind(this)} limit={this.state.limit} setLimit={this.setLimit.bind(this)} setOffset={this.setOffset.bind(this)} offset={this.state.offset} toggleModal={this.toggleSettingModal.bind(this)} open={this.state.settingModal} />

          <View style={styles.pokeList} >
            <Text style={styles.title} >
              Pokemons
            </Text>
            <View style={styles.centerDiv}>
              <View style={styles.titleBar}></View>
            </View>

            <ListView
              enableEmptySections={true}
              dataSource={this.state.data}
              renderRow={(rowData) => <Pokemon name={rowData.name} url={rowData.url} />}
              />

            <TouchableOpacity activeOpacity={0.6} onPress={()=>{this.toggleSettingModal()}} style={styles.stBtn} >
              <View style={styles.stBtnIconWrapper} >
                <Icon style={styles.stBtnIcon} name='ios-options' />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </Container>
    );
  }

  toggleSettingModal(){
    this.setState({
      settingModal: !this.state.settingModal
    });
  }

  updateData(){
    const {limit, offset} = this.state;
    this.fetchPokemons(limit, offset).then((pokemons)=>{
      console.log(pokemons);
      this.setState({
        data: this.ds.cloneWithRows(pokemons)
      });
    })
  }

  setLimit(limit){
    this.setState({
      limit
    });
  }

  setOffset(offset){
    this.setState({
      offset
    });
  }

  fetchPokemons = (limit, offset) => {
    const url = `http://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => responseJson.results)
  }

}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#78d59d'
  },
  pokeList: {
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    overflow: 'hidden',
    height: height*0.95,
    marginTop: height*0.05,
    paddingBottom: 25,
    elevation: 2
  },
  title:{
    textAlign: 'center',
    fontSize: 19,
    color: 'rgb(92, 106, 110)',
    marginTop: 30,
    marginBottom: 11,
    fontWeight: '100'
  },
  titleBar: {
    width: 53,
    height:2,
    backgroundColor: 'rgb(79, 92, 96)',
    marginBottom: 25
  },
  centerDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stBtn: {
    position: 'absolute',
    bottom: 48,
    left: width/2-28,
    width: 46,
    height: 46,
    borderRadius: 100,
    backgroundColor: '#1d8497',
    padding: 5,
    elevation: 5,
  },
  stBtnIconWrapper: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: '#1d8497',
    borderWidth: 1,
    borderColor: '#98dde9',
  },
  stBtnIcon: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 6,
    color: '#98dde9',
  }
});

export default IndexPage;
