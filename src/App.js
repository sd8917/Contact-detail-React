import './App.css';
import ContactCard from './Component/ContactCard';
import Topbar from './Component/Topbar';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import Career from './Component/Career';
import Privacy from './Component/Privacy';
import Footer from './Component/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="main">
      <Router >
      <Topbar />

      <Switch>

        <Route exact path="/"  component={ContactCard } />
        <Route  path="/contact" component={ContactUs} />
        <Route  path="/about" component={About} />
        <Route  path="/career" component={Career} />
        <Route  path="/privacy" component={Privacy} />

      </Switch>

      <Footer />
     

      </Router>
    </div>


  );
}

export default App;
