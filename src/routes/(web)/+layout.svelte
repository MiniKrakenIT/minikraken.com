<script lang="ts">
	import '$styles/base.css'
	import type { Snippet } from 'svelte'
	import { asset, resolve } from '$app/paths'
	import Github from '$assets/icons/socials/Github.svelte'
	import Instagram from '$assets/icons/socials/Instagram.svelte'
	import X from '$assets/icons/socials/X.svelte'
	import Logo from '$assets/logo/Logo.svelte'
	import { NavigationAnimation } from '$lib/motion/navigation'

	type Props = {
		children?: Snippet
	}

	const { children }: Props = $props()

	const socials = [
		{
			href: 'https://github.com/MiniKrakenIT',
			icon: Github,
			label: 'Github'
		},
		{
			href: 'https://instagram.com/MiniKrakenIT',
			icon: Instagram,
			label: 'Instagram'
		},
		{
			href: 'https://x.com/MiniKrakenIT',
			icon: X,
			label: 'X'
		}
	]

	const data = {
		contactCTA: 'Contact us',
		footer: [
			{
				sectionName: 'Company',
				items: [
					{
						href: '/about',
						label: 'About'
					},
					{
						href: '/process',
						label: 'Process'
					}
				]
			},
			{
				sectionName: 'Links',
				items: [
					{
						href: '/legal/cookie-policy',
						label: 'Cookie Policy'
					},
					{
						href: '/legal/privacy-policy',
						label: 'Privacy Policy'
					},
					{
						href: '/sitemap.xml',
						label: 'Sitemap'
					}
				]
			},
			{
				sectionName: 'Connect',
				items: socials
			}
		],
		navigation: [
			[
				{
					href: '/realisaties',
					label: 'Realisaties'
				},
				{
					href: '/process',
					label: 'Ons Process'
				}
			],
			[
				{
					href: '/over-ons',
					label: 'Over ons'
				},
				{
					href: '/blog',
					label: 'Blog'
				}
			]
		],
		socials: socials
	}

	let menuState = $state(false)

	const toggleMenuEvent = () => {
		menuState = !menuState
	}
</script>

<svelte:head>
	<link
		rel="preload"
		as="font"
		href={asset('/fonts/Axi-Book.woff2')}
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href={asset('/fonts/Axi-Bold.woff2')}
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href={asset('/fonts/Axi-Medium.woff2')}
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href={asset('/fonts/Axi-SemiBold.woff2')}
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

