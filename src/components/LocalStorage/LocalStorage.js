const getActiveAccount = () => {
	let email = JSON.parse(localStorage.getItem('active-account'));

	const storedAccount = JSON.parse(localStorage.getItem('account'));
	let target = null;
	if (storedAccount.some((acc) => acc.email === email)) {
		let targetId = storedAccount.filter((acc) => {
			return acc.email === email;
		});
		target = targetId[0];
	}

	return target;
};

export { getActiveAccount };
