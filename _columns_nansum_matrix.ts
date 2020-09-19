export function _columns_nansum_matrix(matrix: number[], columns_length: number) {
	const columns_nansum_matrix = [] as number[]
	for (let j = 0; j < columns_length; j++) {
		let column_sum = 0.0
		for (let i = j; i < matrix.length; i += columns_length) {
			column_sum += (matrix[i] || 0)
		}
		columns_nansum_matrix.push(column_sum)
	}
	return columns_nansum_matrix
}
export const _matrix__nansum__columns = _columns_nansum_matrix
