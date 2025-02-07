<script lang="ts">
import logo from '$assets/logo/minikraken-small.svg'
</script>

<header class="fixed z-100 w-full mt-7 sm:mt-10 md:mt-20">
	<div class="w-full">
		<div class="relative flex justify-between w-9/10 mx-auto">
			<div class="relative flex items-center justify-center">
				<a class="w-14" title="Home" href="/" aria-label="Home" >
					<img
						class="object-cover object-center"
						src="{ logo }"
						alt="MiniKraken Logo"
						loading="eager"
					/>
				</a>
				<div class="text-neutral font-bold sm:text-2xl md:text-4xl hidden sm:block">MiniKraken</div>
			</div>
			<nav class="relative hidden lg:flex">
				<div class="relative flex group/item relative">
					<a class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]" data-headlessui-state="" href="/pricing">Pricing</a>
				</div>
				<div class="relative flex group/item relative">
					<a class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]" data-headlessui-state="" href="/company">Company</a>
				</div>
				<div class="relative flex group/item relative">
					<a class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]" data-headlessui-state="" href="/blog">Blog</a>
				</div>
				<div class="relative flex group/item relative">
					<a class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]" data-headlessui-state="" href="/login">Login</a>
				</div>
			</nav>
		</div>
	</div>

	<div class="lg:hidden" id="headlessui-disclosure-panel-:rd:" data-headlessui-state="open" data-open="">
		<div class="flex flex-col gap-6 py-4">
			<div style="opacity: 1; will-change: auto; transform: none;">
				<a class="text-base font-medium text-gray-950" data-headlessui-state="" href="/pricing">Pricing</a>
			</div>
			<div style="opacity: 1; will-change: auto; transform: none;">
				<a class="text-base font-medium text-gray-950" data-headlessui-state="" href="/company">Company</a>
			</div>
			<div style="opacity: 1; will-change: auto; transform: none;">
				<a class="text-base font-medium text-gray-950" data-headlessui-state="" href="/blog">Blog</a>
			</div>
			<div style="opacity: 1; will-change: auto; transform: none;"><a class="text-base font-medium text-gray-950" data-headlessui-state="" href="/login">Login</a>
			</div>
		</div>
		<div class="absolute left-1/2 w-screen -translate-x-1/2">
			<div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
			<div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
		</div>
	</div>
</header>

<style>
</style>