<script lang="ts">
type ChildTemplate = {
	title: string
	subtitle: string
	description: string
	image: string
}

const gridValues: ChildTemplate[] = [
	{
		title: 'Performance',
		subtitle: 'Lightning-fast builds',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.',
		image: 'https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png'
	},
	{
		title: 'Releases',
		subtitle: 'Push to deploy',
		description:
			'Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.',
		image: 'https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png'
	},
	{
		title: 'Speed',
		subtitle: 'Built for power users',
		description: 'Sed congue eros non finibus molestie. Vestibulum euismod augue.',
		image: 'https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png'
	},
	{
		title: 'Integrations',
		subtitle: 'Connect your favorite tools',
		description: 'Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.',
		image: 'https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png'
	}
]
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-center text-base/7 font-semibold text-primary">Deploy faster</h2>
		<p class="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Everything you need to deploy your app</p>
		<div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
			<div class="relative lg:row-span-2">
				<div class="card lg:!rounded-l-[2rem]">
					<div class="card-text pb-3 sm:pb-0">
						<p class="title">Mobile friendly</p>
						<p class="description">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
					</div>
					<div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
						<div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
							<img class="size-full object-cover object-top" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="relative max-lg:row-start-1">
				<div class="card max-lg:!rounded-t-[2rem]">
					<div class="card-text">
						<p class="title">Performance</p>
						<p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.</p>
					</div>
					<div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
						<img class="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" alt="">
					</div>
				</div>
			</div>
			<div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
				<div class="card">
					<div class="card-text">
						<p class="title">Security</p>
						<p class="description">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.</p>
					</div>
					<div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
						<img class="h-[min(152px,40cqw)] object-cover" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt="">
					</div>
				</div>
			</div>
			<div class="relative lg:row-span-2">
				<div class="card max-lg:!rounded-b-[2rem] lg:!rounded-r-[2rem]">
					<div class="card-text pb-3 sm:pb-0">
						<p class="title">Powerful APIs</p>
						<p class="description">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
			@apply mt-2 text-lg font-medium tracking-tight text-passive-100 bg-base-100 max-lg:text-center;
	}

	.description {
			@apply mt-2 max-w-lg text-sm/6 text-passive-300 max-lg:text-center;
	}

	.card {
			@apply relative flex flex-col h-full bg-base-100 overflow-hidden pointer-events-none rounded-lg ring-1 shadow-sm ring-black/5;
	}

	.card-text {
			@apply px-8 pt-8 sm:px-10 sm:pt-10;
	}
</style>