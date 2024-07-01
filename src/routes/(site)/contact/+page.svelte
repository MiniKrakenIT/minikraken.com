<script lang="ts">
	import type { ContactData } from '$lib/types/ContactData'
	import Input from '$components/form/Input.svelte'
	import Indicator from '$components/Indicator/Indicator.svelte'
	import { Style } from '$components/enums/style'
	import { Size } from '$components/enums/size'
	import { Color } from '$components/enums/color'
	import TextArea from '$components/form/TextArea.svelte'
	import Button from '$components/form/Button.svelte'
	import Alert from '$components/Alert.svelte'
	import IconError from '$components/icons/IconError.svelte'
	import IconSuccess from '$components/icons/IconSuccess.svelte'
	import { slide } from 'svelte/transition'
	import Link from '$components/form/Link.svelte'
	import { derived } from 'svelte/store'
	import { browser } from '$app/environment'

	const data: ContactData = $state({
		name: '',
		email: '',
		message: '',
		startTime: undefined
	})
	const handleSubmit = async () => {
		if (loading) return
		loading = true

		await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(data)
		})
			.then((response) => {
				if (response.ok) success = response.ok
				else
					throw new Error(
						`Failed to send contact form. Status: ${response.status} ${response.statusText}`
					)
			})
			.catch((error) => {
				console.error('error', error)
				success = false
			})
			.finally(() => {
				loading = false
			})
	}

	let success: boolean | undefined = undefined
	let loading = $state<boolean>(false)
	let validEmail = $derived.by(() => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email))
	let validForm = $derived(
		data.startTime !== undefined &&
			success === undefined &&
			data.message.length > 0 &&
			data.name.length > 0 &&
			validEmail
	)

	if (browser) {
		data.startTime = new Date().getTime()
	}
</script>

<section class="mx-auto my-10">
	<h1 class="text-6xl text-center font-bold text-primary">Contact</h1>
	<p class="text-4xl text-center font-light">Wij helpen u verder</p>
