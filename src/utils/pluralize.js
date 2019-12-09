const pluralize = (number, prefix, suffixes) => {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return `${prefix}${suffixes[2]}`;
	}
	n %= 10;
	if (n === 1) {
		return `${prefix}${suffixes[0]}`;
	}
	if (n >= 2 && n <= 4) {
		return `${prefix}${suffixes[1]}`;
	}
	return `${prefix}${suffixes[2]}`;
};

export default pluralize;