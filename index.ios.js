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


export default class TcombFormNativeDemo extends Component {
  constructor(props) {
    super();
    this.state = {
      options: {
        fields: {
          name: {}
        }
      },
      value: {
        name: 'hu',
        surname: 'yang'
      }
    };
  }
  componentWillMount() {
  }
  componentDidMount() {
    this.refs.form.getComponent('age').refs.input.focus();
  }
  onChange(value, path) {
    if (path.indexOf('rememberMe') >= 0) {
      let options = tForm.update(this.state.options, {
        fields: {
          name: {
            editable: { '$set': !value.rememberMe }
          }
        }
      })
      this.setState({ options: options });
    }
    this.setState({ value: value });
  }
  onPress() {
    let value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <RealForm ref='form' type={Person} options={this.state.options} value={this.state.value} onChange={(value, path) => this.onChange(value, path)} />
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
