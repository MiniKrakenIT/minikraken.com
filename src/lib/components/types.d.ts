export type ResponsiveProp<T extends string> = T | ResponsivePropObject<T>

export interface ResponsivePropObject<T extends string> {
	base: T
	xs?: T
	sm?: T
	md?: T
	lg?: T
	xl?: T
	hover?: T
	active?: T
	disabled?: T
}
