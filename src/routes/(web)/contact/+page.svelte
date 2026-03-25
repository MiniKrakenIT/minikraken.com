<script lang="ts">
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'
	import { superForm } from 'sveltekit-superforms'
	import { browser } from '$app/environment'
	import Button from '$components/base/Button.svelte'
	import Input from '$components/base/Input.svelte'
	import TextArea from '$components/base/TextArea.svelte'
	import Loading from '$components/Loading.svelte'
	import { Color, Shape } from '$components/properties'
	import { store } from '$stores/navigation'
	import type { PageProps } from './$types'

	store.set({ fixedBackground: true })

	const { data }: PageProps = $props()

	const { form, errors, constraints, message, enhance, delayed } = superForm(data.form, {
		autoFocusOnError: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				showForm = false
			}
		},
		scrollToError: 'smooth',
		stickyNavbar: 'header'
	})

	let showForm = $state(true)

	onMount(() => {
		// biome-ignore lint/correctness/noUndeclaredVariables: sveltekit behaviour
		if (browser) $form.date = Date.now()
	})
</script>

<div class="relative mt-40 overflow-auto">
	<div class="mx-auto mt-5 mb-15 max-w-2xl text-center">
		<h2 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Contacteer ons!</h2>
		<p class="text-passive-300 mt-2 text-lg/8">
			Heeft u een vraag of wilt u meer informatie? Wij staan klaar om u te helpen!
		</p>
	</div>
	<div class="flex flex-col flex-wrap items-center justify-between md:flex-row">
		<div class="mx-auto w-1/2 max-w-125 rounded-3xl bg-base-100 px-5 py-15 shadow-md">
			<h2 class="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
				Stuur ons een bericht!
			</h2>
			{#if showForm}
				<div class="relative mt-10 flex flex-col items-center justify-center">
					{#if $message}<h3>{$message}</h3>{/if}
					<form
						method="POST"
						action="?/contact"
						class="w-full max-w-sm"
						class:blur-sm={$delayed ? true : undefined}
						use:enhance
					>
						<fieldset class="fieldset">
							<legend class="fieldset-legend">Naam</legend>
							<Input
								type="text"
								name="name"
								placeholder="Voor- en achternaam"
								class="w-full"
								disabled={$delayed}
								bind:value={$form.name}
								errors={$errors.name}
								{...$constraints.name}
							/>
						</fieldset>

						<fieldset class="fieldset">
							<legend class="fieldset-legend">Email</legend>
							<Input
								type="email"
								name="email"
								placeholder="john.doe@voorbeeld.be"
								class="w-full"
								disabled={$delayed}
								bind:value={$form.email}
								errors={$errors.email}
								{...$constraints.email}
							/>
						</fieldset>

						<fieldset class="fieldset">
							<legend class="fieldset-legend">Uw Bericht</legend>
							<TextArea
								name="message"
								placeholder="Ik ben overtuigd! Ik wil graag meer informatie over..."
								class="w-full resize-none"
								disabled={$delayed}
								bind:value={$form.message}
								errors={$errors.message}
								{...$constraints.message}
							/>
						</fieldset>

						<input type="hidden" name="date" bind:value={$form.date} />
						<input name="yourMomsName" class="w-1px h-1px bg-transparent text-transparent" />

						<Button
							color={{ base: Color.primary }}
							shape={Shape.block}
							disabled={$delayed}
							type="submit">Verstuur</Button
						>
					</form>
					{#if $delayed}
						<span class="absolute inset-0 flex items-center justify-center" transition:fade>
							<Loading />
						</span>
					{/if}
				</div>
			{/if}
		</div>
		<div class="w-1/2">Hello world</div>
	</div>
</div>

<style>
	@import 'daisyui/components/fieldset.css';
</style>
