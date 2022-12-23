import React from 'react';
import './Account.scss';
import { NavLink, Outlet } from 'react-router-dom';

import {
	MapPinIcon,
	PencilSquareIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';

const Account = () => {
	let activeStyle = {
		color: '#3c4cad',
	};

	return (
		<div className='account'>
			<div className='inner'>
				<nav>
					<NavLink
						to='details'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						className='link'
					>
						<UserCircleIcon></UserCircleIcon>
					</NavLink>

					<NavLink
						to='edit'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						className='link'
					>
						<PencilSquareIcon></PencilSquareIcon>
					</NavLink>
					<NavLink
						to='address'
						style={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
						className='link'
					>
						<MapPinIcon></MapPinIcon>
					</NavLink>
				</nav>
				<div className='details'>
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Account;
