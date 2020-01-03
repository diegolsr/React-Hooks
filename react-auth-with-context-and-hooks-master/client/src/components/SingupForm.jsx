import { serverCheck } from '../actions/actions';
import { Form, Input, Button, FieldWrapper } from './generic/FormComponents';
import { UserContext } from '../context/userContext';
import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import validator from '../validation/formValidators';

const formState = {
	error: null,
	valid: false
};

const formValues = {
	email: { valid: null, value: '', error: '', success: '' },
	password: { valid: null, value: '', error: '', success: '' },
	username: { valid: null, value: '', error: '', success: '' },
	verifyPassword: { valid: null, value: '', error: '', success: '' }
};

const Signup = ({ history, handleSignup }) => {
	const [state, setState] = useState(formState),
		[values, setValues] = useState(formValues);
	const { email, username, password, verifyPassword } = values,
		{ valid, error } = state,
		userDispatch = useContext(UserContext)[1],
		handleChange = event => signupChangeHandler(event),
		handleSubmit = event =>
			signupSubmitHanler(event).then(res =>
				userDispatch({ type: 'SET_USER', payload: res.data })
			);
	return (
		<Form handleSubmit={event => handleSubmit(event)}>
			{error && <p className="is-danger">{error}</p>}
			<FieldWrapper>
				<Input
					errorMsg={username.error}
					handleChange={event => handleChange(event)}
					icon="user"
					name="username"
					required={true}
					rounded={true}
					successMsg={username.success}
					type="text"
					valid={username.valid}
					value={username.value}
				/>
				<Input
					errorMsg={email.error}
					handleChange={event => handleChange(event)}
					icon="enveloped"
					name="email"
					required={true}
					rounded={true}
					successMsg={email.success}
					type="email"
					valid={email.valid}
					value={email.value}
				/>
			</FieldWrapper>
			<FieldWrapper flex={true} justify="space-evenly">
				<Input
					errorMsg={password.error}
					grow="1"
					handleChange={event => handleChange(event)}
					icon="lock"
					name="password"
					required={true}
					rounded={true}
					successMsg={password.success}
					type="password"
					valid={password.valid}
					value={password.value}
				/>
				<Input
					disabled={!password.value || !password.valid}
					errorMsg={verifyPassword.error}
					grow="1"
					handleChange={event => handleChange(event)}
					icon="lock"
					name="verifyPassword"
					required={true}
					rounded={true}
					successMsg={verifyPassword.success}
					type="password"
					valid={verifyPassword.valid}
					value={verifyPassword.value}
				/>
			</FieldWrapper>
			<hr />
			<FieldWrapper flex={true} justify="space-evenly">
				<Button
					color="info"
					onClick={() => history.push('/')}
					rounded={true}
					text="Back"
				/>
				<Button
					color="success"
					disabled={!valid}
					rounded={true}
					text="Signup"
					type="submit"
				/>
			</FieldWrapper>
		</Form>
	);

	function signupSubmitHanler(event) {
		event.preventDefault();
		return handleSignup({
			email: email.value,
			password: password.value,
			username: username.value
		}).catch(error => {
			setState({
				error: error.message,
				valid: false
			});
		});
	}

	function signupChangeHandler(event) {
		const { value, name } = event.target;
		if (!value) {
			setState({
				error: null,
				valid: false
			});
			setValues({
				[name]: {
					error: '',
					success: '',
					valid: null,
					value: ''
				},
				...values
			});

			return;
		}
		let result =
			name !== 'verifyPassword'
				? validator(name, value)
				: validator(name, value, password.value);
		if (result.valid && (name === 'username' || name === 'email')) {
			result = checkAvailability(value, name, result);
		}
		setValues({
			[name]: {
				...result,
				value
			},
			...state
		});
		const validity =
			!email.valid ||
			!password.valid ||
			!username.valid ||
			!verifyPassword.valid
				? true
				: false;
		setState({
			valid: validity,
			...state
		});

		async function checkAvailability(value, name, result) {
			if (name === 'username' || name === 'email') {
				const check = await serverCheck(name, value);
				if (check) {
					result.success =
						name === 'username'
							? 'username is available'
							: 'email available';
				} else {
					result.error =
						name === 'username'
							? 'username unavailable'
							: 'email unavailable';
					result.valid = false;
				}
			}
			return result;
		}
	}
};

Signup.propTypes = {
	history: PropTypes.object,
	handleSignup: PropTypes.func.isRequired
};

export default Signup;
