import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Resources from './components/Resources/Resources.js';
import Home from './components/Home/Home.js';
import HeaderSub from './components/HeaderSub/HeaderSub.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSub />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
