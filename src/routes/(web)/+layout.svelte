<script lang="ts">
import MenuIcon from '$assets/icons/MenuIcon.svelte'
import Navigation from '$lib/sections/home/Navigation.svelte'

let { children } = $props()

let open = $state(false)
</script>

<svelte:head>
	<link rel="preload" as="font" href="fonts/Axi-Regular.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-Bold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-Black.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-Light.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-Medium.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Axi-Thin.woff2" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="contents">
	<Navigation/>
	<MenuIcon onClick={() => open = !open} open={open}/>
	{@render children()}
</div>

<style>
	@import "$styles/base.css";
</style>