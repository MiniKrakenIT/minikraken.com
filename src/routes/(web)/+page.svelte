<script lang="ts">
import CtaSection from '$lib/components/sections/cta/CtaSection.svelte'
import BentoGrid from '$lib/components/sections/grid/BentoGrid.svelte'
import Hero from '$lib/components/sections/hero/Hero.svelte'
import { store } from '$stores/navigation'
import { animate, stagger } from 'motion'
import { onMount } from 'svelte'

store.set({ fixedBackground: false })

onMount(() => {
	animate(
		'.intro',
		{
			opacity: [0, 1],
			y: ['1rem', 0],
			filter: ['blur(10px)', 'blur(0px)']
		},
		{ ease: 'easeOut', duration: 0.7, delay: stagger(0.2) }
	)
})
</script>

<svelte:head>
	<title>Minikraken - set Sail into worry-free IT</title>
	<meta name="description" content="Wij helpen jou als KMO efficienter te werken door het gebruik van software dat werkt."/>
</svelte:head>

<Hero/>
<BentoGrid/>
<CtaSection/>