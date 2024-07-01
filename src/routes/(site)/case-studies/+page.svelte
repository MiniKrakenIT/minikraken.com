<script lang="ts">
	import '$lib/styles/components/link.css'
	import image from '$lib/assets/case-studies/coding/image.jpg?enhanced'
	import { animateOnIntersect } from '$lib/util/animateOnIntersect'
	import { onMount } from 'svelte'

	type BlogPost = {
		title: string
		content: string
		image?: Record<string, unknown>
		link: string
	}

	const featuredPost: BlogPost = {
		title: 'My first blog post',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum.',
		image: image,
		link: '/case-studies/my-first-blog-post'
	}

	const blogPosts: BlogPost[] = [
		{
			title: 'My first blog post',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum.',
			link: '/case-studies/my-first-blog-post'
		},
		{
			title: 'My second blog post',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum.',
			link: '/case-studies/my-first-blog-post'
		},
		{
			title: 'My third blog post',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vestibulum.',
			link: '/case-studies/my-first-blog-post'
		}
	]

	onMount(() => {
		animateOnIntersect()
	})
</script>

<article class="prose lg:prose-lg mx-auto mt-4 blog-container">
	<h1 class="appear-on-intersect">Case Studies</h1>
	<section class="appear-on-intersect">
		{#if featuredPost.image}
			<div class="rounded-2xl overflow-hidden featured-image">
				<enhanced:img
					src="{featuredPost.image}?w=1280;640;400"
					alt={'Featured post image for ' + featuredPost.title}
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
				/>
			</div>
		{/if}
		<h2>{featuredPost.title}</h2>
		<p>{featuredPost.content}</p>
		<a href={featuredPost.link}>Read more</a>
	</section>

	<h2 class="appear-on-intersect">Other reads</h2>
	<section>
		{#each blogPosts as post}
			<article class="appear-on-intersect">
				<h2>{post.title}</h2>
				{#if post.image}
					<img src={post.image} alt={post.title} />
				{/if}
				<p>{post.content}</p>
				<a class="link link-hover text-primary link-primary" href={post.link}>
					Read more
					<svg
						xmlns="http://www.w3.org/2000/svg"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						viewBox="0 0 24 24"
						class="w-5 mt-1 ml-1"
					>
						<path d="M5 12h14m-6 6 6-6m-6-6 6 6" />
					</svg>
				</a>
			</article>
		{/each}
	</section>
</article>

<style global lang="sass">
	.featured-image
		& picture
			@apply m-0
</style>
