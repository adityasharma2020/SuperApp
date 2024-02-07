import { useEffect, useState } from 'react';
import styles from './signupPage.module.css';
import loginAllValidation from '../../validation/AllValidation';
import { debouncedValidation } from '../../validation/singleFieldValidation';
import { useNavigate } from 'react-router-dom';
const initialFormErrors = {
	name: null,
	userName: null,
	email: null,
	mobile: null,
	checkBox: null,
};

const DELAY = 1000;
export const SignupPage = () => {
	const navigate = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		userName: '',
		email: '',
		mobile: '',
		checkBox: false,
	});

	const [formError, setFormError] = useState(initialFormErrors);

	function submitHandler(event) {
		event.preventDefault();
		setFormError(initialFormErrors);
		const { isValid, errorData } = loginAllValidation({
			name: event.target.name.value,
			userName: event.target.userName.value,
			email: event.target.email.value,
			mobile: event.target.mobile.value,
			checkBox: event.target.checkBox.value,
		});

		if (isValid) {
			localStorage.setItem('userCredentials', JSON.stringify(formData));
			navigate('/category');
			setIsSubmitted(true);
		} else {
			setFormError((prev) => ({ ...prev, ...errorData }));
		}
	}

	function handleInputChange(name, value) {
		setFormData((prev) => ({ ...prev, [name]: value }));
		console.log('asdfasdf', name);
		debouncedValidation(name, value, setFormError, DELAY);
	}



	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img className={styles.img} src='/images/image 13.png' alt='hero Image' />
				<h1 className={styles.headline}>Discover new things on superApp</h1>
			</div>
			<div className={styles.right}>
				<div className={styles.rightContainer}>
					<h1 className={styles.primaryHeading}>Super App</h1>
					<h2 className={styles.secondaryHeading}>create your new account</h2>

					<form className={styles.form} action='' onSubmit={submitHandler}>
						<input
							value={formData.name}
							type='text'
							name='name'
							placeholder='Name'
							className={formError?.name != null ? `${styles.error}` : ''}
							onChange={(e) => handleInputChange('name', e.target.value)}
						/>
						{formError && formError.name && (
							<p className={styles.errorHeadline}>{formError.name}</p>
						)}
						<input
							value={formData.userName}
							type='text'
							name='userName'
							placeholder='UserName'
							className={formError?.userName != null ? `${styles.error}` : ''}
							onChange={(e) => handleInputChange('userName', e.target.value)}
						/>
						{formError && formError.userName && (
							<p className={styles.errorHeadline}>{formError.userName}</p>
						)}

						<input
							value={formData.email}
							type='text'
							name='email'
							placeholder='Email'
							className={formError?.email != null ? `${styles.error}` : ''}
							onChange={(e) => handleInputChange('email', e.target.value)}
						/>
						{formError && formError.email && (
							<p className={styles.errorHeadline}>{formError.email}</p>
						)}

						<input
							value={formData.mobile}
							type='number'
							name='mobile'
							placeholder='Mobile'
							className={formError?.mobile != null ? `${styles.error}` : ''}
							onChange={(e) => handleInputChange('mobile', e.target.value)}
						/>
						{formError && formError.mobile && (
							<p className={styles.errorHeadline}>{formError.mobile}</p>
						)}

						<div className={styles.checkbox}>
							<input
								value={formData.checkBox}
								type='checkbox'
								name='checkBox'
								id='checkbox'
								className={formError?.checkBox != null ? `${styles.error}` : ''}
								onChange={(e) => handleInputChange('checkBox', e.target.checked)}
							/>
							<label htmlFor='checkbox'>
								Share my registration data with Superapp
							</label>
						</div>
						{formError && formError.checkBox && (
							<p className={styles.errorHeadline}>{formError.checkBox}</p>
						)}
						<button className={styles.button}>Sign up</button>
					</form>

					<p className={styles.paragraph}>
						By clicking on Sign up. you agree to Superapp{' '}
						<span>Terms and Conditions of Use</span>
					</p>
					<p className={styles.paragraph}>
						To learn more about how Superapp collects, uses, shares and protects your
						personal data please head Superapp <span>Privacy Policy</span>
					</p>
				</div>
			</div>
		</div>
	);
};
