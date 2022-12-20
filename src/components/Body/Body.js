import React from 'react';
import './Body.scss';
import logo from '../../img/img-01.png';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../SignUp.js/SignUp';
import Login from '../Login.js/Login';
import SuccessSignUp from '../SuccessSignUp/SuccessSignUp';
import Error from '../Error/Error';

const Body = () => {
	return (
		<div>
			<main className='login-card'>
				<div className='image'>
					<img src={logo} alt='laptop' />
					<div className='circle-1' id='animated-icons'></div>
					<div className='circle-2' id='animated-icons'></div>
					<div className='triangle-1' id='animated-icons'></div>
					<div className='triangle-2' id='animated-icons'></div>
					<div className='square' id='animated-icons'></div>
				</div>
				<div className='login-element'>
					<Routes>
						<Route path='/' element={<Home></Home>}></Route>
						<Route path='home' element={<Home></Home>}></Route>
						<Route
							path='signup'
							element={<SignUp></SignUp>}
						></Route>

						<Route
							path='signupSuccess/:email'
							element={<SuccessSignUp></SuccessSignUp>}
						></Route>
						<Route
							path='account/:email'
							element={<SuccessSignUp></SuccessSignUp>}
						></Route>
						<Route path='*' element={<Error></Error>}></Route>
					</Routes>
				</div>
			</main>
		</div>
	);
};

export default Body;
