export enum Alignment {
	START = 'start',
	CENTER = 'center',
	END = 'end'
}

export enum Placement {
	TOP = 'top',
	LEFT = 'left',
	RIGHT = 'right',
	BOTTOM = 'bottom'
}

export enum Modifier {
	HOVER = 'hover',
	OPEN = 'open'
}

export interface ListAnchor {
	text: string
	href: string
}

export interface ListButton {
	text: string
	clickHandler: () => void
}

export type ListItem = ListAnchor | ListButton

export type ListItems = ListItem[]

export const isListAnchor = (item: ListItem): item is ListAnchor =>
	(item as ListAnchor).href !== undefined
