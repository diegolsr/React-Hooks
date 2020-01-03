import cors from 'cors';

export default app => {
	app.use(
		cors({
			origin: (origin, cb) => {
				cb(null, origin && origin.startsWith('http://localhost:'));
			},
			optionsSuccessStatus: 200,
			credentials: true
		})
	);
};
