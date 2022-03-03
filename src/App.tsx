import './App.css';
import MenuComponent from './Components/MenuComponent';
import {Switch,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import routes from './route-config';
function App() {
  
  

  return (
    <>
      <BrowserRouter>      
        <MenuComponent />
        <div className='container'>
          <Switch>
           { 
            routes.map(route=> 
                <Route key={route.path} exact={route.exact} path={route.path}>
                  <route.component />
              </Route>
              )
            }           
          </Switch>
        </div>    
      </BrowserRouter> 
    </>    
  );
}

export default App;
