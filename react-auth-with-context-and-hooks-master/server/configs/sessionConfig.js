import expressSession from 'express-session';
import connectMongo from 'connect-mongo';
import { storeConnection } from './mongooseConfig';

const Store = connectMongo(expressSession);

export default app => {
	app.use(
		expressSession({
			secret: process.env.SESSION_SECRET,
			resave: true,
			saveUninitialized: true,
			store: new Store(storeConnection)
		})
	);
};
