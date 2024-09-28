import logo from './logo.svg';
import './App.css';


import { useEffect } from 'react';
import {gapi} from 'gapi-script';

import Login from './components/login';
import Logout from './components/logout';
const ClientID = "784337163663-1arov5q17k9gabh2vd8fpupuf75u9t1r.apps.googleusercontent.com";

function App() {
  useEffect(()=>{
     function start(){
      gapi.client.init({
      clientID:ClientID,
      scope:""
     })
  };
  gapi.load('client.auth2',start);
});
  return (
    <div className="App">
    
     <Login/>
      <Logout/>
    </div>
  );
}

export default App;
