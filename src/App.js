import './App.css';
import Login from './pages/Auth/Login';
import { Redirect, Switch } from 'react-router-dom';
import { ProtectedRoute, UnprotectedRoute } from './route/routeCheck';
import { HOME_PATH, LOGIN_PATH } from './route/routePaths';
import Home from './pages/Home';
import { connect } from 'react-redux';

function App({ user }) {
  return (
    <Switch>
      <UnprotectedRoute
        path={LOGIN_PATH}
        component={Login}
        loggedInPath={HOME_PATH}
        exact
      />
      <ProtectedRoute path={HOME_PATH} exact component={Home} />
      <Redirect to='/' />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
