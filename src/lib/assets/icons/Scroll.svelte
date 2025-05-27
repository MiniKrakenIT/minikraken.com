<script lang="ts">
</script>

<span class="scroll-icon">
	<span class="scroll-icon-dot"></span>
	<span class="scroll-icon-dot"></span>
</span>

<style>
	@keyframes scroll {
			100%  { opacity: 0; }
			75%  { transform: translateY(0); opacity: 1; }
			0% { transform: translateY(.75em); opacity: 1; }
	}

  .scroll-icon-dot {
      display: block;
      position: absolute;
      left: 61%;
      background: #bababa;
      height: .5rem;
      width: .5rem;
      top: .6rem;
      margin-left: -.25rem;
      border-radius: 50%;
      transform-origin: top center;
      backface-visibility: hidden;
      animation: scroll 2s ease-out infinite;
  }

	.scroll-icon-dot:nth-child(1) {
			left: 39%;

	}

  .scroll-icon {
      display: block;
      position: relative;
      height: 3rem;
      width: 4rem;
      border: .15rem solid #bababa;
      border-radius: .7rem;
			margin-left: -2rem;
  }
</style>