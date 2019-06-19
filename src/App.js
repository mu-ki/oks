import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from "./router"

import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
// import App4 from "./pages/App4";
// import App5 from "./pages/App5";
// import App from "./pages/App";
// import App from "./pages/App";
// import App from "./pages/App";
// import App from "./pages/App";
// import App from "./pages/App";
// import App from "./pages/App";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={App1} exact />
            <Route path="/App2" component={App2} />
            <Route path="/App3" component={App3} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 