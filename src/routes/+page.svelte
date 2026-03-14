<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, profileImage } from '@data/home';
	import { useTitle } from '$lib/utils/helpers';
	import { getPlatfromIcon } from '$lib/utils';
	import { Platform } from '$lib/types';
	import Icon from '$lib/components/Icon/Icon.svelte';

	let aboutCode = '';

	const fullAboutCode = `<?php
namespace App\\Developer;

class Gerardo {
    public function getStack() {
        return [
            'backend'  => 'Laravel',
            'frontend' => 'Livewire',
            'database' => 'SQL'
        ];
    }
}`;

	let aboutVisible = false;
	let isCodeFinished = false;

	function triggerAbout(node: HTMLElement) {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !aboutVisible) {
					aboutVisible = true;
					let j = 0;

					const typeChar = () => {
						if (j < fullAboutCode.length) {
							aboutCode += fullAboutCode[j];
							j++;
							setTimeout(typeChar, Math.random() * 20 + 10);
						} else {
							isCodeFinished = true;
						}
					};

					setTimeout(typeChar, 400);
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
	class="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-6 md:px-16 lg:px-24 z-10 overflow-visible py-12"
>
	<div in:fly={{ x: -40, duration: 600 }} class="max-w-2xl text-left z-20">
		<h1
			class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)] m-0"
		>
			{name}
		</h1>

		<h2 class="text-xl md:text-2xl font-medium text-gray-400 mt-2">
			{lastName}
		</h2>

		<p class="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-prose">
			{description}
		</p>

		<div class="flex flex-wrap items-center gap-3 mt-8">
			{#each links as link, i}
				<div in:fly={{ y: 10, delay: 400 + i * 100 }} class="flex-shrink-0">
					<a
						class="bg-violet-700 text-white hover:bg-violet-800 hover:scale-105 transition-all duration-300 px-5 py-2.5 rounded-xl flex items-center gap-2 no-underline border border-white/5 text-sm md:text-base font-medium"
						href={link.link}
						target={link.platform === Platform.CV ? undefined : '_blank'}
					>
						<Icon icon={getPlatfromIcon(link.platform)} color="white" size="18px" />
						{link.label}
					</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="mt-12 md:mt-0 flex justify-center relative p-8 md:p-12">
		<div class="absolute w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full" />

		<div class="profile-container" in:scale={{ duration: 700, start: 0.8 }}>
			<div class="ring-orbit ring-1" />
			<div class="ring-orbit ring-2" />

			<div class="profile-wrapper">
				<img src={profileImage} alt={name} class="profile-img" />
			</div>
		</div>
	</div>
</div>
<br />
<section
	use:triggerAbout
	class="about relative min-h-[60vh] py-24 border-t border-white/5 overflow-hidden"
>
	<div class="about-bg" />

	<div class="max-w-6xl mx-auto px-6 md:px-20 relative z-10">
		<h3 class="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-4">
			Sobre mí
			<div class="h-[1px] flex-grow bg-gradient-to-r from-violet-500/50 to-transparent" />
		</h3>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div class="w-full">
				{#if aboutVisible}
					<div
						in:fly={{ x: -30, duration: 1000 }}
						class="relative rounded-2xl overflow-hidden border border-violet-500/40 bg-[#050505] p-1 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
					>
						<!-- EDITOR DE CÓDIGO -->

						<div class="code-editor">
							<div class="editor-header">
								<span class="dot red" />
								<span class="dot yellow" />
								<span class="dot green" />
								<span class="file">Gerardo.php</span>
							</div>

							<div class="editor-body">
								<pre class="neon-text text-sm md:text-base leading-relaxed overflow-x-auto">
{aboutCode}<span class="cursor">|</span>
                                </pre>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<div class="flex flex-col gap-6 justify-center">
				{#if isCodeFinished}
					<div in:fly={{ x: 30, duration: 800 }} class="space-y-6">
						<div
							class="inline-block px-4 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-mono tracking-widest uppercase"
						>
							Fullstack Developer
						</div>

						<p class="text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
							Desarrollador web,
							<span class="text-white font-semibold border-b-2 border-violet-500/50">
								enfocado en frontend y backend</span
							>.
						</p>

						<p class="text-gray-400 text-lg md:text-xl leading-relaxed">
							Ingeniero en informatica, con 3 años de experiencia en el sector publico y privado.
							Enfocado en la creacion de paginas web, sistemas administrativos ademas de mejorar el
							<span class="text-violet-400 italic">rendimiento</span>
							y la
							<span class="text-violet-400 italic">escalabilidad</span>
							de los productos
						</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		position: relative;
	}

	.about-bg {
		position: absolute;
		top: 0;
		bottom: 0;

		/* esto hace que se salga hacia la derecha */
		left: 0;
		width: 140vw;

		background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));

		z-index: 0;
	}

	pre {
		margin: 0;
		padding: 0;
		white-space: pre-wrap;
		word-break: break-all;
	}

	.neon-text {
		color: #f3e8ff;
	}

	.cursor {
		display: inline-block;
		width: 10px;
		background-color: #a855f7;
		margin-left: 4px;
		animation: blink 1s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	/* EDITOR */

	.code-editor {
		background: #0d1117;
		border-radius: 12px;
		overflow: hidden;
	}

	.editor-header {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 10px 14px;
		background: #161b22;
	}

	.file {
		margin-left: 10px;
		font-size: 13px;
		color: #8b949e;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.red {
		background: #ff5f56;
	}
	.yellow {
		background: #ffbd2e;
	}
	.green {
		background: #27c93f;
	}

	.editor-body {
		padding: 20px 24px;
	}

	/* PERFIL */

	.profile-container {
		position: relative;

		.profile-wrapper {
			position: relative;
			z-index: 5;
			border-radius: 40px 100px;
			overflow: hidden;

			img {
				width: 16rem;
				height: 20rem;
				object-fit: cover;
			}
		}

		.ring-orbit {
			position: absolute;
			border-radius: 50%;

			&.ring-1 {
				width: 115%;
				height: 115%;
				border: 1.5px solid rgba(139, 92, 246, 0.2);
				border-top: 2px solid #fbbf24;
				animation: spin 10s linear infinite;
				top: -7.5%;
				left: -7.5%;
			}

			&.ring-2 {
				width: 135%;
				height: 135%;
				border: 1px dashed rgba(255, 255, 255, 0.1);
				animation: spin 20s linear infinite reverse;
				top: -17.5%;
				left: -17.5%;
			}
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
