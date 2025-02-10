import type { ResponsiveProp, ResponsivePropObject } from '$components/types'

const isResponsivePropObject = <T extends string>(
	attr: ResponsiveProp<T>
): attr is ResponsivePropObject<T> => typeof attr === 'object'

export const tpm = <T extends string>(prefix: string, attr: ResponsiveProp<T> | undefined) => {
	if (attr === undefined) return

	if (isResponsivePropObject(attr)) {
		let str = ''

		// for performance reasons, we're not using a for loop
		if (attr.base !== undefined) str += prefix + '-' + attr.base + ' '
		if (attr.xs !== undefined) str += 'xs:' + prefix + '-' + attr.xs + ' '
		if (attr.sm !== undefined) str += 'sm:' + prefix + '-' + attr.sm + ' '
		if (attr.md !== undefined) str += 'md:' + prefix + '-' + attr.md + ' '
		if (attr.lg !== undefined) str += 'lg:' + prefix + '-' + attr.lg + ' '
		if (attr.xl !== undefined) str += 'xl:' + prefix + '-' + attr.xl + ' '
		if (attr.hover !== undefined) str += 'hover:' + prefix + '-' + attr.hover + ' '
		if (attr.active !== undefined) str += 'active:' + prefix + '-' + attr.active + ' '
		if (attr.disabled !== undefined) str += 'disabled:' + prefix + '-' + attr.disabled + ' '

		return str.trimEnd()
	}

	return prefix + '-' + attr
}
