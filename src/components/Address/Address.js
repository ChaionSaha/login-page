import React, { useState, useEffect } from 'react';
import './Address.scss';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import ShowAddress from '../ShowAddress/ShowAddress';

const Address = () => {
	const [newAddress, setAddress] = useState('');
	let savedAddress = [];
	const target = getActiveAccount();
	let email = JSON.parse(localStorage.getItem('active-account'));
	let storedAccount = JSON.parse(localStorage.getItem('account'));

	if (target.address) savedAddress = target.address;

	const addAddress = () => {
		savedAddress.push(newAddress);

		let index = storedAccount.findIndex((acc) => {
			return acc.email === email;
		});

		storedAccount[index].address = savedAddress;
		localStorage.setItem('account', JSON.stringify(storedAccount));
	};

	return (
		<div className='address'>
			<div className='input'>
				<input
					type='text'
					placeholder='Address'
					onChange={(e) => setAddress(e.target.value)}
				/>
				<button onClick={() => addAddress()}>Save</button>
			</div>
			<div className='show'></div>
		</div>
	);
};

export default Address;
