<script lang="ts">
	import UIcon from '../Icon/UIcon.svelte';
	export let screenshot: { src: string; label: string } | undefined = undefined;
	export let index = 0;
	export let total = 1;

	export let onClose = () => {
		screenshot = undefined;
	};

	export let onNext: undefined | (() => void) = undefined;
	export let onPrev: undefined | (() => void) = undefined;

	$: show = typeof screenshot !== 'undefined';
</script>

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px z-100"
		on:click={onClose}
		on:click={(e) => e.stopPropagation()}
		on:keydown
		on:keypress
		on:keyup
		on:keyup
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"
			on:click={(e) => e.stopPropagation()}
			on:keydown
			on:keypress
			on:keyup
			on:keyup
		>
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					on:click={onClose}
					on:keydown
					on:keypress
					on:keyup
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
	<div class="row items-center justify-between w-100% gap-3">
				{#if total > 1 && onPrev}
					<button
						class="cursor-pointer flex items-center justify-center p-3 rounded-full border-[var(--border)] border-1px bg-[var(--main-80)] border-solid hover:border-[var(--border-hover)] hover:bg-[var(--main)] transition-colors"
						on:click={onPrev}
						title="Anterior"
					>
						<UIcon icon={'i-carbon-chevron-left'} classes="text-2xl" />
					</button>
				{:else}
					<div class="w-50px"></div>
				{/if}

				<div
					class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-center"
					style={`background-image: url(${screenshot?.src});`}
				/>

				{#if total > 1 && onNext}
					<button
						class="cursor-pointer flex items-center justify-center p-3 rounded-full border-[var(--border)] border-1px bg-[var(--main-80)] border-solid hover:border-[var(--border-hover)] hover:bg-[var(--main)] transition-colors"
						on:click={onNext}
						title="Siguiente"
					>
						<UIcon icon={'i-carbon-chevron-right'} classes="text-2xl" />
					</button>
				{:else}
					<div class="w-50px"></div>
				{/if}
			</div>
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{total > 1 ? `(${index + 1}/${total})` : screenshot?.label}
			</p>
		</div>
	</div>
{/if}
