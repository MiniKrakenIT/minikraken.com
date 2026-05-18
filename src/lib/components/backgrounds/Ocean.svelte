<script lang="ts">
	import particlesBig from '$assets/particles/particles-big.svg'
	import particlesMedium from '$assets/particles/particles-medium.svg'
	import particlesSmall from '$assets/particles/particles-small.svg'
	import { rays, bubbles } from '$lib/motion/ocean.svelte'

	const rayOptions = [
		{
			deg: 0.588,
			thickness: 13.974,
			length: -3.068,
			duration: 2.345,
			delay: 2.585,
			rotate: 1.588
		},
		{
			deg: 0.307,
			thickness: 26.956,
			length: -14.922,
			duration: 2.381,
			delay: 2.943,
			rotate: 1.787
		},
		{
			deg: 0.905,
			thickness: 12.605,
			length: 43.818,
			duration: 1.724,
			delay: 2.237,
			rotate: -1.366
		},
		{
			deg: 0.345,
			thickness: 12.551,
			length: -25.987,
			duration: 2.288,
			delay: 2.227,
			rotate: 0.497
		},
		{
			deg: 0.912,
			thickness: 28.389,
			length: -26.503,
			duration: 1.763,
			delay: 2.135,
			rotate: 0.709
		},
		{
			deg: 0.893,
			thickness: 14.234,
			length: 31.231,
			duration: 2.231,
			delay: 2.632,
			rotate: 1.156
		},
		{
			deg: 0.41,
			thickness: 16.212,
			length: -11.775,
			duration: 1.309,
			delay: 2.798,
			rotate: 1.608
		},
		{
			deg: 0.106,
			thickness: 22.723,
			length: -1.242,
			duration: 1.069,
			delay: 2.813,
			rotate: 0.896
		},
		{
			deg: 0.153,
			thickness: 32.807,
			length: 26.791,
			duration: 1.174,
			delay: 2.926,
			rotate: 1.364
		},
		{
			deg: 0.094,
			thickness: 12.159,
			length: -31.363,
			duration: 1.341,
			delay: 2.217,
			rotate: 3.573
		},
		{
			deg: 0.089,
			thickness: 8.897,
			length: 19.791,
			duration: 2.093,
			delay: 2.193,
			rotate: 2.289
		},
		{
			deg: 0.38,
			thickness: 27.335,
			length: 22.795,
			duration: 1.167,
			delay: 2.928,
			rotate: 0.031
		},
		{
			deg: 0.313,
			thickness: 18.587,
			length: -48.713,
			duration: 1.401,
			delay: 2.238,
			rotate: -3.075
		},
		{
			deg: 0.044,
			thickness: 14.382,
			length: 25.624,
			duration: 1.663,
			delay: 2.162,
			rotate: 0.475
		},
		{
			deg: 0.516,
			thickness: 13.813,
			length: 39.886,
			duration: 1.45,
			delay: 2.793,
			rotate: 0.57
		},
		{
			deg: 0.915,
			thickness: 25.743,
			length: -34.64,
			duration: 2.411,
			delay: 2.358,
			rotate: 0.379
		},
		{
			deg: 0.661,
			thickness: 8.16,
			length: 36.216,
			duration: 1.039,
			delay: 2.836,
			rotate: -1.366
		},
		{
			deg: 0.729,
			thickness: 15.875,
			length: -47.191,
			duration: 2.348,
			delay: 2.639,
			rotate: -3.501
		},
		{
			deg: 0.778,
			thickness: 19.624,
			length: -34.203,
			duration: 1.303,
			delay: 2.969,
			rotate: 1.48
		},
		{
			deg: 0.584,
			thickness: 31.74,
			length: 21.513,
			duration: 2.457,
			delay: 2.994,
			rotate: 0.007
		},
		{
			deg: 0.16,
			thickness: 21.575,
			length: -39.155,
			duration: 2.472,
			delay: 2.688,
			rotate: -0.115
		},
		{
			deg: 0.721,
			thickness: 18.076,
			length: 34.744,
			duration: 2.143,
			delay: 2.806,
			rotate: 0.525
		},
		{
			deg: 0.727,
			thickness: 12.495,
			length: 11.277,
			duration: 2.121,
			delay: 2.256,
			rotate: 3.238
		},
		{
			deg: 0.598,
			thickness: 29.726,
			length: -20.595,
			duration: 1.802,
			delay: 2.077,
			rotate: -3.962
		},
		{
			deg: 0.543,
			thickness: 9.188,
			length: 6.197,
			duration: 2.286,
			delay: 2.447,
			rotate: 3.714
		},
		{
			deg: 0.173,
			thickness: 21.113,
			length: -28.878,
			duration: 2.055,
			delay: 2.029,
			rotate: 1.206
		},
		{
			deg: 0.253,
			thickness: 26.222,
			length: -21.485,
			duration: 1.244,
			delay: 2.8,
			rotate: 1.47
		},
		{
			deg: 0.7,
			thickness: 10.778,
			length: 22.175,
			duration: 2.478,
			delay: 2.334,
			rotate: -2.625
		},
		{
			deg: 0.648,
			thickness: 24.202,
			length: 47.062,
			duration: 2.06,
			delay: 2.45,
			rotate: -0.092
		},
		{
			deg: 0.01,
			thickness: 16.046,
			length: 43.616,
			duration: 2.371,
			delay: 2.224,
			rotate: -0.571
		},
		{
			deg: 0.926,
			thickness: 10.149,
			length: 1.642,
			duration: 1.41,
			delay: 2.12,
			rotate: 2.064
		},
		{
			deg: 0.15,
			thickness: 31.149,
			length: 2.033,
			duration: 1.543,
			delay: 2.089,
			rotate: 1.492
		}
	]
