import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signin" exact>
          <SigninPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
