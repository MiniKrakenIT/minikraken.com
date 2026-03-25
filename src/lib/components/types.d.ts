export type ResponsiveProperty<T extends string> = T | ResponsivePropertyObject<T>

export interface ResponsivePropertyObject<T extends string> {
	base?: T
	xs?: T
	sm?: T
	md?: T
	lg?: T
	xl?: T
	hover?: T
	active?: T
	disabled?: T
}
