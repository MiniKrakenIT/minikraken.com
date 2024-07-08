<script lang="ts">
	import { onMount } from 'svelte'
	import Button from '$components/form/Button.svelte'
	import Link from '$components/form/Link.svelte'
	import { Style } from '$components/enums/style'

	let show = $state<boolean>(false)
	let closeAnimation = $state<boolean>(false)

	const accept = () => {
		localStorage.setItem('cookie-accepted', 'true')
		closeAnimation = true
		setTimeout(() => {
			show = false
		}, 500)
	}

	onMount(() => {
		show = !localStorage.getItem('cookie-accepted')
	})
</script>

{#if show}
	<div class="cookie-banner {closeAnimation ? 'close' : ''}">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M8 13v.01" />
				<path d="M12 17v.01" />
				<path d="M12 12v.01" />
				<path d="M16 14v.01" />
				<path d="M11 8v.01" />
				<path
					d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296q -.745 1.18 -1.024 1.852q -.283 .684 -.66 2.216a3 3 0 0 1 -1.624 1.623q -1.572 .394 -2.216 .661q -.712 .295 -1.852 1.024a3 3 0 0 1 -2.296 0q -1.203 -.754 -1.852 -1.024q -.707 -.292 -2.216 -.66a3 3 0 0 1 -1.623 -1.624q -.397 -1.577 -.661 -2.216q -.298 -.718 -1.024 -1.852a3 3 0 0 1 0 -2.296q .719 -1.116 1.024 -1.852q .257 -.62 .66 -2.216a3 3 0 0 1 1.624 -1.623q 1.547 -.384 2.216 -.661q .687 -.285 1.852 -1.024a3 3 0 0 1 2.296 0"
				/>
			</svg>
			<div>
				<p class="text-xl">Welkom aan boord Kapitein!</p>
				<div class="text-xs">
					Om jouw de meest soepele zeilervaring te bieden, gebruiken we een kleine bemanning van
					Cookies. Ze helpen ons dingen te onthouden zonder te bespioneren en houden jouw reis
					'kraken-licious'! Lees meer over onze Cookies in ons <Link
						class="leading-normal"
						href="/legal/privacy-policy"
					>
						Privacybeleid
					</Link>.
				</div>
			</div>
		</div>

		<Button class="w-full sm:w-auto" style={Style.BORDERED} onclick={accept}>Verder zeilen!</Button>
	</div>
{/if}

<style lang="sass">
	.cookie-banner
		@apply fixed flex flex-col sm:flex-row gap-5 justify-center items-center p-5 sm:m-5 bottom-0 bg-base-100 bg-op-80 rounded-2xl shadow-lg z-12 border-base-300 border-op-70 border-1
		animation: slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)

		&.close
			animation: slide-down 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)

		&::before
			@apply absolute top-0 left-0 w-full h-full -z-1 rounded-inherit
			content: ''
			-webkit-backdrop-filter: blur(4px)
			backdrop-filter: blur(4px)

		& > div
			@apply flex gap-5 justify-between items-center
			& > svg
				@apply w-10 h-10 hover:text-primary transition-colors duration-500 flex-shrink-0

	@keyframes slide-up
		from
			transform: translateY(100%)
		to
			transform: translateY(0)

	@keyframes slide-down
		from
			transform: translateY(0)
		to
			transform: translateY(100%)
</style>
