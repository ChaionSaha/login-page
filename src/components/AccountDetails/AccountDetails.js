import React, { useEffect } from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './AccountDetails.scss';
import defaultProfilePic from '../../img/default.png';

const AccountDetails = () => {
	let target = getActiveAccount();

	let img = null;
	let storedImg = JSON.parse(localStorage.getItem(`${target.email}`));
	if (!storedImg) img = defaultProfilePic;
	else img = storedImg;

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
