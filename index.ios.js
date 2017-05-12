/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import tForm from 'tcomb-form-native';
let RealForm = tForm.form.Form;

let Person = tForm.struct({
  name: tForm.String,
  surname: tForm.maybe(tForm.String),
  age: tForm.Number,
  rememberMe: tForm.Boolean
});

let options = {};


export default class TcombFormNativeDemo extends Component {
  constructor(props) {
    super();
    this.state = {
      value: {
        name: 'hu',
        surname: 'yang'
      }
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  onChange(value) {
    console.log('=========');
    console.log(value);
    this.setState({value});
  }
  onPress() {
    let value = this.refs.form.getValue();
    if (value) {
      console.log('------------');
      console.log(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RealForm ref='form' type={Person} options={options} value={this.state.value} onChange={(value)=>this.onChange(value)}/>
        <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 64,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

AppRegistry.registerComponent('TcombFormNativeDemo', () => TcombFormNativeDemo);
