import React, { useState } from 'react';
import './Login.scss';
import eyeLogo from '../../img/eye.png';
import eyeLogoHidden from '../../img/eye-hidden.png';

const Login = ({ setEmail, setPass }) => {
	const [passShow, setPassShow] = useState(false);
	return (
		<div className='form'>
			<div className='inputBox emailBox'>
				<input
					type='email'
					id='email'
					placeholder=' '
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<span>Email</span>
			</div>
			<div className='inputBox passwordBox'>
				<input
					type={passShow ? 'text' : 'password'}
					id='password'
					placeholder=' '
					required
					onChange={(e) => setPass(e.target.value)}
				/>
				<span>Password</span>
				<img
					src={passShow ? eyeLogoHidden : eyeLogo}
					className='passwordSVG'
					id='passwordView'
					alt='showpassword'
					onClick={() => setPassShow(!passShow)}
				/>
			</div>
		</div>
	);
};

export default Login;
