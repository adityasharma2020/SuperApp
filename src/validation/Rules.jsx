export const signUpRules = {
	name: ['isRequired'],
	userName: ['isRequired', 'validateLength'],
	email: ['isRequired', 'validateEmail'],
	mobile: ['isRequired', 'validateMobile'],
	checkBox: ['isChecked'],
};
