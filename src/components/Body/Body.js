import React from 'react';
import './Body.scss';
import logo from '../../img/img-01.png';
import { Outlet } from 'react-router-dom';

const Body = () => {
	return (
		<div className='body'>
			<main className='login-card'>
				<div className='image'>
					<img src={logo} alt='laptop' id='laptop' />
					<div className='circle-1' id='animated-icons'></div>
					<div className='circle-2' id='animated-icons'></div>
					<div className='triangle-1' id='animated-icons'></div>
					<div className='triangle-2' id='animated-icons'></div>
					<div className='square' id='animated-icons'></div>
				</div>
				<div className='login-element'>
					<Outlet></Outlet>
				</div>
			</main>
		</div>
	);
};

export default Body;
