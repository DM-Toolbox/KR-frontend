import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Resources from './components/Totals/Resources/Resources.js';
import Workers from './components/Workers/Workers.js';
import Home from './components/Home/Home.js';
import HeaderSub from './components/HeaderSub/HeaderSub.js';
import Housing from './components/Totals/Housing/Housing.js';
import CitizenHappiness from './components/Totals/CitizenHappiness/CitizenHappiness.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSub />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/workers" component={Workers} />
        <Route path="/housing" component={Housing} />
        <Route path="/citizen-happiness" component={CitizenHappiness} />
        <Route path="/auth/:type" component={Auth} />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
