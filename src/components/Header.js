import React from 'react';
import { Link } from 'react-router-dom';
import {  AmplifySignOut  } from '@aws-amplify/ui-react';
import { AuthState } from '@aws-amplify/ui-components';

const Header = (props) => {
    
    return (
        <header className="main-head">
            <nav>
                <ul><Link to="/">
                    <li id="house"> 
                    </li>
                    </Link>
        
                    <Link to="/books">
                    <li id="info">
                    </li>
                    </Link>
                    
                    <Link to="/sign/:user" >
                    <li id="profile">                        
                    </li>
                    </Link>
                    <Link to="/sign/:user">
                    {props.authState === AuthState.SignedIn  ?<AmplifySignOut id="logout"/> : <div id="login"></div>}
                    </Link>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
