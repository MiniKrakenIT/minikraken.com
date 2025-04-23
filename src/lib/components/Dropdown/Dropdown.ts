export enum Alignment {
	start = 'start',
	center = 'center',
	end = 'end'
}

export enum Placement {
	top = 'top',
	left = 'left',
	right = 'right',
	bottom = 'bottom'
}

export enum Modifier {
	hover = 'hover',
	open = 'open'
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
