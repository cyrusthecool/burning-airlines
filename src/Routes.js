import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import FAQ from './components/FAQ';
import App from './components/App';


const Routes = (
  <Router>
    <div>
      {/* <Route exact path="/jose" user="7" component={ App } /> */}
      <Route exact path="/jose" render={props => <App user_id="7" {...props} />} />
      <Route exact path="/maddi" render={props => <App user_id="8" {...props} />} />
      <Route exact path="/craigsy" render={props => <App user_id="9" {...props} />} />
      {/* <Route exact path="/abc" render={props => <TestWidget someProp="2" {...props} />} /> */}
      {/* <Route exact path="/faq" component={ FAQ } /> */}
    </div>
  </Router>
)

export default Routes;
