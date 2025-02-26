<script lang="ts">
import Button from '$components/base/Button/Button.svelte'
import { Color, Size, Variant } from '$components/props'
import { services } from '$data/services'
import { onMount } from 'svelte'
import { slide } from 'svelte/transition'
import { intro } from '$lib/utils/motion/intro'

let service = $state(services[0])

onMount(() => {
	let index = 1

	setInterval(() => {
		if (index >= services.length) index = 0
		service = services[index++]
	}, 3500)
})
</script>

<div class="overflow-hidden bg-base-300">
	<div class="relative">
		<div use:intro class="absolute inset-2 sm:inset-3 rounded-8 ring-1 ring-black/5 ring-inset bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="pt-26 pb-14 sm:pt-30 sm:pb-22 md:pt-45 md:pb-48">
					<h1 use:intro={8} class="anim-delay-500 mt-4 md:mt-0 text-5xl font-medium tracking-tight text-balance text-slate-800 sm:text-7xl md:text-8xl">
						Wij helpen bij <br>
						{#key service}
							<span class="block py-3 text-9vw md:text-8vw lg:text-8xl font-extrabold bg-gradient-to-bl from-slate-500 to-slate-800 bg-clip-text text-transparent" transition:slide={{ duration: 700 }}>
								{service}
							</span>
						{/key}
					</h1>
					<p  use:intro={14} class="mt-6 max-w-lg text-xl font-medium text-slate-800 sm:text-2xl">
						Boost je bedrijf met ons als jouw totaalpartner voor IT. En bouw verder, zonder IT zorgen.
					</p>
					<div use:intro={16} class="flex flex-col sm:flex-row gap-x-6 gap-y-4 mt-12  sm:justify-center md:justify-start">
						<Button variant={Variant.soft} size={{base: Size.md, md: Size.lg}}>
							Contacteer ons
						</Button>
						<Button variant={Variant.outline} color={Color.neutral} size={{base: Size.md, md: Size.lg}}>
							Success stories
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>