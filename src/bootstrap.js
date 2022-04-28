import './style/main.scss';

import Home from './components/home';

import Results from './components/results';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/results' component={Home}/>
            <Route path='/results' component={Results}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
  }