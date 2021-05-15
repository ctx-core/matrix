export function normalize(matrix:number[], columns_length = 2) {
	const normalized_matrix = [] as number[]
	for (let i = 0; i < matrix.length; i += columns_length) {
		let sum = 0.0
		for (let j = 0; j < columns_length; j++) {
			sum += (matrix[i + j] || 0)
		}
		for (let j = 0; j < columns_length; j++) {
			const normalized =
				sum
				? matrix[i + j] / sum
				: 0
			normalized_matrix.push(normalized)
		}
	}
	return normalized_matrix
}
export { normalize as normalize__row__major__matrix }
