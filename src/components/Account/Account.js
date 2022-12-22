import React from 'react';
import './Account.scss';
import { useParams } from 'react-router-dom';

const Account = () => {
	let email = JSON.parse(localStorage.getItem('active-account'));

	const storedAccount = JSON.parse(localStorage.getItem('account'));
	let target = null;
	if (storedAccount.some((acc) => acc.email === email)) {
		let targetId = storedAccount.filter((acc) => {
			return acc.email === email;
		});
		target = targetId[0];
		console.log(target);
	}

	return <div className='account'>This is a account page</div>;
};

export default Account;
