import React , {useState,useEffect} from 'react'
import "./modal.scss";
import { AmplifyAuthenticator, AmplifyContainer , AmplifySignOut} from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import {useParams} from "react-router"
Amplify.configure(awsconfig);

export const Second = ({CallbackauthState, Callbackuser}) => {
    const {name} = useParams()
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState) ;
            setUser(authData);
            CallbackauthState(nextAuthState);
            Callbackuser(authData)
        });
    }, []);
    return (
        <>
        <div id= {authState === "signedin" && user ?"homet": "home"}>
            <div className="inter">
        {console.log("authState",authState)}
        {authState === "signedin" && user ?
        
            <div>
             <h1>Привет {user.username}</h1>
            <p>
            — Иногда мне кажется, что мы самая плохая семья в городе.
            <br/>
            — Может нам стоит переехать в город побольше?
            </p>
            </div>
			
             
             
        :
           
           <AmplifyAuthenticator />
            
    }
        </div>
        </div>
        </>
    )
}
export default Second;