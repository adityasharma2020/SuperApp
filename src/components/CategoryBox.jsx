import styles from './categoryBox.module.css';

import React, { useEffect, useState } from 'react';

const CategoryBox = ({ category, categoriesList, selectedCategories, setSelectedCategories }) => {
	const [isSelected, setIsSelected] = useState(false);

	const containerStyle = {
		backgroundColor: category.color,
		border: `${isSelected ? '4px solid green' : ''}`,
	};

	const addIdToCategoryList = (value) => {
		console.log('value', value);
		if (selectedCategories.includes(value)) {
			// If value already exists, remove it
			setSelectedCategories(selectedCategories.filter((category) => category !== value));
			console.log('inside if');
		} else {
			// If value doesn't exist, add it
			setSelectedCategories([...selectedCategories, value]);
			console.log('inside else',selectedCategories);
		}
		console.log(selectedCategories);
	};

	const handleClick = () => {
		addIdToCategoryList(category);
		setIsSelected(!isSelected);
	};

	useEffect(() => {
		const isPresent = selectedCategories.includes(category) === true;
		if (isPresent) {
			setIsSelected(true);
		}
	}, []);

	return (
		<div onClick={handleClick} className={styles.container} style={containerStyle}>
			<div className={styles.heading}>{category.name}</div>
			<div className={styles.imageBox}>{category.image}</div>
		</div>
	);
};

export default CategoryBox;
