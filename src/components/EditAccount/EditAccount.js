import React, { useState } from 'react';
import { getActiveAccount } from '../LocalStorage/LocalStorage';
import './EditAccount.scss';

const EditAccount = () => {
	let target = getActiveAccount();
	const [firstName, setFirstName] = useState(target.name);
	const [lastName, setLastName] = useState(target.lastName);
	const [company, setCompany] = useState(target.company);
	const [phone, setphone] = useState(target.phone);
	const [img, setImg] = useState();

	console.log(firstName, lastName, company, phone);

	return (
		<div className='edit'>
			<p>
				<span>Email: </span>
				<span>{target.email}</span>
			</p>
			<div className='details'>
				<div className='name'>
					<div className='editBox'>
						<p>First Name: </p>
						<input type='text' id='firstName' value={target.name} />
					</div>
					<div className='editBox'>
						<p>Last Name: </p>
						<input
							type='text'
							id='lastName'
							value={target.lastName}
						/>
					</div>
				</div>
				<div className='phone-details'>
					<div className='editBox'>
						<p>Company: </p>
						<input
							type='text'
							id='company'
							value={target.company}
						/>
					</div>
					<div className='editBox'>
						<p>Phone: </p>
						<input type='text' id='lastName' value={target.phone} />
					</div>
				</div>
			</div>
			<div className='editBox'>
				<p>Image: </p>
				<input type='file' id='image' />
				<button type='submit'>New Button</button>
			</div>
			<button>Change Details</button>
		</div>
	);
};

export default EditAccount;
