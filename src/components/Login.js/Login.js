import React from 'react';
import './Login.scss';

const Login = () => {
	return (
		<div className='form'>
			<div className='inputBox'>
				<input type='email' id='email' placeholder=' ' required />
				<span>Email</span>
			</div>
			<div className='inputBox'>
				<input type='password' id='password' placeholder=' ' required />
				<span>Password</span>
			</div>
		</div>
	);
};

export default Login;
