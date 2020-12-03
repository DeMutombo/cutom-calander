import {Route, Switch} from 'react-router-dom'
import CalanderDates2 from './components/CalanderDates2';
import User from './components/User';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
          <Route exact path='/' render={()=> <h2>Home page</h2>} />
          <Route exact path='/login' render={()=> <h2>Login Page</h2>} />
          <Route exact path='/user/:name' component={User} />
          <Route exact path='/calander' component={CalanderDates2}/>
          <Route exact render={()=><h2>Error NO SUCH FILES HERE </h2>}/>
      </Switch>
            
    </div>
  );
}

export default App;
