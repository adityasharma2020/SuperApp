import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboardPage/DashboardPage';
import { SignupPage } from './pages/signupPage/SignupPage';
import Root from './routes/root';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' exact element={<SignupPage />} />
				<Route path='/*' element={<Root />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
