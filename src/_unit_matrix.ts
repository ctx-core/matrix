export function _unit_matrix(length:number) {
	const unit_matrix = [] as number[]
	for (let i = 0; i < length; i++) {
		unit_matrix.push(1)
	}
	return unit_matrix
}
