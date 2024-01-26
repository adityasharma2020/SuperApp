export function isRequired(value) {
	return value.trim() !== '';
}

export function validateLength(value, min, max) {
	value = value.trim();
	return value.length >= min && value.length <= max;
}

export function validateEmail(value) {
	value = value.trim();
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return regex.test(value);
}

export function validateMobile(value) {
	value = value.trim();
	const regex = /^\d{10}$/;

	return regex.test(value);
}

export function isChecked(value) {
	return value === 'true';
}
