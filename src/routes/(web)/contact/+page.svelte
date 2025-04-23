<script lang="ts">
import Button from '$components/base/Button.svelte'
import Input from '$components/base/Input.svelte'
import { Color, Shape } from '$components/props'
import { store } from '$stores/navigation'
import { superForm } from 'sveltekit-superforms'
import type { PageProps } from './$types'

store.set({ fixedBackground: true })

const { data }: PageProps = $props()
const { form, errors, constraints, message, enhance } = superForm(data.form)

$form.date = Date.now()
</script>

<div class="py-8 sm:py-16">
	<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
		<div class="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
			<div class="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
				<div>
					<h2 class="text-4xl font-semibold tracking-tight text-pretty">Get in touch</h2>
					<p class="mt-4 text-base/7 text-passive-100">Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.</p>
				</div>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Collaborate</h3>
						<dl class="mt-3 space-y-1 text-sm/6 text-gray-600">
							<div>
								<dt class="sr-only">Email</dt>
								<dd><a class="font-semibold text-indigo-600" href="mailto:collaborate@example.com">collaborate@example.com</a></dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 905-2345</dd>
							</div>
						</dl>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Press</h3>
						<dl class="mt-3 space-y-1 text-sm/6 text-gray-600">
							<div>
								<dt class="sr-only">Email</dt>
								<dd><a class="font-semibold text-indigo-600" href="mailto:press@example.com">press@example.com</a></dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 905-3456</dd>
							</div>
						</dl>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Join our team</h3>
						<dl class="mt-3 space-y-1 text-sm/6 text-gray-600">
							<div>
								<dt class="sr-only">Email</dt>
								<dd><a class="font-semibold text-indigo-600" href="mailto:careers@example.com">careers@example.com</a></dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 905-4567</dd>
							</div>
						</dl>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Say hello</h3>
						<dl class="mt-3 space-y-1 text-sm/6 text-gray-600">
							<div>
								<dt class="sr-only">Email</dt>
								<dd><a class="font-semibold text-indigo-600" href="mailto:hello@example.com">hello@example.com</a></dd>
							</div>
							<div class="mt-1">
								<dt class="sr-only">Phone number</dt>
								<dd>+1 (555) 905-5678</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
				<div>
					<h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900">Locations</h2>
					<p class="mt-4 text-base/7 text-gray-600">Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.</p>
				</div>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Los Angeles</h3>
						<address class="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
							<p>4556 Brendan Ferry</p>
							<p>Los Angeles, CA 90210</p>
						</address>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">New York</h3>
						<address class="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
							<p>886 Walter Street</p>
							<p>New York, NY 12345</p>
						</address>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Toronto</h3>
						<address class="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
							<p>7363 Cynthia Pass</p>
							<p>Toronto, ON N3Y 4H8</p>
						</address>
					</div>
					<div class="rounded-2xl bg-gray-50 p-10">
						<h3 class="text-base/7 font-semibold text-gray-900">Chicago</h3>
						<address class="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
							<p>726 Mavis Island</p>
							<p>Chicago, IL 60601</p>
						</address>
					</div>
				</div>
			</div>
		</div>

		{#if $message}<h3>{$message}</h3>{/if}

		<form method="POST" action="?/contact" use:enhance class="flex flex-col w-full">
			<p>Naam:</p>
			<Input
				type="text"
				name="name"
				bind:value={$form.name}
				errors={$errors.name}
				{...$constraints.name} />

			<p>Email:</p>
			<input
				type="email"
				name="email"
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
				{...$constraints.email} />
			{#if $errors.email}<span class="text-red">{$errors.email}</span>{/if}

			<input type="hidden" name="date" bind:value={$form.date}/>
			<input name="yourMomsName" class="w-1px h-1px bg-transparent text-transparent"/>

			<Button color={{base: Color.primary}} shape={Shape.block} type="submit">Verstuur</Button>
		</form>
	</div>
</div>