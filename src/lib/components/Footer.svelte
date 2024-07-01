<script lang="ts">
	import Link from '$components/form/Link.svelte'
	import { services } from '$lib/data/services'
	import { company } from '$lib/data/company'
	import { legal } from '$lib/data/legal'

	const footerColumns = [
		{
			title: 'Diensten',
			links: services
		},
		{
			title: 'Bedrijf',
			links: company
		},
		{
			title: 'Legal',
			links: legal
		}
	]
</script>

<div class="footer-transition p-6 z-1">
	<footer
		class="footer p-10 bg-base-100 rounded-2xl place-items-center md:place-items-start shadow-md"
	>
		<h2 class="visuallyhidden">Footer Navigations</h2>
		<aside class="md:h-full select-none mx-auto">
			<img
				src="/logo/minikraken.svg"
				alt="MiniKraken Logo"
				class="h-20 w-20 mx-auto fill-base-content self-end pointer-events-none"
			/>
			<div class="text-center">
				<div class="font-black text-2xl tracking-tight mt-1">MiniKraken</div>
				<p>
					Set Sail into
					<strong class="text-primary font-bold">worry-free</strong>
					IT
				</p>
			</div>
		</aside>
		{#each footerColumns as column}
			<nav class="footer-list mx-auto">
				<h3 class="title">{column.title}</h3>
				{#each column.links as link}
					<Link hover={true} href={link.href} class="footer-link">{link.name}</Link>
				{/each}
			</nav>
		{/each}
	</footer>

	<div class="text-center mt-5">
		<p class="text-xs font-light select-none">
			&copy; {new Date().getFullYear()} MiniKraken
		</p>
	</div>
</div>

<style>
	@import '$lib/styles/components/footer.css';

	.title {
		@apply font-bold text-lg mb-2;
	}

	@media (max-width: 768px) {
		.title {
			@apply text-2xl;
		}
	}

	.footer-list {
		@apply flex md:grid flex-col justify-center items-center;
	}

	.footer-link {
		@apply text-lg;
	}

	.footer-transition {
		view-transition-name: footer;
	}

	:root {
		&::view-transition-old(footer) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-top;
		}

		&::view-transition-new(footer) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-bottom;
		}
	}
</style>
