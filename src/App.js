import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  //Route
} from 'react-router-dom'
//basic
import Header from './components/Layout/Header';
import Home from './components/Home';
import AboutUs from './components/About-us'
import Contacto from './components/Contacto'
//user
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/User/Profile';
//obras
import CreateObra from './components/CreateObra'
import ObraDetails from './components/ObraDetails'
import Obras from './components/Obras';
//states
import UsersState from './context/Users/UsersState';
import ObrasState from './context/Obras/ObrasState';
//rutas
import AuthRoute from './components/Routes/AuthRoute';
import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'



function App() {
  return (
    <>

      <ObrasState>
        <UsersState>
          <Router>
            <Header />
            <Switch>

              {/*priv*/}
              <PrivateRoute exact path="/perfil" component={Profile} />

              {/*auth*/}
              <AuthRoute exact path="/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/register" component={Signup} />

              {/*Públicas*/}
              <PublicRoute exact path="/contacto" component={Contacto} />
              <PublicRoute exact path="/about-us" component={AboutUs} />
              <PublicRoute exact path="/obras/crear" component={CreateObra} />
              <PublicRoute exact path="/obras/:id" component={ObraDetails} />
              <PublicRoute exact path="/obras" component={Obras} />
              <PublicRoute exact path="/" component={Home} />

            </Switch>
          </Router>
        </UsersState>
      </ObrasState>
    </>
  );
}

export default App;