</script>

<div class="sea-background bg-blend-multiply">
	<ul class="light-rays">
		{#each rayOptions as ray}
			<li
				{@attach rays}
				style="--deg: {ray.deg}; --thickness: {ray.thickness}px; --length: {ray.length}px; --duration: {ray.duration}s; --delay: {ray.delay}s; --rotate: {ray.rotate}deg;"
			></li>
		{/each}
	</ul>

	<div class="relative h-full overflow-hidden">
		<div class="bubbles">
			<img {@attach bubbles} src={particlesSmall} alt="Background bubble particles" />
			<img {@attach bubbles} src={particlesSmall} alt="Background bubble particles" />
		</div>
		<div class="bubbles">
			<img {@attach bubbles} src={particlesMedium} alt="Background bubble particles" />
			<img {@attach bubbles} src={particlesMedium} alt="Background bubble particles" />
		</div>
		<div class="bubbles">
			<img {@attach bubbles} src={particlesBig} alt="Background bubble particles" />
			<img {@attach bubbles} src={particlesBig} alt="Background bubble particles" />
		</div>
		<div
			class="bg-gradient-radial inset absolute h-full w-full from-transparent to-[#112031]"
		></div>
	</div>
</div>

<style>
	.bubbles img {
		position: absolute;
		left: 0;
		top: 0;
		height: 1000px;
		width: 100%;
		animation: scrollBubbles 55s linear infinite;
	}

	.bubbles img:nth-child(1) {
		left: 0;
		top: 1000px;
	}

	.bubbles:nth-of-type(1) img {
		animation-duration: 30s;
	}

	.bubbles:nth-of-type(2) img {
		animation-duration: 40s;
	}

	@keyframes scrollBubbles {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(0, -1000px, 0);
		}
	}

	.sea-background {
		width: 100%;
		height: 100%;
		background: radial-gradient(farthest-corner at 50% 0%, #23617d 0%, #112031 85%);
	}

	.light-rays > *::before,
	.light-rays {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.light-rays {
		pointer-events: none;
		filter: blur(0.6rem);
	}

	.light-rays > * {
		--deg: 0;
		--length: 0rem;
		--thickness: 20px;
		--duration: 2s;
		--delay: 1s;
		--rotate: 0deg;
		--degRange: 72.5deg;
		--spreadRange: 40vw;
		will-change: transform;
		position: absolute;
		transform-style: preserve-3d;
		perspective: 500px;
		width: var(--thickness);
		height: calc(20% + 370px + var(--length));
		left: 50%;
		transform: translateX(
				calc(-50% + var(--deg) * var(--spreadRange) * -1 + 0.5 * var(--spreadRange))
			)
			translateY(-100px) rotateZ(calc(var(--degRange) * -0.5 + var(--deg) * var(--degRange)))
			rotateX(0.01deg);
		transform-origin: center -100px;
		mix-blend-mode: screen;
		animation:
			shimmer linear var(--duration) calc(var(--delay) * -1) infinite alternate forwards,
			rotate ease-in-out calc(var(--duration) * 3.14) calc(var(--delay) * -1) infinite alternate
				forwards;
	}

	.light-rays > *::before {
		content: '';
		background: linear-gradient(to bottom, #a6fff8, rgba(166, 255, 248, 0) 100%);
		transform-origin: top center;
		transform: rotateX(40deg);
	}

	@keyframes shimmer {
		0% {
			opacity: 0.33;
		}
		100% {
			opacity: 0.03;
		}
	}

	@keyframes rotate {
		0% {
			rotate: 0deg;
		}
		100% {
			rotate: var(--rotate);
		}
	}
</style>
