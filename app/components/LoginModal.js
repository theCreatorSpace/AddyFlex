import React, {Component} from 'react';
import Button from '../components/blue-btn';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {padding, dimensions, font, colors} from '../styles/base';
import {withNavigation} from 'react-navigation';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onLogin = async () => {
    const {email, password} = this.state;
    try {
      if (email.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App');
      } else {
        alert('Kindly fill in your login Creadentials');
      }
    } catch (error) {
      alert(error);
    }
  };
  render() {
    const props = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign in with email !</Text>

        <View style={styles.formField}>
          <View style={styles.mailIcon} />
          <TextInput
            style={styles.input}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            placeholder="email@example.com"
          />
        </View>

        <View style={styles.formField}>
          <View style={styles.mailIcon} />
          <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          title="Sign In"
          onClick={() => {
            this.onLogin();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 15,
    width: dimensions.fullWidth * 0.95,
    height: dimensions.fullHeight * 0.4,
    alignSelf: 'center',
    marginTop: padding.xl,
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'space-around',
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
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
  },
  formField: {
    width: width * 0.85,
    height: width * 0.12,
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  mailIcon: {
    padding: 20,
    backgroundColor: '#17519D',
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    fontWeight: font.regular,
    fontSize: font.reg,
  },
  forgotPass: {
    color: '#19ACBE',
    fontWeight: '600',
    fontSize: font.md,
    fontFamily: font.family,
    textAlign: 'right',
  },
});
