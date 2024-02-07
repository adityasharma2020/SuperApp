import styles from './actionButton.module.css';

const ActionButton = ({ name, handleOnClick }) => {
	return (
		<>
			<div className={styles.actionContainer}>
				<button className={styles.categoryButton}>{name}</button>
				<i className={styles.closeButton} onClick={handleOnClick}>
					X
				</i>
			</div>
		</>
	);
};

export default ActionButton;
