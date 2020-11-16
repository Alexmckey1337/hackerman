import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Calculator, Contacts, FAQ, Main } from "../src/pages";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact component={Main} path="/" />
				<Route exact component={Calculator} path="/calc" />
				<Route exact component={Contacts} path="/contacts" />
				<Route exact component={FAQ} path="/faq" />
			</Switch>
		</Router>
	);
};

export default App;
