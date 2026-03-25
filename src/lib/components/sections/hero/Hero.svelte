<script lang="ts">
	import { slide } from 'svelte/transition'
	import Ocean from '$components/backgrounds/Ocean.svelte'
	import { services } from '$data/services'

	let index = $state(0)
</script>

<div class="relative inline-block w-full">
	<div class="mx-auto my-24 max-w-7xl px-6 pt-14 sm:my-32 md:my-56 lg:px-8">
		<div class="absolute top-0 left-0 -z-2 h-full w-full">
			<Ocean></Ocean>
		</div>
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="max-w-3xl" style="opacity: 1; transform: none;">
				<h1
					class="anim-delay-500 text-6vw mt-4 font-medium tracking-tight text-balance text-neutral-200 md:mt-0 md:text-4xl lg:text-5xl"
				>
					Wij helpen bij <br />
					<span
						class="text-9vw mt-2 box-border block w-full font-bold will-change-contents md:text-6xl lg:text-7xl"
					>
						{#key index}
							<span
								class="color-#416ba7 sm:no-break block bg-clip-text break-words text-transparent"
								transition:slide
							>
								{services[index]}
							</span>
						{/key}
					</span>
				</h1>
				<p class="mt-8 text-sm text-neutral-300 md:text-xl">
					Boost je bedrijf met ons als jouw totaalpartner voor IT. En bouw verder, efficienter en
					zonder zorgen.
				</p>
			</div>
		</div>
	</div>
</div>
