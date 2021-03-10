import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Contacts, Main, AgentPage, MyWork } from '../src/pages';
import { NavBar, Footer } from 'components';
import { AuthProvider } from '../src/firebase/context';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<NavBar />
				<Switch>
					<Route exact component={Main} path="/" />
					<Route exact component={MyWork} path="/mywork" />
					<Route exact component={Contacts} path="/contacts" />
					<Route exact component={AgentPage} path="/adminpagesecretlink" />
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
};

export default App;
