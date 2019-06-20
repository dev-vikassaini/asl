import React, { Component } from "react";
import { AppContainer } from "./views/HomeScreen";

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {

  }
  render() {
    return <AppContainer />;
  }
}

