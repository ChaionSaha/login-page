import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import Login from '../Login.js/Login';

const Home = () => {
	return (
		<div className='home'>
			<h1>Hi!</h1>
			<Login></Login>
			<button className='link login'>Login</button>
			<p>
				New Here? &nbsp;
				<NavLink to='/signup' className='link signup'>
					Sign Up
				</NavLink>
			</p>
		</div>
	);
};

export default Home;
