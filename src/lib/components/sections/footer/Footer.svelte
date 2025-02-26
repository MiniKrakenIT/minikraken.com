<script lang="ts">
import Link from '$components/base/Link/Link.svelte'
import { Behavior } from '$components/props'
import { footerNavigations } from '$data/navigations'
import { socials } from '$data/socials'
import { inViewIntro } from '$lib/utils/motion/in-view-intro'
</script>

<footer>
	<div class="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:px-8">
		<nav use:inViewIntro={2} class="-mb-6 mt-2 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
			{#each footerNavigations as item}
				<Link href={item.href} behavior={Behavior.hover}>{item.title}</Link>
			{/each}
		</nav>
		<div use:inViewIntro={2} class="flex mt-16 justify-center gap-x-10">
			{#each socials as social}
				<a href="{social.href}" class="text-passive-300 hover:text-passive-100 transition-colors transition-duration-400">
					<span class="sr-only">{social.title}</span>
					<social.icon class="w-8 h-8" stroke-width="1.5" />
				</a>
			{/each}
		</div>
		<p use:inViewIntro={2} class="mt-10 text-center text-sm/6 text-passive-300">&copy; {new Date().getFullYear()} MiniKraken. All rights reserved.</p>
	</div>
</footer>