import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Globalstyle />
          <GlobalIconStyle />
          <Header />
          <div>
            hello
          </div>
        </Provider>
    );
  }
}

export default App;
