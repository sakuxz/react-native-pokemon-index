/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, Badge, Tabs, Card, CardItem } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');


class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const pokeId = this.props.url.split('/')[this.props.url.split('/').length-2]
    return (
      <View style={styles.card}>
        <View>
          <View>
            <Image
              style={styles.pokeImg}
              source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}}
            />
          </View>
        </View>
        <View style={styles.ctn}>
          <View style={styles.row}>
            <Text style={styles.title}>
              {this.props.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pokeImg: {
    width: 50,
    height: 50,
  },
  card: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 11,
    paddingLeft: 23,
    paddingRight: 23,
    paddingBottom: 11,
    marginBottom: 0,
  },
  ctn: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingTop: 11,
    paddingLeft: 15,
    paddingRight: 0,
    paddingBottom: 0,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 6,
    height: 25
  },
  title: {
    fontSize: 18
  }
});

export default Pokemon;
