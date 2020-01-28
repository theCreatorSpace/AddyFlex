import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {dimensions, font, padding, colors} from '../../styles/base';
import Header from '../../components/header';
import signals from '../../mock/signals';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //function to get JSON from source
  apiCall = () => {
    return fetch((url = 'https://randomuser.me/api/'))
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {
            alert(JSON.stringify(this.state.dataSource));
          },
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    //this.apiCall() //gets JSON Data from source and stores it to state (@datasource)
  }

  handleMore = item => {
    const {navigate} = this.props.navigation;
    navigate('Details', {tradingView: item});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={signals}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.handleMore(item);
              }}>
              <View flexDirection="row" style={styles.tradingIdea}>
                <View style={styles.tradingTextContainer}>
                  <Text style={{fontSize: font.md}}>{item.title}</Text>

                  <Text
                    style={{
                      marginVertical: padding.sm,
                      fontSize: font.sm,
                      color: 'grey',
                    }}>
                    {item.tmp}
                  </Text>
                </View>

                <View style={styles.tradingImgContainer}>
                  <View style={styles.tradeImg}>
                    <Image source={{uri: item.url}} style={styles.tradeImg} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: dimensions.fullHeight,
    width: '100%',
    marginTop: 10,
    backgroundColor: colors.background,
  },
  tradingIdea: {
    width: '100%',
    height: dimensions.fullWidth / 4,
    padding: padding.sm,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.3,
  },
  tradingTextContainer: {
    width: '70%',
    height: '100%',

    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  tradingImgContainer: {
    height: '80%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tradeImg: {
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
});
