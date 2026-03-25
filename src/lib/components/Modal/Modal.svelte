<script module lang="ts">
	export enum Modifier {
		OPEN = 'open'
	}

	export enum Placement {
		TOP = 'top',
		MIDDLE = 'middle',
		BOTTOM = 'bottom',
		START = 'start',
		END = 'end'
	}
</script>

<script lang="ts">
	import xmark from 'iconoir/icons/regular/xmark.svg'
	import type { Snippet } from 'svelte'

	type Props = {
		open?: boolean
		modifier?: Modifier
		placement?: Placement
		actions: Snippet
		trigger: Snippet
		children: Snippet
		class?: string
	} & HTMLDialogElement

	let {
		open = false,
		modifier,
		placement,
		actions,
		trigger,
		children,
		class: classOverwrite
	}: Props = $props()

	let modal: HTMLDialogElement
	const classes = $derived([
		'modal',
		placement && `modal-${placement}`,
		modifier && `modal-${modifier}`,
		classOverwrite
	])

	$effect(() => {
		if (open) {
			modal.showModal()
		} else {
			modal.close()
		}
	})
</script>

<span
	onclick={() => {
		open = !open
	}}
	onkeydown={(event) => {
		if (event.key === 'Enter') open = !open
	}}
	role="button"
	tabindex="0">{@render trigger()}</span
>
<dialog bind:this={modal} class={classes}>
	<button>{xmark}</button>
	<div class="modal-box">
		{@render children()}
		<div class="modal-action">
			<form method="dialog">
				{@render actions?.()}
			</form>
		</div>
	</div>
</dialog>

<style global>
	@import 'daisyui/components/modal.css';
</style>
