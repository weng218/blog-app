import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'
import Header from './common/header';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Globalstyle />
          <GlobalIconStyle />
          <Header />
          <div>
            hello
          </div>
        </Fragment>
    );
  }
}

export default App;
