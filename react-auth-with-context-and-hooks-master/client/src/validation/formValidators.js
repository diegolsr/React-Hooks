import zxcvbn from 'zxcvbn';
import { isEmail } from 'validator';

const passwordValidator = value => {
	const zxcvbnOutput = zxcvbn(value),
		valid = zxcvbnOutput.score > 2,
		error = valid ? null : zxcvbnOutput.feedback,
		success = !valid
			? null
			: zxcvbnOutput.score === 3
				? 'Medium strength password'
				: zxcvbnOutput.score === 4
					? 'Strong password'
					: 'Very strong password';
	return { valid, error, success };
};

const verifyPasswordValidator = (value, compareValue) => {
	const valid = value === compareValue ? true : false,
		error = !valid ? 'passwords mismatch' : '',
		success = valid ? 'passwords match' : '';
	return { valid, error, success };
};

const emailValidator = value => {
	let valid = isEmail(value),
		error = !valid ? 'invalid email' : '',
		success = '';
	return { valid, error, success };
};

const userNameValidator = value => {
	let valid = /^[a-zA-Z0-9]+$/.test(value),
		error = !valid ? 'Username must contain letters and numbers only' : '',
		success = '';
	return { valid, error, success };
};

const validators = {
	password: passwordValidator,
	verifyPassword: verifyPasswordValidator,
	email: emailValidator,
	username: userNameValidator
};

const validator = (name, value, compareValue = null) =>
	!compareValue
		? validators[name](value)
		: validators[name](value, compareValue);

export default validator;
