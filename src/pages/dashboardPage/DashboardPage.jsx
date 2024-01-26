import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function DashboardPage() {
	const { state, increment } = useContext(AuthContext);

	return (
		<>
			Dashboard page
			<h1>{state}</h1>
			<button onClick={increment}>increment</button>
		</>
	);
}
