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

export type ListItem =
	| {
			text: string
			href: string
	  }
	| {
			text: string
			clickHandler: () => void
	  }

export type ListItems = ListItem[]
