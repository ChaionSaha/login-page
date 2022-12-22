import React, { useState } from 'react';
import './LoginHome.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../Login.js/Login';

const LoginHome = () => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	let navigate = useNavigate();

	const emailInput = document.querySelector('.emailBox');
	const passInput = document.querySelector('.passwordBox');

	const validateLogin = () => {
		const storedAccount = JSON.parse(localStorage.getItem('account'));

		let targetName = null;
		if (storedAccount) {
			if (storedAccount.some((acc) => acc.email === email)) {
				targetName = storedAccount.filter((acc) => {
					return acc.email === email;
				});
				if (targetName[0].password === pass) {
					emailInput.classList.remove('invalid-red');
					passInput.classList.remove('invalid-red');
					navigate(`account/${targetName[0].id}`);
				} else {
					passInput.classList.add('invalid-red');
				}
			} else {
				emailInput.classList.add('invalid-red');
			}
		} else {
			emailInput.classList.add('invalid-red');
			passInput.classList.add('invalid-red');
		}
	};

	return (
		<div className='home'>
			<h1>Hi!</h1>
			<Login setEmail={setEmail} setPass={setPass}></Login>
			<button className='link login' onClick={() => validateLogin()}>
				Login
			</button>
			<p>
				New Here? &nbsp;
				<NavLink to='signup' className='link signup'>
					Sign Up
				</NavLink>
			</p>
		</div>
	);
};

export default LoginHome;
