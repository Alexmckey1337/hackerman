import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Calculator, Contacts, FAQ, Main } from '../src/pages';
import { NavBar, Footer } from 'components';
import { AuthProvider } from '../src/firebase/context';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<NavBar />
				<Switch>
					<Route exact component={Main} path="/" />
					<Route exact component={Calculator} path="/calc" />
					<Route exact component={Contacts} path="/contacts" />
					<Route exact component={FAQ} path="/faq" />
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
};

export default App;
