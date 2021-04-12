//global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';
//import router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutMe />
        </Route>
        <Route path='/projects'>
          <MyProjects />
        </Route>
        <Route path='/contact'>
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
