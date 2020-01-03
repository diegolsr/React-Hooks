import passport from 'passport';
import { createUser, findByEmail, findByUsername, send } from './helpers';
import {
	emailInUse,
	missingData,
	unauthorized,
	usernameInUse
} from '../configs/errorsConfig';

export const check = async (req, res, next) => {
	const { type, value } = req.body;
	try {
		const result =
			type === 'username'
				? await findByUsername(value)
				: await findByEmail(value);
		if (!result) {
			res.status(200).json({
				true: 1
			});
		} else
			res.status(200).json({
				true: 0
			});
	} catch (err) {
		next(err);
	}
};

export const authenticate = (req, res, next) => {
	try {
		req.isAuthenticated() ? send(req.user, res) : next(unauthorized);
	} catch (err) {
		next(err);
	}
};

export const login = (req, res, next) =>
	passport.authenticate('local', (err, user) =>
		err
			? next(err)
			: !user
				? next(unauthorized)
				: req.login(user, err => (err ? next(err) : send(req.user, res)))
	)(req, res, next);

export const signup = async (req, res, next) => {
	const { username, email, password } = req.body;
	if (!email || !password || !username) next(missingData);
	else
		try {
			let foundUser = await findByEmail(email);
			if (foundUser) next(emailInUse);
			else {
				foundUser = await findByUsername(username);
				if (foundUser) next(usernameInUse);
				else {
					const createdUser = await createUser(
						email,
						password,
						username
					);
					req.login(createdUser, err =>
						err ? next(err) : send(createdUser, res)
					);
				}
			}
		} catch (err) {
			next(err);
		}
};
