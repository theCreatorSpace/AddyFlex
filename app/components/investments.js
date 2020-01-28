import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {dimensions, padding, font, colors} from '../styles/base';
import Button from '../components/white-btn';
import {withNavigation} from 'react-navigation';

class investments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={{color: 'white', alignSelf: 'center'}}> Minifx </Text>
          <Button
            title="Make Investment"
            onClick={() => {
              this.props.navigation.navigate('Make Investment');
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={{color: 'white', alignSelf: 'center'}}> CrystalFx </Text>
          <Button
            title="Make Investment"
            onClick={() => {
              alert('CrystalFx Investment');
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={{color: 'white', alignSelf: 'center'}}> RubyFx </Text>
          <Button
            title="Make Investment"
            onClick={() => {
              alert('Ruby Investment');
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={{color: 'white', alignSelf: 'center'}}> GoldenFx </Text>
          <Button
            title="Make Investment"
            onClick={() => {
              alert('GoldenFx Investment');
            }}
          />
        </View>

        <View style={styles.container}>
          <Text style={{color: 'white', alignSelf: 'center'}}> RoyalFx </Text>
          <Button
            title="Make Investment"
            onClick={() => {
              alert('RoyalFx Investment');
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.fullWidth / 1.4,
    width: dimensions.fullWidth / 1.2,
    backgroundColor: colors.primary,
    margin: padding.sm,
    justifyContent: 'flex-end',
  },
});

export default withNavigation(investments);
