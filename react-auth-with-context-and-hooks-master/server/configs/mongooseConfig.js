import mongoose from 'mongoose';

export default () => {
	mongoose
		.connect(process.env.MONGODB_URI, {
			useCreateIndex: true,
			useNewUrlParser: true
		})
		.then(() => console.log(`MongoDB connected on ${process.env.MONGODB_URI}`))
		.catch(err => console.log('Error connecting to MongoDB: ', err));
};

export const storeConnection = { mongooseConnection: mongoose.connection };
