<script lang="ts">
import '$styles/base-required.css'
import Footer from '$lib/sections/footer/Footer.svelte'
import Navigation from '$lib/sections/navigation/Navigation.svelte'

let { children } = $props()
</script>

<svelte:head>
	<link rel="preload" as="font" href="/fonts/Axi-Book.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Bold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-Medium.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="/fonts/Axi-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
	<title>Minikraken - set Sail into worry-free IT</title>
</svelte:head>


<Navigation />
{@render children()}
<Footer />

<style>
	@import "$styles/base.css";
</style>