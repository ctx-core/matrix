/**
 * @param scalar{number}
 * @param matrix{number[]}
 * @returns {number[]}
 */
export function multiply_scalar_matrix(scalar, matrix) {
	const products = []
	for (let i = 0; i < matrix.length; i++) {
		products.push(matrix[i] * scalar)
	}
	return products
}
export { multiply_scalar_matrix as multiply__scalar__matrix }
