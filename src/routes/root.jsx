import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Suspense, useContext } from 'react';
import DashboardPage from '../pages/dashboardPage/DashboardPage';
import EntertainmentPage from '../pages/entertainmentPage/EntertainmentPage';
import PageNotFound from './page-not-found';
import { CategoryPage } from '../pages/categoryPage/CategoryPage';

export default function Root() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Suspense fallback={<>...loading</>}>
						<DashboardPage />
					</Suspense>
				}
			/>
			<Route
				path='/category'
				element={
					<Suspense fallback={<>loading...</>}>
						<CategoryPage />
					</Suspense>
				}
			/>
			<Route
				path='/entertainment'
				element={
					<Suspense fallback={<>loading...</>}>
						<EntertainmentPage />
					</Suspense>
				}
			/>
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
}
