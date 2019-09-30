import React, { Component } from "react";
import { AppContainer } from "./views/HomeScreen/index";
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import allReducers from './reducers/index';

const store = createStore(allReducers);

export interface Props {
  Id: string
  FirstName: string,
  LastName: string,
  Phone: string,
  Email: string,
  IsPrime: boolean,
  EmailVarified: boolean,
  PhoneVarified: boolean,
  Code: string,
  isLoggedIn: boolean
}

export interface StateInterface {
  isLoggedIn: boolean
}

class App extends Component<Props, StateInterface> {
  constructor(props: Props) {
    super(props);
    this.state = { isLoggedIn: false }
  }

  render() {
    return <Provider store={store}><AppContainer /></Provider>
  }
}

export default App;
