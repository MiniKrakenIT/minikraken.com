<script lang="ts">
import '$styles/base-required.css'
import { onNavigate } from '$app/navigation'
import logo from '$assets/logo/minikraken.svg'

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
	<title>MiniKraken | Set sail into a Worry-free IT</title>
	<link rel="preload" as="font" href="/fonts/Axi-Book.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Bold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Medium.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="mx-auto relative w-full" data-theme="dark">
	<nav class="flex items-center w-full absolute p-4 box-border z-2 max-w-500">
		<img src="{logo}" alt="Minikraken" class="h-15">
		<p class="text-3xl font-bold mt-2">MiniKraken</p>
	</nav>
	{@render children()}
</div>

<style lang="postcss">
	@import "$styles/base.css";

	:global(html) {
			@apply bg-base-300;
      background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	}
</style>