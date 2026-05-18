let _menuState = $state(false)

export const toggleMenu = () => (_menuState = !_menuState)
export const menuState = () => _menuState

export const closeMenu = () => (_menuState = false)
