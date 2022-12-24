import React, { useEffect, useState } from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './EditAccount.scss';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

const EditAccount = () => {
	let target = getActiveAccount();

	const [firstName, setFirstName] = useState(target.name);
	const [lastName, setLastName] = useState(target.lastName);
	const [company, setCompany] = useState(target.company);
	const [phone, setPhone] = useState(target.phone);
	const [img, setImg] = useState();

	const changeDetails = () => {
		let email = JSON.parse(localStorage.getItem('active-account'));
		let storedAccount = JSON.parse(localStorage.getItem('account'));
		let storedImg = {};

		if (localStorage.getItem('img')) {
			storedImg = JSON.parse(localStorage.getItem('img'));
		}
		target.name = firstName;
		target.lastName = lastName;
		target.company = company;
		target.phone = phone;

		if (img) {
			const reader = new FileReader();
			reader.readAsDataURL(img);
			reader.onload = (e) => (target.img = reader.result);
			console.log(target.img);
			delete storedImg[email];
			storedImg[email] = target.img;
			localStorage.setItem('img', JSON.stringify(storedImg));
		}

		let index = storedAccount.findIndex((acc) => {
			return acc.email === email;
		});

		storedAccount.splice(index, 1);
		storedAccount = [...storedAccount, target];
		localStorage.setItem('account', JSON.stringify(storedAccount));

		<Navigate to='/account/details'></Navigate>;
	};

	return (
		<div className='edit'>
			<p>
				<span>Email: </span>
				<span>{target.email}</span>
			</p>
			<div className='details'>
				<div className='name'>
					<div className='editBox'>
						<label htmlFor='firstName'>First Name: </label>
						<input
							type='text'
							id='firstName'
							placeholder={target.name}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='editBox'>
						<label htmlFor='lastName'>Last Name: </label>
						<input
							type='text'
							id='lastName'
							placeholder={target.lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>
				<div className='phone-details'>
					<div className='editBox'>
						<label htmlFor='company'>Company: </label>
						<input
							type='text'
							id='company'
							placeholder={target.company}
							onChange={(e) => setCompany(e.target.value)}
						/>
					</div>
					<div className='editBox'>
						<label htmlFor='phone'>Phone: </label>
						<input
							type='text'
							id='phone'
							placeholder={target.phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className='editBox'>
				<label htmlFor='image'>Image: </label>
				<input
					type='file'
					id='image'
					onChange={(e) => setImg(e.target.files[0])}
				/>
			</div>
			<button onClick={() => changeDetails()}>Change Details</button>
		</div>
	);
};

export default EditAccount;
