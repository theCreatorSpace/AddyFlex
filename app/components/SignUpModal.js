import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
import Button from '../components/blue-btn';
import { colors } from '../styles/base';
const height = Dimensions.get('window').height;
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      country: 'Select Country',
      email: '',
      aboutUs: 'How did you hear about us',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formField}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={fName => this.setState({fName})}
            value={this.state.fName}
          />
        </View>

        <View style={styles.formField}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={lName => this.setState({lName})}
            value={this.state.lName}
          />
        </View>

        <View style={styles.formField}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.extentionText}>{this.state.country}</Text>
        </View>
        <View style={styles.Phone}>
          <View style={styles.extension}>
            <Text style={styles.extentionText}>Extensi..</Text>
          </View>
          <TextInput
            style={styles.num}
            placeholder="Phone Number"
            onChangeText={phone => this.setState({phone})}
            value={this.state.phone}
            keyboardType={'numeric'}
          />
        </View>

        <View style={styles.formField}>
          <Text style={styles.extentionText}>{this.state.aboutUs}</Text>
        </View>

        <View style={styles.formField}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            secureTextEntry={'true'}
          />
        </View>

        <View style={styles.alignTC}>
          <Text style={styles.conditon}>By registering you accept our </Text>
          <Text style={styles.TC}>Terms and Conditions</Text>
        </View>
        <Button title="Register" onClick={()=> {alert('Registeration Successful')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 15,
    width: width * 0.95,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#17519D',
    padding: 15,
    width: width * 0.4,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
  formField: {
    width: width * 0.85,
    height: width * 0.1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 17,
    backgroundColor: '#fff',
  },
  Phone: {
    width: width * 0.85,
    height: width * 0.1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 5,
  },
  num: {
    flex: 0.75,
    fontSize: 17,
    paddingLeft: 15,
    borderRadius: 5,
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  extension: {
    flex: 0.25,
    fontSize: 17,
    paddingLeft: 15,
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  extentionText: {
    fontWeight: '400',
    color: '#a6a6a6',
    fontSize: 16,
    alignSelf: 'center',
  },
  alignTC: {
    alignSelf: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  condtion: {
    color: '#000',
    fontSize: 14,
    fontWeight: '200',
    marginLeft: 10,
  },
  TC: {
    color: '#19ACBE',
    fontWeight: '500',
  },
});
