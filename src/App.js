import logo from './logo.svg';
import './App.scss';
import Body from './components/Body/Body';
import { Route, Routes } from 'react-router-dom';
import LoginHome from './components/LoginHome/LoginHome';
import Account from './components/Account/Account';
import Error from './components/Error/Error';
import SignUp from './components/SignUp.js/SignUp';
import SuccessSignUp from './components/SuccessSignUp/SuccessSignUp';

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
				<Route path='account' element={<Account></Account>}></Route>
				<Route path='*' element={<Error></Error>}></Route>
			</Routes>
		</div>
	);
}

export default App;
