<script lang="ts">
	import Button from '$components/form/Button.svelte'
	import { Color } from '$components/enums/color'
	import { Style } from '$components/enums/style'
	import IconChevronRight from '$components/icons/IconChevronRight.svelte'
</script>

<h1 aria-hidden="true" class="hidden">Home</h1>

<section class="hero min-h-50vh flex justify-center items-center relative">
	<span aria-hidden="true" class="ambient absolute"></span>
	<div class="flex flex-col">
		<h2 class="text-4xl md:text-6xl w-9/10 max-w-130 font-900 text-base-content text-center m-auto">
			Set sail into a <span
				class="bg-gradient-to-tr from-blue-600 to-primary bg-clip-text text-transparent"
				>worry-free</span
			> IT.
		</h2>
		<div class="text-center font-light text-base-content/90 w-9/10 md:w-1/2 mx-auto my-5">
			Wij bieden gespacialiseerde <strong class="font-extrabold">IT-oplossingen</strong> en
			<strong class="font-extrabold">ondersteuning</strong>
			voor <strong class="font-extrabold">KMO</strong>'s, waarbij we uw technologische uitdagingen
			omzetten in groeikansen.
		</div>

		<div class="flex flex-col items-center">
			<div>
				<Button class="mt-3" color={Color.PRIMARY}>
					<span class="px-5">
						Boost <strong>NU</strong> uw Bedrijf
					</span>
				</Button>
			</div>
		</div>
	</div>
</section>
<section class="services text-base-content z-0">
	<h2 class="text-center text-5xl font-bold">Diensten</h2>
	<p class="text-center text-lg">Enkele van onze diensten</p>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
		<div class="service card relative prose gradient-1 grid-width-1">
			<span class="service-gradient"></span>
			<h3 class="mt-0">Online Presence</h3>
			<p>Hello World</p>
			<Button style={Style.BORDERED}>
				Lees verder <IconChevronRight class="w-5 -mx-1" />
			</Button>
		</div>
	</div>
</section>
<section></section>

<style lang="sass">
	.hero
		@apply relative z-0
		& .ambient
			@apply border-rd-[30%_70%_16%_84%/30%_30%_70%_70%] -z-1 m-auto w-45vh h-45vh bg-gradient-to-r from-cyan-200 to-cyan-400 opacity-20
			filter: blur(4rem)
			--webkit-filter: blur(4rem)

	.services
		@apply relative pt-25 pb-40
		&::before
			@apply absolute top-0 w-screen h-full -z-1 bg-base-300
			content: ''
			background: linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--fallback-b3, oklch(var(--b3))) 20%, var(--fallback-b3, oklch(var(--b3))) 80%, rgba(0,0,0,0) 100%)
			left: calc(-100vw / 2 + 50%)

	.service
		@apply transition-all transform-gpu rounded-2xl p-6 bg-gradient-to-r from-cyan-200 to-cyan-400
		&:hover
			@apply shadow-md

	@media (prefers-color-scheme: dark)
		.service
			@apply from-blue-900 to-cyan-800

</style>
