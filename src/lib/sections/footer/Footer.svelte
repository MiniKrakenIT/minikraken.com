<script>
import Button from '$components/base/Button/Button.svelte'
import Link from '$components/base/Link/Link.svelte'
import { Behavior, Variant } from '$components/props'
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
	<div class="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
		<div class="absolute inset-2 sm:inset-3 rounded-8 bg-base-300"></div>
		<div class="px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="relative pt-20 pb-16 text-center sm:py-24">
					<hgroup>
						<h2 class="text-xs/5 font-semibold tracking-widest uppercase text-passive-100">Get started</h2>
						<p class="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">Ready to dive in?<br>Start your free trial today.</p>
					</hgroup>
					<p class="mx-auto mt-6 max-w-xs text-sm/6 text-passive-100">Get the cheat codes for selling and unlock your team's revenue potential.</p>
					<div class="mt-6">
						<Button class="w-full sm:w-auto inline-flex items-center justify-center" variant={Variant.soft}>Get started</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
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