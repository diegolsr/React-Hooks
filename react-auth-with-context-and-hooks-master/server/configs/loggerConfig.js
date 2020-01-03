import morgan from 'morgan';
import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
	transports: [
		new transports.File({
			level: 'info',
			filename: './logs/info.log',
			json: true,
			maxsize: 5242880,
			maxFiles: 5,
			colorize: false
		})
	],
	exceptionHandlers: [
		new transports.File({ filename: './logs/exceptions.log' })
	],
	exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new transports.Console({
			format: format.simple()
		})
	);
}

export default app => {
	app.use(
		morgan('combined', {
			stream: (logger.stream = {
				write: message => {
					logger.info(message);
				}
			})
		})
	);
};
