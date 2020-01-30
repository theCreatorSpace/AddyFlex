import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../components/header';
import HeaderInfo from '../../components/headerInfo';
import data from '../../mock/data';
import {
  dimensions,
  heightScale,
  padding,
  colors,
  font,
} from '../../styles/base';
import Investment from '../../components/investmentInfo';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleMore = () => {
    const {item} = this.props;
    const {navigate} = this.props.navigation;
    navigate('Investment Breakdown', {investmentInfo: item});
  };
  render() {
    return (
      <View>
        <Header title="Username" />
        <HeaderInfo style={styles.headerInfo} />
        <Text
          style={{
            fontSize: font.md,
            color: colors.grey,
            paddingLeft: padding.sm,
            paddingTop: padding.md,
            fontWeight: font.bold,
          }}>
          My Investments
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this.handleMore(item);
              }}>
              <Investment
                plan={item.plan}
                duration={item.duration}
                status={item.status}
                capital={item.capital}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: padding.lg,
  },
  header: {
    height: heightScale.header,
  },
  headerInfo: {
    marginBottom: padding.md,
  },
});
