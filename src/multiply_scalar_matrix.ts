export function multiply_scalar_matrix(scalar, matrix) {
	const products = [] as number[]
	for (let i = 0; i < matrix.length; i++) {
		products.push(matrix[i] * scalar)
	}
	return products
}
export const multiply__scalar__matrix = multiply_scalar_matrix
