import './App.scss';
import Body from './components/Body/Body';
import { Route, Routes } from 'react-router-dom';
import LoginHome from './components/LoginHome/LoginHome';
import Account from './components/Account/Account';
import Error from './components/Error/Error';
import SignUp from './components/SignUp.js/SignUp';
import SuccessSignUp from './components/SuccessSignUp/SuccessSignUp';
import EditAccount from './components/EditAccount/EditAccount';
import Address from './components/Address/Address';
import AccountDetails from './components/AccountDetails/AccountDetails';
import { useEffect } from 'react';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Body></Body>}>
					<Route path='/' element={<LoginHome></LoginHome>}></Route>

					<Route path='signup' element={<SignUp></SignUp>}></Route>

					<Route
						path='success'
						element={<SuccessSignUp></SuccessSignUp>}
					></Route>
				</Route>

				<Route path='account' element={<Account></Account>}>
					<Route path='/account' element={<AccountDetails />}></Route>
					<Route path='details' element={<AccountDetails />}></Route>
					<Route
						path='edit'
						element={<EditAccount></EditAccount>}
					></Route>
					<Route path='address' element={<Address></Address>}></Route>
				</Route>

				<Route path='*' element={<Error></Error>}></Route>
			</Routes>
		</div>
	);
}

export default App;
