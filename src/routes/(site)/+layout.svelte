<script lang="ts">
	import '$lib/styles/app.css'

	import { onNavigate } from '$app/navigation'

	import Menu from '$lib/components/Menu.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import CookieBanner from '$components/CookieBanner.svelte'
	import type { Snippet } from 'svelte'

	type LayoutProps = {
		children: Snippet
	}

	let { children } = $props() as LayoutProps

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

<div class="min-h-dvh-100 bg-base-200">
	<div class="container mx-auto">
		<Menu />

		<div class="content-transition px-6 pt-24 pb-10 z-0">
			{@render children()}
		</div>

		<Footer />
	</div>
</div>

<CookieBanner />

<style global>
	.content-transition {
		view-transition-name: content;
	}

	:root::view-transition-old(content) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-top;
	}

	:root::view-transition-new(content) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-bottom;
	}
</style>
