<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly, scale } from 'svelte/transition';
    import { titleSuffix } from '@data/app';
    import { links, description, lastName, name, title, profileImage } from '@data/home';
    import { useTitle } from '$lib/utils/helpers';
    import { getPlatfromIcon } from '$lib/utils';
    import { Platform } from '$lib/types';
    import Icon from '$lib/components/Icon/Icon.svelte';

    let aboutCode = "";
    // Código PHP alineado al borde para evitar sangrías no deseadas
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
    let activeTechColor = ""; 

    function triggerAbout(node: HTMLElement) {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !aboutVisible) {
                aboutVisible = true;
                let j = 0;
                const interval = setInterval(() => {
                    if (j < fullAboutCode.length) {
                        aboutCode += fullAboutCode[j];
                        j++;
                    } else {
                        clearInterval(interval);
                        isCodeFinished = true;
                    }
                }, 15);
            }
        }, { threshold: 0.2 });
        observer.observe(node);
        return { destroy() { observer.disconnect(); } };
    }

    const mainTechs = [
        { name: 'PHP', color: '#818cf8', shadow: 'rgba(129, 140, 248, 0.4)', delay: '0s' },
        { name: 'Laravel', color: '#ef4444', shadow: 'rgba(239, 68, 68, 0.4)', delay: '0.5s' },
        { name: 'SQL', color: '#60a5fa', shadow: 'rgba(96, 165, 250, 0.4)', delay: '1s' },
        { name: 'Livewire', color: '#f472b6', shadow: 'rgba(244, 114, 182, 0.4)', delay: '1.5s' }
    ];
</script>

<svelte:head>
    <title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-6 md:px-16 lg:px-24 z-10 overflow-visible py-12">
    <div in:fly={{ x: -40, duration: 600 }} class="max-w-2xl text-left z-20">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.2)] m-0">
            {name}
        </h1>
        <h2 class="text-xl md:text-2xl font-medium text-gray-400 mt-2">{lastName}</h2>
        <p class="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-prose">
            {description}
        </p>
        
        <div class="flex flex-wrap items-center gap-3 mt-8">
            {#each links as link, i}
                <div in:fly={{ y: 10, delay: 400 + (i * 100) }} class="flex-shrink-0">
                    <a 
                        class="bg-violet-700 text-white hover:bg-violet-800 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 px-5 py-2.5 rounded-xl flex items-center gap-2 no-underline border border-white/5 text-sm md:text-base font-medium" 
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
            <div class="ring-orbit ring-1"></div>
            <div class="ring-orbit ring-2"></div>
            <div class="profile-wrapper">
                <img src={profileImage} alt={name} class="profile-img" />
            </div>
        </div>
    </div>
</div>

<section use:triggerAbout class="relative min-h-screen py-20 px-6 md:px-20 border-t border-white/5 bg-black/10">
    <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span class="text-violet-500 font-mono text-xl md:text-2xl">01.</span> Quien soy
            <div class="h-[1px] flex-grow bg-gradient-to-r from-violet-500/50 to-transparent"></div>
        </h3>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div class="flex flex-col gap-6 w-full">
                <div 
                    class="relative transition-all duration-700 rounded-xl shadow-2xl overflow-hidden"
                    style="box-shadow: 0 0 40px {activeTechColor || 'rgba(139, 92, 246, 0.1)'}"
                >
                    <div class="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 md:p-7 font-mono relative z-10 text-left">
                        <div class="flex gap-1.5 mb-5">
                            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <pre class="php-code-radiant text-xs md:text-sm lg:text-base leading-relaxed overflow-x-auto">
{aboutCode}<span class="animate-pulse text-violet-400">|</span>
</pre>
                    </div>
                </div>

                {#if isCodeFinished}
                    <div in:fly={{ y: 20, duration: 800 }} class="bg-white/5 border-l-4 border-violet-500 p-5 rounded-r-xl backdrop-blur-sm">
                        <p class="text-gray-300 text-base md:text-lg leading-relaxed">
                            Programador graduado de la carrera de <span class="text-white font-bold">ingeniera en informatica</span>. Desarrollo sistemas robustos priorizando el rendimiento y la escalabilidad.
                        </p>
                    </div>
                {/if}
            </div>

            <div class="grid grid-cols-2 gap-4 md:gap-6 h-fit">
                {#each mainTechs as tech, i}
                    <button 
                        class="tech-card group" 
                        style="--float-delay: {tech.delay}; --tech-color: {tech.color}"
                        on:mouseenter={() => activeTechColor = tech.shadow}
                        on:mouseleave={() => activeTechColor = ""}
                    >
                        <div class="relative z-10 flex flex-col items-center">
                            <span class="text-xl md:text-2xl font-bold tracking-tight" style="color: {tech.color}">
                                {tech.name}
                            </span>
                            <div class="h-[2px] w-6 bg-white/10 mt-2 group-hover:w-12 transition-all duration-500" style="background-color: {tech.color}"></div>
                            <span class="text-[9px] uppercase tracking-widest text-gray-500 mt-2 font-mono">Expertise</span>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    // Garantiza alineación a la izquierda absoluta
    pre {
        margin: 0;
        padding: 0;
        text-align: left;
        white-space: pre-wrap; 
        word-break: break-all;
    }

    .php-code-radiant {
        color: #d1b3ff;
        text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
    }

    .tech-card {
        position: relative;
        padding: 1.5rem;
        @media (min-width: 768px) { padding: 2.5rem 1.5rem; }
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 1.25rem;
        backdrop-filter: blur(8px);
        transition: all 0.4s ease;
        animation: floating 5s ease-in-out infinite;
        animation-delay: var(--float-delay);

        &:hover {
            border-color: var(--tech-color);
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-8px);
        }
    }

    @keyframes floating {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .profile-container {
        position: relative;
        width: fit-content;
        .profile-wrapper {
            position: relative;
            z-index: 5;
            border-radius: 40px 100px;
            overflow: hidden;
            border: none;
            img { width: 14rem; height: 18rem; @media (min-width: 768px) { width: 16rem; height: 20rem; } object-fit: cover; }
        }
        .ring-orbit {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            &.ring-1 { 
                width: 115%; height: 115%; border: 1.5px solid rgba(139, 92, 246, 0.2); 
                border-top: 2px solid #fbbf24; animation: spin 10s linear infinite; top: -7.5%; left: -7.5%; 
            }
            &.ring-2 { 
                width: 135%; height: 135%; border: 1px dashed rgba(255, 255, 255, 0.1); 
                animation: spin 20s linear infinite reverse; top: -17.5%; left: -17.5%; 
            }
        }
    }

    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>