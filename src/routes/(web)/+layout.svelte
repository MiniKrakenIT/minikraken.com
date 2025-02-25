<script lang="ts">
import '$styles/base-required.css'
import { onNavigate } from '$app/navigation'
import Footer from '$lib/components/sections/footer/Footer.svelte'
import Navigation from '$lib/components/sections/navigation/Navigation.svelte'

let { children } = $props()

onNavigate((navigation) => {
	if (!document.startViewTransition) return

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve()
			await navigation.complete
		})
	})
})
</script>

<svelte:head>
	<link rel="preload" as="font" href="/fonts/Axi-Book.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Bold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Medium.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="max-w-500 mx-auto">
	<Navigation />
	{@render children()}
	<Footer />
</div>

<style lang="postcss">
	@import "$styles/base.css";

	:global(html) {
			@apply bg-base-300;
	}
</style>