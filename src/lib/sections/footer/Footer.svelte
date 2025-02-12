<script>
import logo from '$assets/logo/minikraken-small.svg'
import Button from '$components/base/Button/Button.svelte'
import { Variant } from '$components/props.js'
</script>

<footer>
	<div class="relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
		<div class="absolute inset-3 rounded-8 bg-base-300"></div>
		<div class="px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-7xl">
				<div class="relative pt-20 pb-16 text-center sm:py-24">
					<hgroup>
						<h2 class="text-xs/5 font-semibold tracking-widest uppercase text-passive-100">Get started</h2>
						<p class="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">Ready to dive in?<br>Start your free trial today.</p>
					</hgroup>
					<p class="mx-auto mt-6 max-w-xs text-sm/6 text-passive-100">Get the cheat codes for selling and unlock your team's revenue potential.</p>
					<div class="mt-6">
						<Button class="w-full sm:w-auto inline-flex items-center justify-center" variant={Variant.soft}>Get started</Button>
					</div>
				</div>
				<div class="pb-16">
					<div class="relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
						<div aria-hidden="true" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
							<div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
							<div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
							<div class="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
							<div class="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
						</div>
						<div class="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
							<div class="col-span-2 flex">
								<div class="pt-6 lg:pb-6 group/item relative">
									<a class="w-14 flex items-center" title="Home" href="/" aria-label="Home" >
										<img
											class="object-cover object-center"
											src={logo}
											alt="MiniKraken Logo"
											loading="eager"
										/>
										<div class="text-base-content font-bold text-3xl lg:text-4xl hidden sm:block">MiniKraken</div>
									</a>
								</div>
							</div>
							<div class="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6"><div>
								<h3 class="text-sm/6 font-medium text-passive-100">Product</h3>
								<ul class="mt-6 space-y-4 text-sm/6">
									<li>
										<a class="font-medium text-base-content" href="/pricing">Pricing</a>
									</li>
									<li>
										<a class="font-medium text-base-content" href="#">Analysis</a>
									</li>
									<li>
										<a class="font-medium text-base-content" href="#">API</a>
									</li>
								</ul>
							</div>
								<div>
									<h3 class="text-sm/6 font-medium text-passive-100">Company</h3>
									<ul class="mt-6 space-y-4 text-sm/6">
										<li><a class="font-medium text-base-content" href="#">Careers</a></li>
										<li><a class="font-medium text-base-content" href="/blog">Blog</a></li>
										<li><a class="font-medium text-base-content" href="/company">Company</a></li>
									</ul>
								</div>
								<div>
									<h3 class="text-sm/6 font-medium text-passive-100">Support</h3>
									<ul class="mt-6 space-y-4 text-sm/6">
										<li><a class="font-medium text-base-content" href="#">Help center</a></li>
										<li><a class="font-medium text-base-content" href="#">Community</a></li>
									</ul>
								</div>
								<div>
									<h3 class="text-sm/6 font-medium text-passive-100">Company</h3>
									<ul class="mt-6 space-y-4 text-sm/6">
										<li><a class="font-medium text-base-content" href="#">Terms of service</a></li>
										<li><a class="font-medium text-base-content" href="#">Privacy policy</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="flex justify-between group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
						<div aria-hidden="true" class="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
							<div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
							<div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
							<div class="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
							<div class="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
						</div>
						<div>
							<div class="py-3 group/item relative">
								<div class="text-sm/6 text-passive-300">
									&copy <!-- -->{new Date().getFullYear()}<!-- --> MiniKraken.
								</div>
							</div>
						</div>
						<div class="flex">
							<div class="flex items-center gap-8 py-3 group/item relative">
								<a aria-label="Visit us on Facebook" class="text-passive-100" href="https://facebook.com" target="_blank">
									<svg class="size-4" fill="currentColor" viewBox="0 0 16 16"><path clip-rule="evenodd" d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z" fill-rule="evenodd"></path></svg>
								</a>
								<a aria-label="Visit us on X" class="text-passive-100" href="https://x.com" target="_blank">
									<svg class="size-4" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z"></path></svg>
								</a>
								<a aria-label="Visit us on LinkedIn" class="text-passive-100" href="https://linkedin.com" target="_blank">
									<svg class="size-4" fill="currentColor" viewBox="0 0 16 16"><path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z"></path></svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>