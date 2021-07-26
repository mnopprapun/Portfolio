import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import Weather from './components/pages/Weather';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/weather" component={Weather}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
