import React, {Component} from 'react';
import Main from './app/navigation/router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Main />;
  }
}
