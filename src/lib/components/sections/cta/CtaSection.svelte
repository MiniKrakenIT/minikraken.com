<script lang="ts">
import Button from '$components/base/Button/Button.svelte'
import { Variant } from '$components/props'
import { inViewIntro } from '$lib/utils/motion/in-view-intro'
</script>

<div class="relative rounded-8 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff]">
	<div class="absolute inset-2 sm:inset-3 rounded-8 bg-base-200/99 "></div>
	<div class="px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-7xl">
			<div class="relative pt-20 pb-16 text-center sm:py-24">
				<hgroup>
					<h2 use:inViewIntro={2} class="text-xs/5 font-semibold tracking-widest uppercase text-passive-100">Get started</h2>
					<p use:inViewIntro={2} class="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">Ready to dive in?<br>Start your free trial today.</p>
				</hgroup>
				<p use:inViewIntro={2} class="mx-auto mt-6 max-w-xs text-sm/6 text-passive-100">Get the cheat codes for selling and unlock your team's revenue potential.</p>
				<div use:inViewIntro={2} class="mt-6">
					<Button class="w-full sm:w-auto inline-flex items-center justify-center" variant={Variant.soft}>Get started</Button>
				</div>
			</div>
		</div>
	</div>
</div>