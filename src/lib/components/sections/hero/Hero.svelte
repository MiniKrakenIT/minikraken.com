<script lang="ts">
import Scroll from '$assets/icons/Scroll.svelte'
import Ocean from '$components/backgrounds/Ocean.svelte'
import { services } from '$data/services'
import { slide } from 'svelte/transition'

let index = $state(0)
</script>

<div class="relative w-full inline-block">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 my-24 sm:my-32 md:my-56 pt-14">
		<div class="absolute left-0 top-0 w-full h-full -z-2">
			<Ocean></Ocean>
		</div>
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="max-w-3xl" style="opacity: 1; transform: none;">
				<h1 class="anim-delay-500 mt-4 md:mt-0 text-6vw md:text-4xl lg:text-5xl font-medium tracking-tight text-balance text-neutral-200">
					Wij helpen bij <br>
					<span class="block box-border will-change-contents mt-2 text-9vw md:text-6xl lg:text-7xl font-bold w-full">
						{#key index}
							<span
								class="block break-words color-#416ba7 sm:no-break bg-clip-text text-transparent"
								transition:slide
							>
								{services[index]}
							</span>
						{/key}
					</span>
				</h1>
				<p class="mt-8 text-sm md:text-xl text-neutral-300">Boost je bedrijf met ons als jouw totaalpartner voor IT. En bouw verder, efficienter en zonder zorgen.</p>
			</div>
		</div>
	</div>
	<span class="absolute bottom-10 left-1/2">
		<Scroll />
	</span>
</div>

<style>
</style>