<header {@attach NavigationAnimation(menuState)} class="h-2 overflow-hidden">
	<div class="absolute top-2 right-0 left-0 z-40 pt-14" aria-hidden={!menuState}>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<div class="flex items-center justify-between">
					<Logo color="#e7e5e4" />
					<div class="flex items-center gap-x-8">
						<a
							class="inline-flex rounded-full bg-slate-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-slate-700"
							href={resolve('/contact')}
						>
							<span class="relative top-px">{data.contactCTA}</span>
						</a>
						<button
							type="button"
							onclick={toggleMenuEvent}
							aria-expanded={menuState}
							aria-controls=":R3a:"
							class="group -m-2.5 cursor-pointer rounded-full p-2.5 transition hover:bg-neutral-950/10"
							aria-label="Toggle navigation"
						>
							<svg
								viewBox="0 0 24 24"
								aria-hidden={!menuState}
								class="h-6 w-6 fill-stone-100 group-hover:fill-neutral-400"
							>
								<path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id=":R3a:" class="relative z-50 overflow-hidden bg-neutral-950 pt-2">
		<div class="bg-neutral-800">
			<div class="bg-neutral-950 pt-14 pb-16">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl lg:max-w-none">
						<div class="flex items-center justify-between">
							<Logo color="#bdc2c7" />
							<div class="flex items-center gap-x-8">
								<a
									class="inline-flex rounded-full bg-neutral-300 px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-400"
									href={resolve('/contact')}
								>
									<span class="relative top-px">{data.contactCTA}</span>
								</a>
								<button
									onclick={toggleMenuEvent}
									type="button"
									aria-expanded="true"
									aria-controls=":R3a:"
									class="group -m-2.5 cursor-pointer rounded-full p-2.5 transition hover:bg-neutral-300/10"
									aria-label="Toggle navigation"
								>
									<svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="h-6 w-6 fill-neutral-300 group-hover:fill-neutral-400"
									>
										<path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"></path>
										<path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav class="font-display my-px text-5xl font-medium tracking-tight text-neutral-300">
				{#each data.navigation as row}
					<div class="even:mt-px sm:bg-neutral-950">
						<div class="mx-auto max-w-7xl px-6 lg:px-8">
							<div class="mx-auto max-w-2xl lg:max-w-none">
								<div class="grid grid-cols-1 sm:grid-cols-2">
									{#each row as navigationItem}
										<a
											class="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
											href={resolve(navigationItem.href)}
										>
											<span class="flex h-full w-full items-center">
												{navigationItem.label}
											</span>
											<span
												class="transition-duration-300 absolute inset-y-0 -z-10 w-screen overflow-hidden bg-neutral-900 opacity-0 transition-opacity group-odd:right-0 group-even:left-0 group-hover:opacity-90"
											></span>
										</a>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</nav>
			<div
				class="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800"
			>
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl lg:max-w-none">
						<div class="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
							<div>
								<h2 class="font-display text-base font-semibold text-neutral-300">Our offices</h2>
								<ul role="list" class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
									<li>
										<address class="text-sm text-neutral-300 not-italic">
											<strong class="text-neutral-300">Copenhagen</strong><br />1 Carlsberg Gate<br
											/>1260, København, Denmark
										</address>
									</li>
									<li>
										<address class="text-sm text-neutral-300 not-italic">
											<strong class="text-neutral-300">Billund</strong><br />24 Lego Allé<br />7190,
											Billund, Denmark
										</address>
									</li>
								</ul>
							</div>
							<div class="sm:border-l sm:border-transparent sm:pl-16">
								<h2 class="font-display text-base font-semibold text-neutral-300">Follow us</h2>
								<ul role="list" class="mt-6 flex gap-x-10 text-neutral-300">
									{#each data.socials as Social}
										<li>
											<a
												aria-label={Social.label}
												class="transition hover:text-neutral-200"
												href={resolve(Social.href)}
											>
												<Social.icon class="h-6 w-6" />
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

<div
	style="border-top-left-radius: 40px; border-top-right-radius: 40px; transform: none; transform-origin: 50% 50% 0px;"
	class="relative flex flex-auto overflow-hidden bg-white"
>
	<div
		class="relative isolate flex w-full flex-col"
		style="transform: none; transform-origin: 50% 50% 0px;"
	>
		{@render children?.()}

		<footer class="mx-auto mt-24 w-full max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<div style="opacity: 1; transform: none;">
					<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
						<nav>
							<ul role="list" class="grid grid-cols-2 gap-8 sm:grid-cols-3">
								<li>
									<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">
										Work
									</div>
									<ul role="list" class="mt-4 text-sm text-neutral-700">
										<li class="mt-4">
											<a
												class="transition hover:text-neutral-950"
												href={resolve('/work/family-fund')}>FamilyFund</a
											>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/work/unseal')}
												>Unseal</a
											>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/work/phobia')}
												>Phobia</a
											>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/work')}
												>See all <span aria-hidden="true">→</span></a
											>
										</li>
									</ul>
								</li>
								<li>
									<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">
										Company
									</div>
									<ul role="list" class="mt-4 text-sm text-neutral-700">
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/about')}>About</a
											>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/process')}
												>Process</a
											>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/blog')}>Blog</a>
										</li>
										<li class="mt-4">
											<a class="transition hover:text-neutral-950" href={resolve('/contact')}
												>Contact us</a
											>
										</li>
									</ul>
								</li>
								{#each data.footer as footerItem}
									<li>
										<div class="font-display text-sm font-semibold tracking-wider text-neutral-950">
											{footerItem.sectionName}
										</div>
										<ul role="list" class="mt-4 text-sm text-neutral-700">
											{#each footerItem.items as item}
												<li class="mt-4">
													<a class="transition hover:text-neutral-950" href={resolve(item.href)}
														>{item.label}</a
													>
												</li>
											{/each}
										</ul>
									</li>
								{/each}
							</ul>
						</nav>
						<div class="flex lg:justify-end">
							<form class="max-w-sm">
								<h2 class="font-display text-sm font-semibold tracking-wider text-neutral-950">
									Sign up for our newsletter
								</h2>
								<p class="mt-4 text-sm text-neutral-700">
									Subscribe to get the latest design news, articles, resources and inspiration.
								</p>
								<div class="relative mt-6">
									<input
										type="email"
										placeholder="Email address"
										autocomplete="email"
										aria-label="Email address"
										class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
									/>
									<div class="absolute inset-y-1 right-1 flex justify-end">
										<button
											type="submit"
											aria-label="Submit"
											class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
										>
											<svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
												<path
													fill="currentColor"
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M16 3 10 .5v2H0v1h10v2L16 3Z"
												></path>
											</svg>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div
						class="mt-24 mb-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12"
					>
						<Logo small={true} />
						<p class="text-sm text-neutral-700">
							© MiniKraken <!-- -->{new Date().getFullYear()}
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>

<style global>
	@reference "$styles/base.css";

	:root {
		@apply bg-neutral-950;
	}

	body {
		@apply flex min-h-full flex-col;
	}
</style>
