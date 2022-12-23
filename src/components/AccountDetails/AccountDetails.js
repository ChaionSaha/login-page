import React from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './AccountDetails.scss';

const AccountDetails = () => {
	let target = getActiveAccount();
	console.log(target);
	return (
		<div className='account-details'>
			<div className='image'>
				<h1>Hi</h1>
			</div>
			<div className='details'>
				<p>
					<span>Name: </span> <span>{target.name}</span>
				</p>
				<p>
					<span>Email: </span> <span>{target.email}</span>
				</p>
			</div>
		</div>
	);
};

export default AccountDetails;
