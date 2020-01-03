import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { UserContext } from './context/userContext';
import { authenticate, signup, login } from './actions/actions';
import StyledContainer from './components/StyledContainer';
import NavBar from './components/NavBar';
import Login from './components/LoginForm';
import Signup from './components/SingupForm';

export default function Router() {
	const [userState, userDispatch] = useContext(UserContext);
	useEffect(() => {
		async function fetchUser() {
			const userDoc = await authenticate();
			if (userDoc) {
				userDispatch({
					type: 'SET_USER',
					payload: userDoc
				});
			}
			return [];
		}
		fetchUser();
	}, [userDispatch]);
	return (
		<BrowserRouter>
			<NavBar user={userState.user !== null} />
			{userState.user ? <UserView /> : <PublicView />}
		</BrowserRouter>
	);
}

const UserView = () => (
	<Switch>
		<Route
			exact
			path="/"
			render={props => (
				<StyledContainer {...props} title="User Home">
					<div>User Home Placeholder</div>
				</StyledContainer>
			)}
		/>
		<Route path="*" render={() => <Redirect to="/" />} />
	</Switch>
);

const PublicView = () => (
	<Switch>
		<Route
			exact
			path="/"
			render={props => (
				<StyledContainer {...props} title="Public Home">
					<div>Public Home Placeholder</div>
				</StyledContainer>
			)}
		/>
		<Route
			exact
			path="/login"
			render={props => (
				<StyledContainer {...props} title="Login">
					<Login handleLogin={loginData => login(loginData)} />
				</StyledContainer>
			)}
		/>
		<Route
			exact
			path="/signup"
			render={props => (
				<StyledContainer {...props} title="Signup">
					<Signup handleSignup={signupData => signup(signupData)} />
				</StyledContainer>
			)}
		/>
		<Route path="*" render={() => <Redirect to="/" />} />
	</Switch>
);
