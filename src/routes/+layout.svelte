<script lang="ts">
    import 'uno.css';
    import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
    import Footer from '$lib/components/Footer/Footer.svelte';
    import '$lib/index.scss';
    import { onHydrated, theme } from '$lib/stores/theme';
    import { onMount } from 'svelte';

    onMount(() => onHydrated());
</script>

<div class={`app-wrapper ${$theme ? 'theme-dark' : 'theme-light'}`}>
    
    <header class="header-layer">
        <NavMenu />
    </header>

    <main class="main-layer">
        <div class="page-content container">
            <slot />
        </div>
        
        <Footer />
    </main>
</div>

<style lang="scss">
    .app-wrapper {
        margin: 0;
        padding: 0;
        background-color: var(--main);
        color: var(--main-text);
        font-family: var(--text-f);
        transition: background-color 200ms;
        
        /* Flexbox para asegurar que el footer baje */
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }

    .header-layer {
        position: fixed; // O fixed, según prefieras
        top: 0;
        z-index: 100;
        width: 100%;
    }

    .main-layer {
        display: flex;
        flex-direction: column;
        flex: 1; /* Toma todo el espacio sobrante */
        width: 100%;
    }

    .page-content {
        flex: 1; /* Empuja al footer al final de la pantalla */
        padding: 40px 0; // Espacio entre Navbar y contenido
    }

    /* Respetar tus estilos globales */
    :global(body) {
        margin: 0;
        overflow-x: hidden;
    }
</style>