import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import ArticleListing from "./Pages/ArticleListing";
import Article from "./Pages/Article";


function App() {
	return (
	<Router>
	  <Switch>

	     <Route path="/article/:id">
	       <Article/>
	     </Route>

	     <Route path="/ArticleListing/:id">
	        <ArticleListing/>
	     </Route>

	  </Switch>
	</Router>
	);
}

export default App;