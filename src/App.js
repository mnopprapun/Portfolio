import './App.css';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import WeatherPage from './components/pages/WeatherPage';
import NavBar from './components/NavBar';
import CalendarPage from './components/pages/CalendarPage';

function App() {
  return (
    <div className="App">
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/weather" component={WeatherPage}></Route>
          <Route path="/calendar" component={CalendarPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
