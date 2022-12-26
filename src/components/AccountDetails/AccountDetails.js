import React, { useEffect } from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './AccountDetails.scss';

const AccountDetails = () => {
	let target = getActiveAccount();
	let img;
	let activeAccount = JSON.parse(localStorage.getItem('active-account'));

	let storedImg = JSON.parse(localStorage.getItem(`img`));
	useEffect(() => {
		img = storedImg[activeAccount];
	}, [storedImg]);

	return (
		<div className='account-details'>
			<div className='image'>
				<img src={img} alt='Profile' />
			</div>
			<div className='details'>
				<p>
					{target.name} {target.lastName}
				</p>
				<p>{target.email}</p>
				<p>{target.company}</p>
				<p>{target.phone}</p>
			</div>
		</div>
	);
};

export default AccountDetails;
