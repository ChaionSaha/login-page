import React, { useState } from 'react';
import './SignUp.scss';
import eyeLogo from '../../img/eye.png';
import eyeLogoHidden from '../../img/eye-hidden.png';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [passShow, setPassShow] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState(' ');
	const [password, setPassword] = useState(' ');
	const [confirmPass, setConfirmPass] = useState(' ');
	const [canSignUp, setSignUp] = useState(false);

	let navigate = useNavigate();

	const signUpBtn = document.querySelector('#signup-btn');
	const nameInput = document.querySelector('.name');
	const emailInput = document.querySelector('.email');
	const passInput = document.querySelector('.password');
	const conPassInput = document.querySelector('.confirmPassword');

	function isValidEmail(testEmail) {
		return /\S+@\S+\.\S+/.test(testEmail);
	}

	function isValidName(testName) {
		return testName.split(' ').join('').match(/\W/gi);
	}

	function passwordMatch(testPass, testConPass) {
		return testPass === testConPass;
	}

	const validateSignUp = () => {
		if (
			!isValidEmail(email) ||
			isValidName(name) ||
			!passwordMatch(password, confirmPass)
		) {
			setSignUp(false);
			signUpBtn.classList.add('invalid');
			setTimeout(() => {
				signUpBtn.classList.remove('invalid');
			}, 400);
		} else {
			emailInput.classList.remove('invalid-red');
			nameInput.classList.remove('invalid-red');
			conPassInput.classList.remove('invalid-red');
			passInput.classList.remove('invalid-red');
			setSignUp(true);
		}

		if (!isValidEmail(email)) emailInput.classList.add('invalid-red');
		else emailInput.classList.remove('invalid-red');

		if (isValidName(name)) nameInput.classList.add('invalid-red');
		else nameInput.classList.remove('invalid-red');

		if (!passwordMatch(password, confirmPass)) {
			conPassInput.classList.add('invalid-red');
			passInput.classList.add('invalid-red');
		} else {
			conPassInput.classList.remove('invalid-red');
			passInput.classList.remove('invalid-red');
		}
	};

	if (canSignUp) {
		let savedAccount = [];
		let storedAccount = JSON.parse(localStorage.getItem('account'));
		console.log();
		let newAccount = {
			name: name,
			email: email,
			password: password,
			isActive: false,
		};

		if (storedAccount) {
			if (!storedAccount.some((acc) => acc.email === email)) {
				newAccount.id = storedAccount.length + 1;
				savedAccount = [...storedAccount, newAccount];
				localStorage.setItem('account', JSON.stringify(savedAccount));
			}
		} else {
			newAccount.id = 1;
			savedAccount.push(newAccount);
			localStorage.setItem('account', JSON.stringify(savedAccount));
		}

		localStorage.setItem(
			'active-account',
			JSON.stringify(`${newAccount.email}`)
		);
		navigate(`/success`);
		setTimeout(() => {
			navigate('/account');
		}, 1500);
	}

	return (
		<div className='signUp'>
			<h1>Hi!</h1>
			<div className='form'>
				<div className='inputBox name'>
					<input
						type='text'
						id='name'
						placeholder=' '
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<span>Name</span>
				</div>
				<div className='inputBox email'>
					<input
						type='email'
						id='email'
						placeholder=' '
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span>Email</span>
				</div>
				<div className='inputBox password'>
					<input
						type={passShow ? 'text' : 'password'}
						id='password'
						placeholder=' '
						required
						onChange={(e) => setPassword(e.target.value)}
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
				<div className='inputBox confirmPassword'>
					<input
						type={passShow ? 'text' : 'password'}
						id='confirmPassword'
						placeholder=' '
						onChange={(e) => setConfirmPass(e.target.value)}
					/>
					<span>Confirm Password</span>
				</div>
				<div className='buttons'>
					<button
						className='signUpButton'
						id='signup-btn'
						onClick={() => validateSignUp()}
					>
						Sign Up
					</button>
					<NavLink to='/' className='loginBtn'>
						Already have an account?
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
