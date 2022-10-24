import { Routes as Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' element={ <Dashboard /> }></Route>
    </Switch>
  );
};
