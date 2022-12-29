import React from 'react';

import './SuccesSignUp.scss';
import Successmessage from './Successmessage';
import ErrorMessage from './ErrorMessage';

const SuccessSignUp = () => {
	let email = JSON.parse(localStorage.getItem('active-account'));
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
		</div>
	);
};

export default SuccessSignUp;
