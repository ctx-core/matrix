import { validate_length } from './validate_length'
export function dotMultiply(...matrices) {
	const length = validate_length(matrices)
	const products = [] as number[]
	for (let j = 0; j < length; j++) {
		let product = matrices[0][j]
		for (let i = 1; i < matrices.length; i++) {
			product *= matrices[i][j]
		}
		products.push(product)
	}
	return products
}
