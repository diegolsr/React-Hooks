import bcrypt from 'bcrypt';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user';
import { findByEmail } from '../src/helpers';

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password'
		},
		async (username, password, done) => {
			try {
				const user = await findByEmail(username),
					passwordMatch = bcrypt.compareSync(password, user.password);
				return !user || !passwordMatch ? done(null, false) : done(null, user);
			} catch (err) {
				return done(err);
			}
		}
	)
);

export default app => {
	app.use(passport.initialize());
	app.use(passport.session());
};
