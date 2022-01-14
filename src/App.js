import './App.css';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
