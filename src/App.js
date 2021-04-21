//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';
import MovieDetail from './components/MovieDetail';
//import router
import { Switch, Route, useLocation } from 'react-router-dom';
//framer motion
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <MyProjects />
          </Route>
          <Route path='/projects/:id'>
            <MovieDetail />
          </Route>
          <Route path='*'>
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
