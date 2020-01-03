import { Router } from 'express';
import { check, authenticate, login, signup } from '../src/middlewares';
import { missingAction } from '../configs/errorsConfig';

export default Router().post('/', (req, res, next) => {
	try {
		const { action } = req.body;
		if (!action) next(missingAction);
		else if (action === 'authenticate') authenticate(req, res, next);
		else if (action === 'check') check(req, res, next);
		else if (action === 'login') login(req, res, next);
		else if (action === 'logout') req.logout();
		else if (action === 'signup') signup(req, res, next);
		else next(missingAction);
	} catch (err) {
		console.log(err);
	}
});
