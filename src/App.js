import React ,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Second from "./pages/Second"
import { Link } from 'react-router-dom';
import {  AmplifySignOut  } from '@aws-amplify/ui-react';
import { AuthState } from '@aws-amplify/ui-components';

const App = () => {
  const [newvalue, setNewvalue] = useState();
  const [newuser, setNewuser] = useState();

  return (
    <Router>{console.log("newvalue",newvalue)}
       <header className="main-head">
        <nav>
          <ul>
            <Link to="/">
              <li id="house"> 
              </li>
              </Link>
  
              <Link to="/books">
              <li id="info">
              </li>
              </Link>
              
              <Link to={newuser?`/sign/${newuser.username}`:"/sign/:user"} >
              <li id="profile">                        
              </li>
              </Link>
              <Link to="/sign/:user">
              {newvalue === "signedin" ?<AmplifySignOut id="logout"/> : <div id="login"></div>}
            </Link> 
          </ul>
        </nav>
      </header>
      <Switch>
      <Route exact path="/" render={() =><Home />} />
      <Route  exact path="/sign" render={(props) => <Second {...props} 
      CallbackauthState={authStatecallback => setNewvalue(authStatecallback)} Callbackuser={userStatecallback => setNewuser(userStatecallback)} />} />
      <Route  path="/sign/:name" render={(props) => <Second {...props} 
      CallbackauthState={authStatecallback => setNewvalue(authStatecallback)} Callbackuser={userStatecallback => setNewuser(userStatecallback)} />}/>
      </Switch>
    </Router>
  );
}

export default App;