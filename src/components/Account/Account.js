import React from 'react';
import { useParams } from 'react-router-dom';

const Account = () => {
	let { id } = useParams();
	console.log(id);
	const storedAccount = JSON.parse(localStorage.getItem('account'));
	let target = null;
	if (storedAccount.some((acc) => acc.id === id)) {
		let targetId = storedAccount.filter((acc) => {
			return acc.id === id;
		});
		target = targetId[0];
		console.log(targetId);
	}

	return <div>This is a account page</div>;
};

export default Account;
