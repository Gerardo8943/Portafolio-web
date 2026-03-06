<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { items, title } from '@data/experience';
	import type { Experience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	let result: Array<Experience> = [...items];

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search.toLowerCase();

		if (isBlank(query)) {
			result = items;
			return;
		}

		result = items.filter(
			(it) =>
				it.name.toLowerCase().includes(query) ||
				it.company.toLowerCase().includes(query) ||
				it.description.toLowerCase().includes(query)
		);
	};

	/* Animación scroll */
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

<SearchPage {title} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<!-- Línea central -->
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>

			{#each result as job, index (job.slug)}
				<div
					use:inView
					class={`experience-item flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[30px]`}
				>
					<div class="flex-1 hidden lg:flex" />

					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>

					<div class="flex-1 col items-stretch">
						<ExperienceCard experience={job} />
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>