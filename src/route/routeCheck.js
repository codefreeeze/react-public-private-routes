import { Route, Redirect } from 'react-router-dom';
import { store } from '../redux/store';
import { LOGIN_PATH } from './routePaths';

export const UnprotectedRoute = ({
  loggedInPath,
  component: Component,
  ...rest
}) => {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return (
    <Route
      {...rest}
      render={(props) => {
        return !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: loggedInPath,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return (
    <Route
      {...rest}
      render={(props) => {
        return !token ? (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};
