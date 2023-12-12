const hexToRgb = (hex) => {
	// Remove the hash character if it exists
	const hexWithoutSlash = hex.replace(/^#/, "");

	// Parse the red, green, and blue components
	const r = parseInt(hexWithoutSlash.slice(0, 2), 16);
	const g = parseInt(hexWithoutSlash.slice(2, 4), 16);
	const b = parseInt(hexWithoutSlash.slice(4, 6), 16);

	return `rgb(${r}, ${g}, ${b})`;
}


export { hexToRgb };