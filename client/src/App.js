import './App.css';
// import HomePage from './pages/HomePage';
import { HomePage, MovieDetailPage } from './pages';
import { Provider } from "react-redux"
import { Switch, Route } from "react-router-dom"
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/detail/:idMovie">
          <MovieDetailPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
