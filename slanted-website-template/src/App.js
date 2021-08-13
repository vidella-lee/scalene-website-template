import './styles/App.css';
import Navbar from './components/Navbar';

import About from './pages/about-us';
import Home from './pages/home';
import Blog from './pages/blog';
import Login from './pages/login';
import Pricing from './pages/pricing';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-100 justify-content-center">
      <Navbar />

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      </div>     
    </Router>

  );
}

export default App;