</section>
<section class="lg:w-5/10 mx-auto my-15">
	{#if success !== undefined}
		{#if success}
			<Alert color={Color.SUCCESS}>
				<IconSuccess />
				<p>Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.</p>
			</Alert>
		{:else}
			<Alert color={Color.ERROR}>
				<IconError />
				<div>
					<div class="font-bold">Er ging iets mis.</div>
					<div class="text-xs">
						Gelieve ons te contacteren via een van onze andere kanalen. Onze excuses voor het
						ongemak.
					</div>
				</div>
				<!-- todo: add # link to other channels -->
				<Button color={Color.ERROR}>bekijken</Button>
			</Alert>
		{/if}
	{:else}
		<form
			on:submit|preventDefault={handleSubmit}
			transition:slide={{ axis: 'y' }}
			data-form-type="contact"
		>
			<div class="flex flex-col">
				<Indicator
					size={Size.XSMALL}
					color={data.name.length > 0 ? Color.SUCCESS : Color.ERROR}
					class="mt-4 md:mt-6"
				>
					<Input
						type="text"
						name="name"
						data-form-type="name"
						class="w-full"
						maxlength="64"
						autocomplete="name"
						required
						placeholder="Uw naam"
						style={Style.BORDERED}
						disabled={success !== undefined}
						bind:value={data.name}
					/>
				</Indicator>

				<Indicator
					size={Size.XSMALL}
					color={validEmail ? Color.SUCCESS : Color.ERROR}
					class="mt-4 md:mt-6"
				>
					<Input
						type="email"
						name="email"
						data-form-type="email"
						class="w-full"
						maxlength="100"
						autocomplete="email"
						required
						placeholder="Uw e-mailadres"
						style={Style.BORDERED}
						disabled={success !== undefined}
						bind:value={data.email}
					/>
				</Indicator>
			</div>

			<Indicator
				size={Size.XSMALL}
				color={data.message.length > 0 ? Color.SUCCESS : Color.ERROR}
				class="mt-4 md:mt-6"
			>
				<TextArea
					name="message"
					class="resize-none h-40 w-full"
					placeholder="Uw bericht"
					required
					maxlength="500"
					style={Style.BORDERED}
					disabled={success !== undefined}
					bind:value={data.message}
				/>
			</Indicator>

			<Button
				type="submit"
				class="mt-4 md:mt-6 w-full"
				color={Color.PRIMARY}
				disabled={!validForm}
				{loading}
			>
				Versturen
			</Button>
		</form>
	{/if}
</section>
<section class="text-4xl text-center my-15">
	<h2 class="font-bold">Liever een meeting inplannen?</h2>
	<p>
		<Link
			color={Color.ACCENT}
			class="text-2xl"
			href="https://calendar.app.google/dY74hZkMKXNYzynF7"
			external
		>
			Maak een afspraak
		</Link>
	</p>
</section>
<span class="block bg-neutral w-14 h-2 mx-auto rounded-full"></span>
<section id="contact-info" class="flex flex-row flex-wrap gap-5 mt-15 scroll-mt-25">
	<div class="card">
		<h2 class="card-title">Adres</h2>
		<span class="separator"></span>
		<div>
			<Link href="https://maps.app.goo.gl/MmGek64cw6EGF1rn7" hover external>
				MiniKraken
				<br />
				Dendermondse Steenweg 56
				<br />
				9300 Aalst
			</Link>
		</div>
	</div>
	<div class="card">
		<h2 class="card-title">Contact</h2>
		<span class="separator"></span>
		<div>
			<p class="my-3">
				Telefoon: <Link href="tel:+32474773567" hover>+32 474 77 35 67</Link>
				<br />
				E-mail: <Link href="mailto:contact@minikraken.com" hover>contact@minikraken.com</Link>
				<br />
				BTW: BE0801788043
			</p>
		</div>
	</div>
	<div class="card">
		<h2 class="card-title">Openingsuren</h2>
		<span class="separator"></span>
		<div>
			<p class="my-3">
				Maandag - Zaterdag: 8:00 - 22:00
				<br />
				Zondag: Gesloten
			</p>
			<p class="text-sm text-warning/80">
				Voor urgente interventies zijn we ook buiten de openingsuren bereikbaar.
			</p>
		</div>
	</div>
</section>
<section class="mt-5">
	<div class="bg-base-100 w-full rounded-2xl p-7 flex flex-wrap md:flex-nowrap justify-between">
		<div class="md:max-w-1/3 p-5 sm:flex-shrink-0">
			<p class="text-xs md:text-md text-primary mb-2">HAVE A QUESTION OR IDEA?</p>
			<p class="text-2xl md:text-5xl">Let's get in touch</p>
		</div>
		<div class="flex flex-wrap gap-5 w-full justify-center lg:justify-end md:mr-2 items-center">
			<a
				href="mailto:contact+press@minikraken.com"
				class="block h-30 w-full sm:w-40 bg-primary/5 rounded-2xl"
			>
				<svg
					fill="currentColor"
					class="w-12 h-12 p-2 bg-primary text-primary-content rounded-2xl ml-5 mt-8 sm:mt-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M18.74 8.71a.75.75 0 0 0-.48-1.42c-.7.23-1.56.74-2.31 1.23a28 28 0 0 0-1.92 1.4.75.75 0 1 0 .94 1.17c.4-.33 1.08-.84 1.8-1.31a10 10 0 0 1 1.97-1.07m.47 3.05c.13.4-.08.82-.47.95a10 10 0 0 0-1.96 1.07 26 26 0 0 0-1.81 1.3.75.75 0 0 1-.94-1.17c.43-.34 1.15-.88 1.92-1.39.75-.5 1.61-1 2.31-1.23.4-.13.82.08.95.47"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2 4.12v11.49c0 .5.38.93.88 1.01 1.07.16 2.89.5 4.12 1 1.5.62 3.3 1.99 4.28 2.78.41.33 1.01.31 1.4-.04.87-.8 2.43-2.12 3.76-2.73 1.14-.53 3.4-.87 4.66-1.03.51-.06.9-.5.9-1V4.1a.97.97 0 0 0-1.1-.97c-1.28.17-3.37.5-4.46 1a17 17 0 0 0-3.76 2.73c-.39.35-.99.37-1.4.04A21 21 0 0 0 7 4.12c-1.15-.47-2.8-.8-3.9-.96a.96.96 0 0 0-1.1.96m5.57 12.12A20 20 0 0 0 3.5 15.2V4.74c.98.18 2.13.44 2.93.77 1.27.53 2.92 1.76 3.9 2.56q.44.33.92.47v9.94a19 19 0 0 0-3.68-2.24m5.18 2.06a15 15 0 0 1 3.07-2.04c.74-.34 1.74-.58 2.62-.75.73-.15 1.46-.26 2.06-.34V4.7q-.77.1-1.6.27c-.8.17-1.46.35-1.83.52-1.1.5-2.5 1.67-3.38 2.48q-.43.38-.94.54z"
					/>
				</svg>
				<p class="w-full text-center -mt-9 ml-7 sm:ml-auto sm:mt-2 text-xl sm:text-lg">pers</p>
			</a>
			<a
				href="mailto:contact+partners@minikraken.com"
				class="block h-30 w-full sm:w-40 bg-secondary/5 rounded-2xl"
			>
				<svg
					fill="currentColor"
					class="w-12 h-12 p-2 bg-secondary text-secondary-content rounded-2xl ml-5 mt-8 sm:mt-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M17.3 3.47c-.18.1-.42.1-.6 0A3 3 0 0 0 15.13 3a2.12 2.12 0 0 0-2.05 2.7c.39 1.47 2.67 2.76 3.56 3.21.23.12.5.12.72 0 .89-.45 3.17-1.74 3.56-3.2A2.12 2.12 0 0 0 18.77 3a3 3 0 0 0-1.47.47m2.17 1.85c-.05.21-.36.64-1.06 1.18-.48.37-1 .68-1.41.9-.4-.22-.93-.53-1.41-.9-.7-.54-1-.97-1.06-1.18a.7.7 0 0 1 .09-.57c.1-.13.25-.25.53-.25h.08a1 1 0 0 1 .33.07q.2.08.35.17c.66.41 1.52.41 2.18 0q.15-.1.35-.17a1 1 0 0 1 .4-.07c.29 0 .45.12.54.25q.16.22.1.57M2.82 7.25c-1 0-1.57.93-1.57 1.75v10c0 .82.57 1.75 1.57 1.75h2.86c1 0 1.57-.93 1.57-1.75v-.3l.09-.03c.51-.26.78-.3 1.03-.27.26.03.53.12 1.02.29l.3.1c1.83.62 4.31.83 6.64.31s4.61-1.81 5.84-4.26q.32-.61.37-1.16.03-.3-.13-.64a1 1 0 0 0-.5-.48 2 2 0 0 0-1.04-.12q-.5.05-1.1.2l-.94.24c-1.5.39-3.37.87-5.33.87h-.06a4 4 0 0 1-.77-.15c.46-.23 1.25-.53 2.53-.88l.08-.02c.75-.2 1.46-.75 1.46-1.57 0-.42-.21-.79-.54-1.03a2 2 0 0 0-1.13-.32c-.61 0-1.3.08-1.9.16l-.3.03q-1.12.16-1.65.07-.12-.03-.38-.17l-.08-.05a5 5 0 0 0-.58-.28 4 4 0 0 0-2.2-.4q-.4.1-.73.28V9c0-.82-.57-1.75-1.57-1.75zm5.7 9.66q-.63-.06-1.27.17V11.2l.2-.11c.46-.34.6-.44.8-.48s.55 0 1.38.32q.14.05.35.17l.14.08c.2.1.48.25.81.32a7 7 0 0 0 2.45-.09q.75-.1 1.4-.14a12 12 0 0 0-3.23 1.23 1.7 1.7 0 0 0-.7.8c-.17.46 0 .86.23 1.1.2.23.46.36.67.45q.34.14.68.23c.42.1.86.16 1.07.16 2.17 0 4.26-.54 5.77-.93l.84-.22q.5-.12.82-.16l-.1.22c-.97 1.94-2.78 3.02-4.83 3.48a11.3 11.3 0 0 1-6.08-.36c-.48-.16-.95-.33-1.4-.37M2.74 9q.01-.17.07-.23l.02-.02h2.82l.02.02q.06.06.07.23v10q-.01.17-.07.23l-.02.02H2.84l-.02-.02a.4.4 0 0 1-.07-.23z"
					/>
				</svg>
				<p class="w-full text-center -mt-9 ml-7 sm:ml-auto sm:mt-2 text-xl sm:text-lg">
					partnerships
				</p>
			</a>
			<a
				href="mailto:contact@minikraken.com"
				class="block h-30 w-full sm:w-40 bg-accent/5 rounded-2xl"
			>
				<svg
					fill="currentColor"
					class="w-12 h-12 p-2 bg-accent text-accent-content rounded-2xl ml-5 mt-8 sm:mt-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M13.04 10.1a.7.7 0 0 0-1.17.24l-.17.44a.75.75 0 0 1-1.4-.56l.18-.44a2.21 2.21 0 1 1 3.04 2.8l-.29.14a.9.9 0 0 0-.48.78.75.75 0 1 1-1.5 0c0-.9.5-1.72 1.3-2.12l.3-.14c.44-.22.53-.8.19-1.14m-.29 5.4a.75.75 0 0 0-1.5 0v.05a.75.75 0 0 0 1.5 0z"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.25 8A4.75 4.75 0 0 1 7 3.25h10A4.75 4.75 0 0 1 21.75 8v6.37a4.4 4.4 0 0 1-4.38 4.38c-.7 0-1.38.25-1.9.71l-1.66 1.45c-1.04.9-2.58.9-3.62 0l-1.66-1.45a3 3 0 0 0-1.9-.71 4.4 4.4 0 0 1-4.38-4.38zM7 4.75A3.25 3.25 0 0 0 3.75 8v6.37c0 1.59 1.3 2.88 2.88 2.88 1.07 0 2.1.39 2.9 1.08l1.65 1.45c.47.42 1.17.42 1.64 0l1.66-1.45c.8-.7 1.82-1.08 2.89-1.08 1.59 0 2.88-1.3 2.88-2.88V8c0-1.8-1.46-3.25-3.25-3.25z"
					/>
				</svg>
				<p class="w-full text-center -mt-9 ml-7 sm:ml-auto sm:mt-2 text-xl sm:text-lg">
					Andere vragen
				</p>
			</a>
		</div>
	</div>
</section>

<style lang="sass">
	.card
		@apply w-full rounded-2xl bg-base-100 p-10 flex-basis-3/10 grow
	.card-title
		@apply font-bold text-xl text-primary
	.separator
		@apply block w-1/5 lg\:w-1/3 h-1 my-3 rounded-full bg-primary
</style>
