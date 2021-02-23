import logo from './logo.svg';
import './App.css';
import CitiesList from './components/CitiesList/CitiesList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PointsOfInterest from './components/PointsOfInterest/PointsOfInterest';
import PointOfInterestDetails from './components/PointOfInterestDetails/PointOfInterestDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/city/:cityId/pointsofinterest/:pointsOfInterestId'>
              <PointOfInterestDetails />
            </Route>
            <Route path='/city/:cityId/pointsofinterest'>
              <PointsOfInterest />
            </Route>
            <Route path='/'>
              <CitiesList />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
