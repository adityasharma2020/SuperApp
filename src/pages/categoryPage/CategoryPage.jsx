import { useEffect, useState } from 'react';
import styles from './categoyPage.module.css';
import CategoryBox from '../../components/CategoryBox';

const categoriesList = [
	{ id: 1, name: 'Action', color: '#FF5209', image: <img src='images/image 2.png' alt='' /> },
	{ id: 2, name: 'Drama', color: '#D7A4FF', image: <img src='images/image 3.png' alt='' /> },
	{ id: 3, name: 'Romance', color: '#148A08', image: <img src='images/image 4.png' alt='' /> },
	{ id: 4, name: 'Thriller', color: '#84C2FF', image: <img src='images/image 6.png' alt='' /> },
	{ id: 5, name: 'western', color: '#902500', image: <img src='images/image 7.png' alt='' /> },
	{ id: 6, name: 'Horror', color: '#7358FF', image: <img src='images/image 8.png' alt='' /> },
	{ id: 7, name: 'Fantasy', color: '#FF4ADE', image: <img src='images/image 9.png' alt='' /> },
	{ id: 8, name: 'Music', color: '#E61E32', image: <img src='images/image 10.png' alt='' /> },
	{ id: 9, name: 'Fiction', color: '#6CD061', image: <img src='images/image 11.png' alt='' /> },
];

export const CategoryPage = () => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [lengthError, setLengthError] = useState(false);

	

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h1 className={styles.primaryHeading}>Super App</h1>
				<h1 className={styles.headline}>Choose your entertainment category</h1>

				{lengthError ? (
					<div className={styles.alertBox}>
						<div className={styles.imageBox}>
							<img src='images/Exclaimation.png' alt='' />
						</div>
						<p>Minimum 3 category required</p>
					</div>
				) : (
					<></>
				)}
			</div>
			<div className={styles.right}>
				<div className={styles.rightContainer}>
					{categoriesList.map((category) => (
						<CategoryBox
							key={category.id}
							category={category}
							categoriesList={categoriesList}
							selectedCategories={selectedCategories}
							setSelectedCategories={setSelectedCategories}
						/>
					))}
				</div>
				<div className={styles.button}>
					<button className={styles.nextPageButton}>Next Page</button>
				</div>
			</div>
		</div>
	);
};
