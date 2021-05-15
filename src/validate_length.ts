export function validate_length(...arrays:any[][]) {
	const length = arrays[0].length
	for (let i = 1; i < arrays.length; i++) {
		if (length != arrays[i].length) {
			throw 'array lengths are not equal'
		}
	}
	return length
}
export { validate_length as length__validate }
