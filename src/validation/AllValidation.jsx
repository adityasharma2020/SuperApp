import { signUpRules } from './Rules';
import {
	isRequired,
	validateEmail,
	validateLength,
	validateMobile,
	isChecked,
} from './singleValidationFunctions';
function loginAllValidation(formData) {
	const errors = {};

	for (const fieldName of Object.keys(formData)) {
		const value = formData[fieldName];
		const validationFunctions = signUpRules[fieldName];
		for (const functionName of validationFunctions) {
			switch (functionName) {
				case 'isRequired':
					if (!isRequired(value)) {
						errors[fieldName] = `${fieldName} is required.`;
					}
					break;
				case 'validateEmail':
					if (!validateEmail(value)) {
						errors[fieldName] = `Email is not valid`;
					}
					break;

				case 'validateLength':
					if (!validateLength(value, 3, 10)) {
						errors[fieldName] = `${fieldName} must be between 3 and 10.`;
					}
					break;

				case 'validateMobile':
					if (!validateMobile(value)) {
						errors[fieldName] = `${fieldName} must be a valid No.`;
					}
					break;

				case 'isChecked':
					if (!isChecked(value)) {
						
				
						errors[fieldName] = `Check this box if you want to proceed`;
					}
					break;
			}
		}
	}

	const isValid = Object.keys(errors).length === 0;
	return { isValid, errorData: errors };
}

export default loginAllValidation;
