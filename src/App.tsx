import './App.css';
import MenuComponent from './Components/MenuComponent';
import {Switch,Route} from 'react-router';
import GendersIndex from './Components/GendersIndex';
import {BrowserRouter} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
function App() {
  
  

  return (
    <>
      <BrowserRouter>      
        <MenuComponent />
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/genders">
              <GendersIndex></GendersIndex>
            </Route>
          </Switch>
        </div>    
      </BrowserRouter> 
    </>    
  );
}

export default App;
