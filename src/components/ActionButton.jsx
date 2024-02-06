import styles from './actionButton.module.css';

const ActionButton = ({ children, handleOnClick }) => {
	return (
		<>
			<div className={styles.actionContainer}>
				<button className={styles.categoryButton}>{children}</button>
				<i className={styles.closeButton} onClick={handleOnClick}>
					X
				</i>
			</div>
		</>
	);
};

export default ActionButton;
