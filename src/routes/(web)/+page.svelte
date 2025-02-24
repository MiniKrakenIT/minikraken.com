<script lang="ts">
import CtaSection from '$lib/components/sections/cta/CtaSection.svelte'
import BentoGrid from '$lib/components/sections/grid/BentoGrid.svelte'
import Hero from '$lib/components/sections/hero/Hero.svelte'
import { store } from '$stores/navigation'

store.set({ fixedBackground: false })

const heroStrings = [
	'Radiant helps you sell more by revealing sensitive information about your customers.',
	'Radiant helps you sell more something or another',
	'Radiant helps you sell more by revealing something or another'
]
</script>

<svelte:head>
	<title>Minikraken - set Sail into worry-free IT</title>
	<meta name="description" content="Wij helpen jou als KMO efficienter te werken door het gebruik van software dat werkt."/>
</svelte:head>

<Hero/>
<BentoGrid/>
<CtaSection/>