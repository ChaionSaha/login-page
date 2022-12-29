import React from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './AccountDetails.scss';

const AccountDetails = () => {
	let target = getActiveAccount();

	let img = null;
	let storedImg = JSON.parse(localStorage.getItem(`${target.email}`));
	// console.log(localStorage.getItem(`${target.email}`));

	return (
		<div className='account-details'>
			<div className='image'>
				<img src={storedImg} alt='Profile' />
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
