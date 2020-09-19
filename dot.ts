import { _sum__numerator__or__0 } from '@ctx-core/math'
import { dotMultiply } from './dotMultiply'
export function dot(...matrices) {
	return _sum__numerator__or__0(dotMultiply(...matrices))
}
