import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './components/Layout/Header'; import './App.css';
import CreateObra from './components/CreateObra'
import ObraDetails from './components/ObraDetails'
import Obras from './components/Obras';
import Home from './components/Home';
import UsersState from './context/Users/UsersState';
import ObrasState from './context/Obras/ObrasState';

//import PublicRoute from './components/Routes/PublicRoute'
//import AuthRoute from './components/Routes/AuthRoute';
//import PrivateRoute from './components/Routes/PrivateRoute'

//import Profile from './components/User/Profile';


function App() {
  return (
    <>
      <ObrasState>
        <UsersState>
          <Router>
            <Header />

            <Switch>

              {/*Públicas*/}
              <Route exact path="/obras/crear" component={CreateObra} />
              <Route exact path="/obras/:id" component={ObraDetails} />
              <Route exact path="/obras" component={Obras} />
              <Route exact path="/" component={Home} />

            </Switch>
          </Router>
        </UsersState>
      </ObrasState>
    </>
  );
}

export default App;
