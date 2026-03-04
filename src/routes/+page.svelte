<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title } from '@data/home';
	import { useTitle } from '$lib/utils/helpers';
	import { getPlatfromIcon } from '$lib/utils';
	import { profileImage } from '@data/home';
	import { Platform } from '$lib/types';
	import { fade, fly } from 'svelte/transition';
	import { items as projects } from '@data/projects';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import { base } from '$app/paths';
	/* Solo los 2 primeros como destacados */
const featured = projects.slice(0, 2);

/* Animación al hacer scroll */
function inView(node: HTMLElement) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('visible');
				observer.unobserve(node);
			}
		},
		{ threshold: 0.2 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div
	class="relative flex flex-col md:flex-row items-center justify-between min-h-[85vh] px-6 md:px-20 z-10"
>
	<!-- LEFT SIDE -->
	<div in:fly={{ x: -40, duration: 600 }} class="max-w-xl text-left">
		<!-- NAME -->
		<h1
			in:fly={{ y: 20, duration: 500 }}
			class="text-4xl md:text-6xl font-bold leading-tight text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]"
		>
			{name}
		</h1>

		<!-- ROLE -->
		<h2 class="text-xl md:text-2xl font-medium text-gray-400 mt-2">
			{lastName}
		</h2>

		<!-- DESCRIPTION (AMARILLO COMO PEDISTE) -->
		<p class="mt-6 text-white-400 text-base md:text-lg leading-relaxed">
			{description}
		</p>

		<!-- SOCIAL BUTTONS -->
		<div class="flex gap-4 mt-8">
			{#each links as link}
				<a
					class={`${
						link.platform === Platform.CV
							? 'bg-violet-700 text-white hover:bg-violet-800 hover:shadow-violet-500/40'
							: 'bg-violet-700 text-white hover:bg-violet-800 hover:shadow-violet-500/40'
					} hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl flex items-center gap-2 no-underline`}
					href={link.link}
					target={link.platform === Platform.CV ? undefined : '_blank'}
					rel="noreferrer"
					download={link.platform === Platform.CV ? 'CV_Gerardo_Salazar' : undefined}
				>
					<Icon icon={getPlatfromIcon(link.platform)} color="white" size="20px" />

					<span class="text-sm font-medium">
						{link.label}
					</span>
				</a>
			{/each}
		</div>
	</div>

	<div class="mt-12 md:mt-0 md:ml-16 flex justify-center relative">
		<!-- Glow Background -->
		<div class="absolute w-72 h-72 bg-violet-600/30 blur-3xl rounded-full" />

		<!-- Image -->
		<div class="profile-wrapper">
	<img
		in:fade={{ duration: 700 }}
		src={profileImage}
		alt="Gerardo Salazar"
		class="profile-img"
	/>
</div>
	</div>
</div>

