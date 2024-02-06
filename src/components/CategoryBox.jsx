import styles from './categoryBox.module.css';

import React, { useEffect, useState } from 'react';

const CategoryBox = ({ category, categoriesList, selectedCategories, setSelectedCategories }) => {
	const [isSelected, setIsSelected] = useState(false);

	const containerStyle = {
		backgroundColor: category.color,
		border: `${isSelected ? '4px solid green' : ''}`,
	};

    const addIdToCategoryList = (id)=>{
         
    }

	const handleClick = () => {
		addIdToCategoryList(category.id);
		setIsSelected(!isSelected);
		console.log(selectedCategories);
	};

	useEffect(() => {
		const isPresent = selectedCategories.includes(category.id) === true;
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
