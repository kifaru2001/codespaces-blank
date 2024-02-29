import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Leaderboard from './views/leaderboard'
import Staking from './views/staking'
import Join from './views/join'
import NotFound from './views/not-found'
import Roadmap from './components/roadmap'
import Foot from './components/Footer'
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ThirdwebProvider } from '@thirdweb-dev/react'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(CoreBlockchain, {
  clientId: "cc3b7731ad9935953abe4a625abea530",
});



const App = () => {
  return (
    <>
   
    <Router>
    <ThirdwebProvider
      activeChain={ CoreBlockchain }
      clientId="678d5b0199cde588796872ea22804505" // You can get a client id from dashboard settings
    >
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Leaderboard} exact path="/leaderboard" />
        <Route component={Staking} exact path="/staking" />
        <Route component={Join} exact path="/join" />
        <Route component={Roadmap} exact path="/Roadmap" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      </ThirdwebProvider>
    </Router>
    <Foot />
 
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
