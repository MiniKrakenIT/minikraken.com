<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte'
	import Button from '$components/form/Button.svelte'
	import { Color } from '$components/enums/color'
	import { Style } from '$components/enums/style'
	import { onDestroy, onMount } from 'svelte'
	import { browser } from '$app/environment'
	import { Screen } from '$lib/enum/Screen'
	import { screenSize } from '$lib/stores/ScreenSize'
	import { removeScreenSizeListener, screenSizeListener } from '$lib/util/screen'
	import { menuItems } from '$lib/data/menuItems'

	let open = $state<boolean>(false)
	let menuButton: HTMLButtonElement

	let menu: HTMLElement

	const toggleMenu = () => {
		open = !open
		console.log(open)
	}

	const closeMenu = (e) => {
		if (menuButton && (menuButton.contains(e.target) || menu.contains(e.target))) return
		else if (open) open = false
	}

	onMount(() => {
		if (!browser) return
		menuButton = document.querySelector('[aria-label="Open Menu"]')!
		document.addEventListener('click', closeMenu)
		screenSizeListener()
	})

	onDestroy(() => {
		if (!browser) return
		document.removeEventListener('click', closeMenu)
		removeScreenSizeListener()
	})
</script>

<div class="p-4 fixed container z-10">
	<div class="navbar transform-gpu rounded-2xl shadow-md">
		<div class="navbar-start">
			<a href="/" draggable="false" class="flex items-center ml-1 select-none">
				<img
					src="/logo/minikraken.svg"
					alt="MiniKraken logo"
					draggable="false"
					class="hidden sm:block w-13 h-13 lg:ml-3"
				/>
				<span class="font-black text-3xl tracking-tighter sm:ml-1">MiniKraken</span>
			</a>
		</div>
		<div
			class="flex justify-start order-first w-1/2 sm:w-auto lg:order-0 lg:justify-center lg:shrink-0"
		>
			<div class="lg:hidden">
				<Button tabindex="0" style={Style.GHOST} aria-label="Open Menu" onclick={toggleMenu}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 select-none"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</Button>
			</div>
			<div class="transition-opacity" bind:this={menu}>
				{#if $screenSize > Screen.lg || open}
					<NavMenu
						{menuItems}
						on:click={() => {
							open = false
						}}
					/>
				{/if}
			</div>
		</div>
		<div class="navbar-end">
			<Button href="/contact" aria-label="contacteer ons knop" color={Color.PRIMARY} class="px-3">
				<span class="hidden sm:block">Contacteer ons</span>
				<span class="block sm:hidden w-7">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						stroke-width="1.7"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox="0 0 24 24"
					>
						<path
							d="m21 14-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2"
						/>
					</svg>
				</span>
			</Button>
		</div>
	</div>
</div>

<style>
	@import '$lib/styles/components/navbar.css';
</style>
