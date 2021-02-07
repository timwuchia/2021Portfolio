
import './App.scss';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function App() {
  let location = useLocation();
  return (
      <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" render={Home} />
          <Route exact path="/works" render={Works} />
          <Route exact path="/contact" render={Contact} />
        </Switch>
        </AnimatePresence>
      </>
  );
}

export default App;
