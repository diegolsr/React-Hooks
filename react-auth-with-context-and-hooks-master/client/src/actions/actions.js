import axios from 'axios';

const auth = axios.create({
	baseURL: process.env.REACT_APP_AUTH
});

const query = obj => auth.post('/', obj);

export const login = loginData =>
	query({
		action: 'login',
		...loginData
	});

export const signup = signupData =>
	query({
		action: 'signup',
		...signupData
	});

export const logout = () =>
	query({
		action: 'logout'
	});

export const authenticate = () =>
	query({
		action: 'authenticate'
	})
		.then(res => res.data)
		.catch(() => false);

export const serverCheck = (type, value) =>
	query({
		action: 'check',
		type: type,
		value: value
	})
		.then(res => (parseInt(res.data.true) === 1 ? true : false))
		.catch(err => console.warn(err));
