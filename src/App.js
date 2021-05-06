//react hooks
import { useState } from 'react';
//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
//import router
import { Switch, Route, useLocation } from 'react-router-dom';
//framer motion
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutMe />
          </Route>
          <Route path='/projects' exact>
            <MyProjects />
          </Route>
          <Route path='/projects/:id' exact>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactMe />
          </Route>
          <Route path='/*'>
            <ErrorPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
