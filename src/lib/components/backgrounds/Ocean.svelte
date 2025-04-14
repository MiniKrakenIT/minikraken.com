<script lang="ts">
import particlesBig from '$assets/particles/particles-big.svg'
import particlesMedium from '$assets/particles/particles-medium.svg'
import particlesSmall from '$assets/particles/particles-small.svg'
</script>

<div class="sea-background">
	<ul class="light-rays">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>

		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>

	<div class="relative h-full">
		<div class="bubbles">
			<img src="{particlesSmall}" alt="Background bubble particles"/>
			<img src="{particlesSmall}" alt="Background bubble particles"/>
		</div>
		<div class="bubbles">
			<img src="{particlesMedium}" alt="Background bubble particles"/>
			<img src="{particlesMedium}" alt="Background bubble particles"/>
		</div>
		<div class="bubbles">
			<img src="{particlesBig}" alt="Background bubble particles"/>
			<img src="{particlesBig}" alt="Background bubble particles"/>
		</div>
		<div class="bg-gradient-radial from-transparent to-[#112031]
 absolute inset w-full h-full"></div>
	</div>
</div>

<style>
		.bubbles img {
        position: absolute;
				left: 0;
				top: 0;
				height: 1000px;
				width: 100%;
        animation: scrollBubbles 55s linear infinite;
    }

		.bubbles img:nth-child(1) {
				left: 0;
				top: 1000px;
		}

		.bubbles:nth-of-type(1) img {
				animation-duration: 30s;
		}

    .bubbles:nth-of-type(2) img {
        animation-duration: 40s;
    }

    @keyframes scrollBubbles {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, -1000px, 0);
        }
    }

    .sea-background {
        width: 100%;
        height: 100%;
        background: radial-gradient(farthest-corner at 50% 0%, #23617d 0%, #112031 85%);
    }

    .light-rays > *::before, .light-rays {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .light-rays {
        pointer-events: none;
        filter: blur(0.6rem);
    }
    .light-rays > * {
        --deg: 0;
        --length: 0rem;
        --thickness: 20px;
        --duration: 2s;
        --delay: 1s;
        --rotate: 0deg;
        --degRange: 72.5deg;
        --spreadRange: 40vw;
        position: absolute;
        transform-style: preserve-3d;
        perspective: 500px;
        width: var(--thickness);
        height: calc(20% + 370px + var(--length));
        left: 50%;
        transform: translateX(calc(-50% + var(--deg) * var(--spreadRange) * -1 + 0.5 * var(--spreadRange))) translateY(-100px) rotateZ(calc(var(--degRange) * -0.5 + var(--deg) * var(--degRange))) rotateX(0.01deg);
        transform-origin: center -100px;
        mix-blend-mode: screen;
        -webkit-animation: shimmer linear var(--duration) calc(var(--delay) * -1) infinite alternate forwards, rotate ease-in-out calc(var(--duration) * 3.14) calc(var(--delay) * -1) infinite alternate forwards;
        animation: shimmer linear var(--duration) calc(var(--delay) * -1) infinite alternate forwards, rotate ease-in-out calc(var(--duration) * 3.14) calc(var(--delay) * -1) infinite alternate forwards;
    }
    .light-rays > *::before {
        content: "";
        background: linear-gradient(to bottom, #a6fff8, rgba(166, 255, 248, 0) 100%);
        transform-origin: top center;
        transform: rotateX(40deg);
    }
    .light-rays > *:nth-child(1) {
        --deg: 0.5878241887;
        --thickness: 13.9744211837px;
        --length: -3.0679126944px;
        --duration: 2.3452119804s;
        --delay: 2.5848056115s;
        --rotate: 1.588190805deg;
    }
    .light-rays > *:nth-child(2) {
        --deg: 0.3068466975;
        --thickness: 26.9556707256px;
        --length: -14.9217405409px;
        --duration: 2.3811439934s;
        --delay: 2.9431343391s;
        --rotate: 1.7873922734deg;
    }
    .light-rays > *:nth-child(3) {
        --deg: 0.9053582336;
        --thickness: 12.6054419947px;
        --length: 43.8177374514px;
        --duration: 1.7244576189s;
        --delay: 2.237291183s;
        --rotate: -1.3657197232deg;
    }
    .light-rays > *:nth-child(4) {
        --deg: 0.3446985869;
        --thickness: 12.5505021748px;
        --length: -25.9867276281px;
        --duration: 2.2876142486s;
        --delay: 2.2265807226s;
        --rotate: 0.4968208601deg;
    }
    .light-rays > *:nth-child(5) {
        --deg: 0.9123171092;
        --thickness: 28.3885231918px;
        --length: -26.5027151871px;
        --duration: 1.7630125517s;
        --delay: 2.1354630897s;
        --rotate: 0.7090628718deg;
    }
    .light-rays > *:nth-child(6) {
        --deg: 0.8927469788;
        --thickness: 14.2337074106px;
        --length: 31.2312851704px;
        --duration: 2.2309082974s;
        --delay: 2.632270543s;
        --rotate: 1.1563795462deg;
    }
    .light-rays > *:nth-child(7) {
        --deg: 0.4096048179;
        --thickness: 16.2120373697px;
        --length: -11.7751914143px;
        --duration: 1.3094775717s;
        --delay: 2.797574353s;
        --rotate: 1.6083386374deg;
    }
    .light-rays > *:nth-child(8) {
        --deg: 0.1061068282;
        --thickness: 22.7234433484px;
        --length: -1.2422446627px;
        --duration: 1.0688556861s;
        --delay: 2.8134818856s;
        --rotate: 0.8964598447deg;
    }
    .light-rays > *:nth-child(9) {
        --deg: 0.152889341;
        --thickness: 32.8065741006px;
        --length: 26.7906319135px;
        --duration: 1.1741093712s;
        --delay: 2.9259028678s;
        --rotate: 1.3644746359deg;
    }
    .light-rays > *:nth-child(10) {
        --deg: 0.0942499229;
        --thickness: 12.1585616842px;
        --length: -31.3629016562px;
        --duration: 1.3409034443s;
        --delay: 2.2170748869s;
        --rotate: 3.5726461408deg;
    }
    .light-rays > *:nth-child(11) {
        --deg: 0.0893951178;
        --thickness: 8.8966411104px;
        --length: 19.7909554752px;
        --duration: 2.0929037935s;
        --delay: 2.1930171518s;
        --rotate: 2.2889902697deg;
    }
    .light-rays > *:nth-child(12) {
        --deg: 0.3795281295;
        --thickness: 27.3348982506px;
        --length: 22.7948474315px;
        --duration: 1.1672530942s;
        --delay: 2.9283010119s;
        --rotate: 0.0314020521deg;
    }
    .light-rays > *:nth-child(13) {
        --deg: 0.3131980594;
        --thickness: 18.5869801562px;
        --length: -48.7125369087px;
        --duration: 1.4011488885s;
        --delay: 2.2384337715s;
        --rotate: -3.074950619deg;
    }
    .light-rays > *:nth-child(14) {
        --deg: 0.0442322893;
        --thickness: 14.3815832448px;
        --length: 25.6244892309px;
        --duration: 1.6632581752s;
        --delay: 2.16225965s;
        --rotate: 0.4754465504deg;
    }
    .light-rays > *:nth-child(15) {
        --deg: 0.5158428085;
        --thickness: 13.8132373952px;
        --length: 39.8862881195px;
        --duration: 1.4501117905s;
        --delay: 2.7929505558s;
        --rotate: 0.5697708878deg;
    }
    .light-rays > *:nth-child(16) {
        --deg: 0.914896482;
        --thickness: 25.742923416px;
        --length: -34.6400095223px;
        --duration: 2.4107717526s;
        --delay: 2.358069962s;
        --rotate: 0.3788434544deg;
    }
    .light-rays > *:nth-child(17) {
        --deg: 0.660865914;
        --thickness: 8.1601724608px;
        --length: 36.2161213554px;
        --duration: 1.0388957603s;
        --delay: 2.835536249s;
        --rotate: -1.3655657506deg;
    }
    .light-rays > *:nth-child(18) {
        --deg: 0.7292734357;
        --thickness: 15.8752869596px;
        --length: -47.1909649649px;
        --duration: 2.3484122171s;
        --delay: 2.6388058973s;
        --rotate: -3.5011059852deg;
    }
    .light-rays > *:nth-child(19) {
        --deg: 0.7778950927;
        --thickness: 19.6240867482px;
        --length: -34.2033193841px;
        --duration: 1.3033015871s;
        --delay: 2.9693523513s;
        --rotate: 1.4800361571deg;
    }
    .light-rays > *:nth-child(20) {
        --deg: 0.583996117;
        --thickness: 31.7403094313px;
        --length: 21.5131139066px;
        --duration: 2.4571761459s;
        --delay: 2.9938157433s;
        --rotate: 0.0065064689deg;
    }
    .light-rays > *:nth-child(21) {
        --deg: 0.1603631809;
        --thickness: 21.575164528px;
        --length: -39.1549978683px;
        --duration: 2.4724462739s;
        --delay: 2.6879435078s;
        --rotate: -0.1149057319deg;
    }
    .light-rays > *:nth-child(22) {
        --deg: 0.7218576769;
        --thickness: 18.0761535552px;
        --length: 34.7445370193px;
        --duration: 2.1430726299s;
        --delay: 2.8067326347s;
        --rotate: 0.5256038802deg;
    }
    .light-rays > *:nth-child(23) {
        --deg: 0.7273250573;
        --thickness: 12.4953631711px;
        --length: 11.277449628px;
        --duration: 2.1217350475s;
        --delay: 2.2568611365s;
        --rotate: 3.2384530048deg;
    }
    .light-rays > *:nth-child(24) {
        --deg: 0.5984522855;
        --thickness: 29.7261709562px;
        --length: -20.5950495042px;
        --duration: 1.8027633594s;
        --delay: 2.0777411245s;
        --rotate: -3.9628518975deg;
    }
    .light-rays > *:nth-child(25) {
        --deg: 0.5434889924;
        --thickness: 9.1884985528px;
        --length: 6.1976320715px;
        --duration: 2.2866226509s;
        --delay: 2.4471644341s;
        --rotate: 3.7144511908deg;
    }
    .light-rays > *:nth-child(26) {
        --deg: 0.1734442075;
        --thickness: 21.1138151744px;
        --length: -28.878216659px;
        --duration: 2.055570843s;
        --delay: 2.0290693665s;
        --rotate: 1.2065363742deg;
    }
    .light-rays > *:nth-child(27) {
        --deg: 0.2531562281;
        --thickness: 26.2223263124px;
        --length: -21.4858444708px;
        --duration: 1.2448911944s;
        --delay: 2.8000504588s;
        --rotate: 1.4701083081deg;
    }
    .light-rays > *:nth-child(28) {
        --deg: 0.7003848247;
        --thickness: 10.7781351213px;
        --length: 22.175575086px;
        --duration: 2.4780100656s;
        --delay: 2.3348674855s;
        --rotate: -2.6251015571deg;
    }
    .light-rays > *:nth-child(29) {
        --deg: 0.6481958569;
        --thickness: 24.2023724746px;
        --length: 47.0628947974px;
        --duration: 2.060305266s;
        --delay: 2.4501693848s;
        --rotate: -0.0927079388deg;
    }
    .light-rays > *:nth-child(30) {
        --deg: 0.0108185153;
        --thickness: 16.0461761406px;
        --length: 43.6169938338px;
        --duration: 2.3712474033s;
        --delay: 2.224502115s;
        --rotate: -0.5716145084deg;
    }
    .light-rays > *:nth-child(31) {
        --deg: 0.9261370741;
        --thickness: 10.1499398783px;
        --length: 1.6428647579px;
        --duration: 1.4109390689s;
        --delay: 2.1208035783s;
        --rotate: 2.0649868058deg;
    }
    .light-rays > *:nth-child(32) {
        --deg: 0.150183511;
        --thickness: 31.1497488477px;
        --length: 2.0338684629px;
        --duration: 1.5432194283s;
        --delay: 2.089908696s;
        --rotate: 1.4920033368deg;
    }

    @-webkit-keyframes shimmer {
        0% {
            opacity: 0.33;
        }
        100% {
            opacity: 0.03;
        }
    }

    @keyframes shimmer {
        0% {
            opacity: 0.33;
        }
        100% {
            opacity: 0.03;
        }
    }
    @-webkit-keyframes rotate {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: var(--rotate);
        }
    }
    @keyframes rotate {
        0% {
            rotate: 0deg;
        }
        100% {
            rotate: var(--rotate);
        }
    }
</style>