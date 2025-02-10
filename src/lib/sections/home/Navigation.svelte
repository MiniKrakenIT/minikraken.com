<script lang="ts">
import Menu from '$assets/icons/Menu.svelte'
import X from '$assets/icons/X.svelte'
import logo from '$assets/logo/minikraken-small.svg'
import Link from '$components/base/Link/Link.svelte'
import { Behavior } from '$components/props'

let openMobileMenu = $state(false)

const toggleMobileMenu = () => {
	openMobileMenu = !openMobileMenu
}

const navigations = [
	{
		name: 'Pricing',
		href: '/pricing'
	},
	{
		name: 'Company',
		href: '/company'
	},
	{
		name: 'Blog',
		href: '/blog'
	},
	{
		name: 'Login',
		href: '/login'
	}
]
</script>

{#snippet navigation()}
	<nav class="relative md:flex">
		{#each navigations as {name, href}}
			<Link class="nav-item" behavior="{Behavior.hover}" {href}>{name}</Link>
		{/each}
	</nav>
{/snippet}

<header class="fixed w-full z-100 mt-8 sm:mt-12 lg:mt-20">
	<div class="relative box-border flex justify-between items-center px-8 sm:px-12 lg:px-20 box-border mx-auto">
		<div class="relative flex items-center justify-center">
			<a class="w-14" title="Home" href="/" aria-label="Home" >
				<img
					class="object-cover object-center"
					src="{ logo }"
					alt="MiniKraken Logo"
					loading="eager"
				/>
			</a>
			<div class="text-gray-950 font-bold text-3xl lg:text-4xl hidden sm:block">MiniKraken</div>
		</div>
		<div class="hidden md:block">
			{@render navigation()}
		</div>
		<Menu class="md:hidden p-2 color-slate-950 select-none w-13 h-13" stroke-width="1.8" onclick={toggleMobileMenu}></Menu>
	</div>
</header>

{#if openMobileMenu}
	<div class="absolute z-200 inset-0 w-full h-full flex justify-center items-center">
		<div class="absolute w-full h-full backdrop-blur-md background"></div>
		<X class="color-base-content w-16 h-16 absolute z-205 top-9 right-8 sm:(top-13 right-12) p-2 select-none" stroke-width="1.5" onclick={toggleMobileMenu}/>
		<div class="flex relative w-80%">
			{@render navigation()}
		</div>
	</div>
{/if}

<style lang="postcss">
	.background {
		background-image: radial-gradient(rgba(0,0,0,.8) 2px, black 2px);
		background-size: 10px 10px;
	}

	:global(.nav-item) {
      @apply flex items-center p-4 font-bold md:font-medium text-[10vw] md:text-4 md:text-base-300 bg-blend-multiply
	}
</style>