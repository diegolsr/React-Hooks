import bcrypt from 'bcrypt';
import User from '../models/user';
import { logger } from '../configs/loggerConfig';

const encrypt = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const sanitize = userDoc => {
	userDoc.password = undefined;
	userDoc.__v = undefined;
	return userDoc;
};

export const send = (userDoc, res) => res.status(200).json(sanitize(userDoc));

export const findByEmail = email =>
	User.findOne({ email: email })
		.then(user => user)
		.catch(err => {
			logger.log(err);
			return err;
		});

export const findByUsername = username =>
	User.findOne({ username: username })
		.then(user => user)
		.catch(err => {
			logger.log(err);
			return err;
		});

export const createUser = (username, password, email) =>
	User.create({
		username: username,
		password: encrypt(password),
		email: email
	})
		.then(user => user)
		.catch(err => {
			logger.log(err);
			return err;
		});
