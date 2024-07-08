import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import Sidebar from './components/Sidebar';
import LikesPage from './pages/LikesPage';

function App() {
	return (
		<Router>
			<div className='flex text-white'>
				<Sidebar />
				<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignPage />} />
						<Route path='/explore' element={<ExplorePage />} />
						<Route path='/likes' element={<LikesPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
