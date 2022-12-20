import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './SuccesSignUp.scss';
import Successmessage from './Successmessage';
import ErrorMessage from './ErrorMessage';
import Home from '../Home/Home';

const SuccessSignUp = () => {
	let { email } = useParams();
	const storedAccount = JSON.parse(localStorage.getItem('account'));

	let targetName = null;

	if (storedAccount.some((acc) => acc.email === email)) {
		targetName = storedAccount.filter((acc) => {
			return acc.email === email;
		});
	}

	return (
		<div className='successfulSignup'>
			{targetName ? (
				<Successmessage targetName={targetName} />
			) : (
				<ErrorMessage />
			)}

			<NavLink to='/' className='link'>
				Log Out
			</NavLink>
		</div>
	);
};

export default SuccessSignUp;
