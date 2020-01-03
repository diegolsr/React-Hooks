import authRouter from '../routes/auth';

export default app => {
	app.use('/auth', authRouter);
};
