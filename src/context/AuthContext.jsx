import { createContext, useState } from 'react';
export const AuthContext = createContext('');

export const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem('userCredentials') !== null
	);


	return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
