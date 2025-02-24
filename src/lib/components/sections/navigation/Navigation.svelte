<script lang="ts">
import Menu from '$assets/icons/Menu.svelte'
import X from '$assets/icons/X.svelte'
import logo from '$assets/logo/minikraken-small.svg'
import Link from '$components/base/Link/Link.svelte'
import { Behavior } from '$components/props'
import { headerNavigations } from '$data/navigations'
import { store } from '$stores/navigation'
import { onMount } from 'svelte'
import { MediaQuery } from 'svelte/reactivity'
import { scrollY } from 'svelte/reactivity/window'
import { blur, fade } from 'svelte/transition'

let isMounted = $state(false)
let showMenuBackground = $state(false)

let isMobile = new MediaQuery('(max-width: 768px)')
let openMobileMenu = $state(false)

const toggleMobileMenu = () => {
	if (!isMobile.current) return
	openMobileMenu = !openMobileMenu

	document.body.style.overflow = openMobileMenu ? 'hidden' : ''
}

onMount(() => {
	isMounted = true

	$effect(() => {
		showMenuBackground = $store.fixedBackground || (scrollY.current ?? 0) >= 40
	})
})
</script>

<svelte:body class:overflow-hidden={openMobileMenu} />

{#snippet navigation()}
	<nav class="relative md:flex">
		{#each headerNavigations as {title, href}, i}
			<div transition:blur|global={{duration: 500, delay: i * 50}}>
				<Link class="flex items-center p-4 font-bold md:font-medium text-[10vw] md:text-4 md:text-slate-950" behavior={Behavior.hover} {href} onclick={toggleMobileMenu}>{title}</Link>
			</div>
		{/each}
	</nav>
{/snippet}

<header class="fixed w-full z-100 mt-8 sm:mt-12 lg:mt-20">
	<span class="absolute inset-3 -top-1/4 ring-1 ring-dark/7 backdrop-blur-md rounded-8 h-20 sm:mx-2 md:mx-3 bg-light-700/50 shadow-xl opacity-0 transition-all transition-duration-500" class:opacity-100={showMenuBackground}></span>
	<div class="relative box-border flex justify-between items-center mx-8 sm:mx-12 lg:mx-20">
		{#if isMounted}
			<a class="w-14 flex items-center" title="Home" href="/" aria-label="Home" in:blur={{duration: 500}}>
				<img
					class="object-cover object-center"
					src={logo}
					alt="MiniKraken Logo"
					loading="eager"
				/>
				<div class="color-slate-950 font-bold text-3xl lg:text-4xl hidden sm:block">MiniKraken</div>
			</a>
		{/if}
		{#if isMounted && !isMobile.current}
			{@render navigation()}
		{/if}
		{#if isMounted && isMobile.current}
			<div in:blur={{duration: 500}}>
				<Menu class="md:hidden p-2 color-slate-950 select-none w-13 h-13" stroke-width="1.8" onclick={toggleMobileMenu}></Menu>
			</div>
		{/if}
		</div>
</header>

{#if isMobile.current && openMobileMenu}
	<div class="fixed z-200 inset-0 w-full h-full flex justify-center items-center transform will-change-transform" transition:fade={{duration: 150}}>
		<div class="absolute w-full h-full backdrop-blur-8 mobile-menu-background"></div>
		<div>
			<X class="color-base-content w-16 h-16 absolute z-205 top-7 right-6 sm:(top-11 right-10) p-2 select-none" stroke-width="1.5" onclick={toggleMobileMenu}/>
		</div>
		<div class="flex relative w-80%">
			{@render navigation()}
		</div>
	</div>
{/if}

<style>
	.mobile-menu-background {
		background-image: radial-gradient(color-mix(in oklch, var(--color-base-100) 80%, transparent 20%) 2px, var(--color-base-100) 2px);
		background-size: 10px 10px;
	}
</style>