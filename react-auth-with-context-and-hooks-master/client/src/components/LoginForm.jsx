import React, { useState } from 'react';
import { Form, Input, Button } from './generic/FormComponents';

export default function LoginForm({ cb, history }) {
	const [email, setEmail] = useState(''),
		[name, setName] = useState(''),
		[password, setPassword] = useState(''),
		[verify, setVerify] = useState(''),
		[errors, setErrors] = useState([]),
		handleSubmit = event => {
			event.preventDefault();
			cb({
				name,
				email,
				password
			});
			setEmail('');
			setPassword('');
			setErrors([]);
		};

	return (
		<Form cb={event => handleSubmit(event)} errors={errors}>
			<Input
				type="text"
				name="name"
				value={name}
				cb={setName}
				pattern="^[a-zA-Z0-9]+$"
				rounded={true}
			/>
			<Input type="email" value={email} cb={setEmail} rounded={true} />
			<div className="field is-flex">
				<div style={{ flexGrow: 1 }}>
					<Input
						type="password"
						value={password}
						cb={setPassword}
						rounded={true}
					/>
				</div>
				<div style={{ flexGrow: 1 }}>
					<Input
						type="password"
						name="verify"
						value={verify}
						cb={setVerify}
						pattern={password}
						rounded={true}
					/>
				</div>
			</div>
			<hr />
			<div className="field level">
				<div className="level-left">
					<Button
						text="Back"
						onClick={() => history.push('/')}
						color="warning"
						rounded={true}
					/>
				</div>
				<div className="level-right">
					<Button
						type="submit"
						text="Signup"
						rounded={true}
						color="success"
						style={{ color: 'pink' }}
					/>
				</div>
			</div>
		</Form>
	);
}
