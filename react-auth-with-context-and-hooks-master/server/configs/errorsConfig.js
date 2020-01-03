/*eslint no-unused-vars: 0*/
import createError from 'http-errors';

const unauthorized = createError(401, 'unauthorized'),
	emailInUse = createError(409, 'email is in use'),
	usernameInUse = createError(409, 'username is in use'),
	missingData = createError(412, 'missing required data'),
	missingAction = createError(412, 'action not specified or invalid action');

export { unauthorized, emailInUse, usernameInUse, missingData, missingAction };
export default app =>
	app.use((err, req, res, next) => {
		const status = err.status ? err.status : 500;
		res.status(status).json(err);
	});
