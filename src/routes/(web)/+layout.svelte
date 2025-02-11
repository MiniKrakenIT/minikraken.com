<script lang="ts">
import '$styles/base-required.css'
import Footer from '$lib/sections/footer/Footer.svelte'
import Navigation from '$lib/sections/navigation/Navigation.svelte'

let { children } = $props()
</script>

<svelte:head>
	<link rel="preload" as="font" href="/fonts/Axi-Regular.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Bold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Black.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Light.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Medium.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Thin.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>


<Navigation />
{@render children()}
<Footer />

<style>
	@import "$styles/base.css";
</style>