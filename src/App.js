import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
