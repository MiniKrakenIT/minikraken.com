<script lang="ts">
import Button from '$components/base/Button/Button.svelte'
import { Color, Size, Variant } from '$components/props'
</script>

<div class="overflow-hidden">
	<div class="relative">
		<div class="absolute inset-3 rounded-8 ring-1 ring-black/5 ring-inset bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]"></div>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="pt-26 pb-14 sm:pt-30 sm:pb-22 md:pt-45 md:pb-48">
					<h1 class="mt-4 md:mt-0 text-6xl font-medium tracking-tight text-balance text-gray-950 sm:text-8xl md:text-9xl">
						Close every deal.
					</h1>
					<p class="mt-6 max-w-lg text-xl font-medium text-gray-950 sm:text-2xl">
						Radiant helps you sell more by revealing sensitive information about your customers.
					</p>
					<div class="flex flex-col sm:flex-row gap-x-6 gap-y-4 mt-12  sm:justify-center md:justify-start">
						<Button variant={Variant.soft} size={{base: Size.md, md: Size.lg}}>
							Get started
						</Button>
						<Button variant={Variant.outline} color={Color.neutral} size={{base: Size.md, md: Size.lg}}>
							See pricing
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>