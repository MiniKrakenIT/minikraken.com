<script lang="ts">
import Button from '$components/base/Button/Button.svelte'
import { Color, Size, Variant } from '$components/props'
import { services } from '$data/services'
import { onMount } from 'svelte'
import { slide } from 'svelte/transition'

let index = $state(0)

onMount(() => {
	let interval = setInterval(() => {
		index = (index + 1) % services.length
	}, 3500)
	return () => clearInterval(interval)
})
</script>

<div class="overflow-hidden bg-base-300">
	<div class="relative">
		<div class="intro absolute inset-2 sm:inset-3 rounded-8 ring-1 ring-black/5 ring-inset bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="pt-26 pb-14 sm:pt-30 sm:pb-22 md:pt-45 md:pb-48">
					<h1 class="intro anim-delay-500 mt-4 md:mt-0 text-5xl font-medium tracking-tight text-balance text-slate-800 sm:text-7xl md:text-8xl">
						Wij helpen bij <br>
						{#key index}
							<div
								class="py-3 text-9vw md:text-8vw lg:text-8xl font-extrabold bg-gradient-to-lt from-teal-400 to-gray-800 bg-clip-text text-transparent"
								transition:slide
							>
								{services[index]}
							</div>
						{/key}
					</h1>
					<p class="intro mt-6 max-w-lg text-xl font-medium text-slate-800 sm:text-2xl">
						Boost je bedrijf met ons als jouw totaalpartner voor IT. En bouw verder, zonder IT zorgen.
					</p>
					<div class="intro flex flex-col sm:flex-row gap-x-6 gap-y-4 mt-12  sm:justify-center md:justify-start">
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