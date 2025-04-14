<script lang="ts">
import Ocean from '$components/backgrounds/Ocean.svelte'
import Button from '$components/base/Button/Button.svelte'
import { Color, Size, Variant } from '$components/props'
import { services } from '$data/services'
import { Switch } from '$lib/motion/transitions/switch'
import { inView } from 'motion'
import { onMount } from 'svelte'
import { slide } from 'svelte/transition'

let index = $state(0)
let element: HTMLElement

onMount(() => {
	let interval: NodeJS.Timeout

	inView(element, (el) => {
		interval = setInterval(() => {
			index = (index + 1) % services.length
		}, 3500)

		return () => {
			clearInterval(interval)
		}
	})

	return () => {
		if (interval) clearInterval(interval)
	}
})
</script>

<div bind:this={element} class="overflow-hidden bg-base-300">
	<div class="relative">
		<div class="intro absolute overflow-hidden inset-2 sm:inset-3 rounded-8 ring-1 ring-black/5 ring-inset">
			<Ocean></Ocean>
		</div>
		<div class="relative px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="pt-30 pb-14 sm:pt-35 sm:pb-14 md:pt-50 md:pb-20">
					<h1 class="intro anim-delay-500 mt-4 md:mt-0 text-5vw md:text-4xl lg:text-5xl font-medium tracking-tight text-balance line-height-tight">
						Wij helpen bij <br>
						<span class="block pb-3 md:py-3 text-9vw md:text-6xl lg:text-7xl font-extrabold w-full">
							{#key index}
								<span
									class="block break-words sm:no-break bg-gradient-to-tl from-accent to-secondary bg-clip-text text-transparent line-height-tight sm:line-height-normal"
									transition:Switch
								>
									{services[index]}
								</span>
							{/key}
						</span>
					</h1>
					<p class="intro mt-6 max-w-lg text-sm sm:text-lg md:text-xl font-medium">
						Boost je bedrijf met ons als jouw totaalpartner voor IT. En bouw verder, zonder IT zorgen.
					</p>
					<div class="intro flex flex-col sm:flex-row gap-x-6 gap-y-4 mt-12  sm:justify-center md:justify-start">
						<Button variant={Variant.outline} color={Color.accent} size={{base: Size.md, md: Size.lg}}>
							plan een gesprek
						</Button>
						<Button variant={Variant.ghost} color={Color.accent} size={{base: Size.md, md: Size.lg}}>
							Succes verhalen
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.intro {
			opacity: 0;
	}
</style>