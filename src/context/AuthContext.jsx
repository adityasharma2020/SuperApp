import { createContext, useState } from 'react';
export const AuthContext = createContext('');

export const AuthContextProvider = ({ children }) => {
	const isAuthenticated =
		localStorage.getItem('userCredentials') !== null &&
		localStorage.getItem('selectedCategories') !== null;

	return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};
