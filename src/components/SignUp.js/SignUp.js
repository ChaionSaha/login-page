import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import eyeLogo from '../../img/eye.png';
import eyeLogoHidden from '../../img/eye-hidden.png';

const SignUp = () => {
	const [passShow, setPassShow] = useState(false);
	return (
		<div className='signUp'>
			<h1>Hi!</h1>
			<div className='form'>
				<div className='inputBox'>
					<input type='text' id='name' placeholder=' ' required />
					<span>Name</span>
				</div>
				<div className='inputBox'>
					<input type='email' id='email' placeholder=' ' required />
					<span>Email</span>
				</div>
				<div className='inputBox'>
					<input
						type={passShow ? 'text' : 'password'}
						id='password'
						placeholder=' '
						required
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
				<div className='inputBox'>
					<input
						type='password'
						id='confirmPassword'
						placeholder=' '
					/>
					<span>Confirm Password</span>
				</div>
				<div className='buttons'>
					<button className='signUpButton'>Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
