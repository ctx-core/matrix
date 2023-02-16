import { validate_length } from '../validate_length/index.js'
/**
 * @param matrices{number[][]}
 * @returns {number[]}
 */
export function mul_dot(...matrices) {
	const length = validate_length(matrices)
	const products = []
	for (let j = 0; j < length; j++) {
		let product = matrices[0][j]
		for (let i = 1; i < matrices.length; i++) {
			product *= matrices[i][j]
		}
		products.push(product)
	}
	return products
}
export {
	mul_dot as multiply_dot,
	mul_dot as dotMultiply,
}
