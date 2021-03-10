export const hex2rgba = (hex, opacity) => {
	let h = hex.replace('#', '');
	let r = parseInt(h.substring(0, 2), 16);
	let g = parseInt(h.substring(2, 4), 16);
	let b = parseInt(h.substring(4, 6), 16);
	let res = `rgba(${r},${g},${b},${opacity})`;
	return res;
};
