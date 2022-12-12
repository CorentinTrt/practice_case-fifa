const convertInputToDate = (str: string): Date | void => {
	const [date, time] = str.split('T');
	if (!date || !time) return;

	const [y, m, d] = date.split('-');
	if (!y || !m || !d) return;

	const [h, min] = time.split(':');
	if (!h || !min) return;

	return new Date(+y, +m - 1, +d, +h, +min);
};

export default convertInputToDate;
