/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, Badge, Tabs, Card, CardItem, ListView } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';
import IndexPage from './Pages/indexPage'


class reactnativepractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const routes = [
      {page: IndexPage, index: 0},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>{
            const Page = route.page;
            return <Page route={routes} pop={navigator.pop} push={navigator.push} />
          }
        }
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.HorizontalSwipeJump}
        style={{padding: 0}}
      />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('reactnativepractice', () => reactnativepractice);
