import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './routerConfig'
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) =>
          <RouteWithSubRoutes key={index} {...route} />
        )}
      </Switch>
    </Router>
  );
};
function RouteWithSubRoutes(route) {
  return (
    <>
      <Route
        exact={route.exact}
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </>
  );
}
export default AppRouter;