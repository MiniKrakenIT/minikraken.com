<script lang="ts">
	import { animateOnIntersect } from '$lib/util/animateOnIntersect'
	import { onMount } from 'svelte'

	import Badge from '$components/Badge.svelte'

	import { Color } from '$lib/components/enums/color'
	import { Style } from '$lib/components/enums/style'
	import { Size } from '$lib/components/enums/size'

	onMount(() => {
		animateOnIntersect()
	})
</script>

<article class="prose mx-auto mt-10">
	<section class="appear-on-intersect">
		<h1 class="text-center">Privacybeleid</h1>
		<Badge color={Color.PRIMARY} style={Style.BORDERED} size={Size.SMALL}>
			Laatst geupdate: 11 Feb 2024
		</Badge>
		<p class="!mt-0">
			Privacy policy voor MiniKraken, eigenaar van <a
				class="site-link"
				href="https://minikraken.com"
			>
				https://minikraken.com
			</a>
			.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>1) Waarborgen Privacy</h3>
		<p>
			Het waarborgen van de privacy van bezoekers van <a
				class="site-link"
				href="https://minikraken.com"
			>
				https://minikraken.com
			</a>
			is een belangrijke taak voor ons. Daarom beschrijven we in onze privacy policy welke informatie
			we verzamelen en hoe we deze informatie gebruiken.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>2) Toestemming</h3>
		<p>
			Door de informatie en de diensten op <a class="site-link" href="https://minikraken.com">
				https://minikraken.com
			</a>
			te gebruiken, gaat u akkoord met onze privacy policy en de voorwaarden die wij hierin hebben opgenomen.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>3) Vragen</h3>
		<p>
			Als u meer informatie wilt ontvangen, of vragen hebt over de privacy policy van MiniKraken en
			specifiek <a class="site-link" href="https://minikraken.com">https://minikraken.com</a>
			, kun u ons benaderen via e-mail. Ons e-mailadres is contact@minikraken.com.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>4) Monitoren gedrag bezoeker</h3>
		<p>
			<a class="site-link" href="https://minikraken.com">https://minikraken.com</a>
			maakt gebruik van verschillende technieken om bij te houden wie de website bezoekt, hoe deze bezoeker
			zich op de website gedraagt en welke pagina’s worden bezocht. Dat is een gebruikelijke manier van
			werken voor websites omdat het informatie oplevert op die bijdraagt aan de kwaliteit van de gebruikerservaring.
			De informatie die we, via cookies, registreren, bestaat uit onder meer IP-adressen, het type browser
			en de bezochte
			<a class="site-link" href="https://minikraken.com/" target="_blank">startpagina</a>
			’s.
		</p>
		<p>
			Tevens monitoren we waar bezoekers de website voor het eerst bezoeken en vanaf welke pagina ze
			vertrekken. Deze informatie houden we anoniem bij en is niet gekoppeld aan andere persoonlijke
			informatie.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>5) Gebruik van cookies</h3>
		<p>
			<a class="site-link" href="https://minikraken.com">https://minikraken.com</a>
			plaatst cookies bij bezoekers. Dat doen we om informatie te verzamelen over de pagina’s die gebruikers
			op onze website bezoeken, om bij te houden hoe vaak bezoekers terug komen en om te zien welke pagina’s
			het goed doen op de website. Ook houden we bij welke informatie de browser deelt.
		</p>
	</section>

	<section class="appear-on-intersect">
		<h3>6) Cookies uitschakelen</h3>
		<p>
			U kunt er voor kiezen om cookies uit te schakelen. Dat doet u door gebruik te maken de
			mogelijkheden van uw browser. U vindt meer informatie over deze mogelijkheden op de website
			van de aanbieder van uw browser.
		</p>
	</section>
	<section class="appear-on-intersect">
		<h3>7) Cookies van derde partijen</h3>
		<p>
			Het is mogelijk dat derde partijen, zoals Google, op onze website adverteren of dat wij
			gebruik maken van een andere dienst. Daarvoor plaatsen deze derde partijen in sommige gevallen
			cookies. Deze cookies zijn niet door <a class="site-link" href="https://minikraken.com">
				https://minikraken.com
			</a>
			te beïnvloeden.
		</p>
	</section>
	<section class="appear-on-intersect">
		<h3>9) Privacy policy van adverteerders/derde partijen</h3>
		<p>
			Voor meer informatie over de privacy policy van onze adverteerders en derde partijen die
			verbonden zijn aan deze website, kun u terecht op de websites van deze respectievelijke
			partijen. <a class="site-link" href="https://minikraken.com">https://minikraken.com</a>
			kan geen invloed uitoefenen op deze cookies en de privacy policy van door derden geplaatste cookies.
			Deze cookies vallen buiten het bereik van de privacy policy van
			<a class="site-link" href="https://minikraken.com">https://minikraken.com</a>
			.
		</p>
	</section>
</article>

<style lang="sass">
	.site-link
		@apply font-mono
</style>
