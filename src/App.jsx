import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Root from './routes/root';
import { SignupPage } from './pages/signupPage/SignupPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<SignupPage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/*' element={<Root />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
