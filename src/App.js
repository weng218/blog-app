import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style'
import { GlobalIconStyle } from './statics/iconfont/iconfont'
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Globalstyle />
            <GlobalIconStyle />
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
    );
  }
}

export default App;
