import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}>

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
