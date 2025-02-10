<script lang="ts">
import Menu from '$assets/icons/Menu.svelte'
import X from '$assets/icons/X.svelte'
import logo from '$assets/logo/minikraken-small.svg'

let openMobileMenu = $state(false)

const toggleMobileMenu = () => {
	openMobileMenu = !openMobileMenu
}
</script>

{#snippet navigation()}
	<nav class="relative md:flex">
			<a class="nav-items" href="/pricing">Pricing</a>
			<a class="nav-items" href="/company">Company</a>
			<a class="nav-items" href="/blog">Blog</a>
			<a class="nav-items" href="/login">Login</a>
	</nav>
{/snippet}

<header class="fixed z-100 w-full mt-8 sm:mt-12 lg:mt-20">
	<div class="w-full">
		<div class="relative flex justify-between items-center w-full px-8 sm:px-12 lg:px-20 border-box mx-auto">
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
	</div>
</header>

{#if openMobileMenu}
	<div class="absolute z-200 top-0 left-0 w-full h-full flex justify-center items-center">
		<div class="absolute w-full h-full backdrop-blur-md background"></div>
		<X class="color-base-content w-16 h-16 absolute top-7 right-6 sm:top-11 sm:right-10 p-2 select-none" stroke-width="1.5" onclick={toggleMobileMenu}/>
		<div class="flex relative w-8/10">
			{@render navigation()}
		</div>
	</div>
{/if}

<style lang="postcss">
	.background {
		background-image: radial-gradient(rgba(0,0,0,.8) 2px, black 2px);
		background-size: 10px 10px;
	}
	.nav-items {
			@apply: flex items-center p-4 font-bold md:font-medium hover:underline text-[10vw] md:text-4 md:text-base-300 bg-blend-multiply;
	}
</style>