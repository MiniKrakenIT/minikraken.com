<script lang="ts">
import Link from '$components/base/Link/Link.svelte'
import { Behavior } from '$components/props'
import facebook from '$lib/assets/icons/socials/Facebook.svelte'
import instagram from '$lib/assets/icons/socials/Instagram.svelte'
import tiktok from '$lib/assets/icons/socials/Tiktok.svelte'

const footerItems = [
	{
		title: 'About',
		href: '#'
	},
	{
		title: 'Blog',
		href: '#'
	},
	{
		title: 'Jobs',
		href: '#'
	},
	{
		title: 'Press',
		href: '#'
	},
	{
		title: 'Accessibility',
		href: '#'
	},
	{
		title: 'Partners',
		href: '#'
	}
]

const footerSocials = [
	{
		title: 'Facebook',
		href: '#',
		icon: facebook
	},
	{
		title: 'Instagram',
		href: '#',
		icon: instagram
	},
	{
		title: 'Tiktok',
		href: '#',
		icon: tiktok
	}
]
</script>

<footer>
	<div class="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
		<nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
			{#each footerItems as item}
				<Link href={item.href} behavior={Behavior.hover}>{item.title}</Link>
			{/each}
		</nav>
		<div class="flex mt-16 justify-center gap-x-10">
			{#each footerSocials as social}
				<a href="{social.href}" class="text-passive-300 hover:text-passive-100 transition-colors transition-duration-400">
					<span class="sr-only">{social.title}</span>
					<social.icon class="w-8 h-8" stroke-width="1.5" />
				</a>
			{/each}
		</div>
		<p class="mt-10 text-center text-sm/6 text-passive-300">&copy; {new Date().getFullYear()} MiniKraken. All rights reserved.</p>
	</div>
</footer>