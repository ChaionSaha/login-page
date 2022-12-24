import React from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './AccountDetails.scss';

const AccountDetails = () => {
	let target = getActiveAccount();

	let storedImg = JSON.parse(localStorage.getItem('img'));
	let img = null;
	if (storedImg) {
		img = storedImg[target.email];
	}

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
