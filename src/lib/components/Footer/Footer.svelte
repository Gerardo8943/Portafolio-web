<script lang="ts">
    const currentYear = new Date().getFullYear();
    const email = "torresanibal388@gmail.com"; 

    const navLinks = [
        { title: 'Experiencia', to: 'experience', icon: 'i-carbon-development' },
        { title: 'Proyectos', to: 'projects', icon: 'i-carbon-cube' },
        { title: 'Habilidades', to: 'skills', icon: 'i-carbon-software-resource-cluster' },
        { title: 'Educacion', to: 'education', icon: 'i-carbon-education' },
    ];

    const socials = [
        { name: 'GitHub', url: 'https://github.com/Gerardo8943', icon: 'i-carbon-logo-github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: 'i-carbon-logo-linkedin' }
    ];
</script>

<footer class="footer">
    <div class="footer-inner">
        <div class="footer-cta">
            <div class="cta-left">
                <h2 class="title-yellow">Contactame!</h2>
                <a href="mailto:{email}" class="email-display">
                    {email}
                    <span class="underline-glow"></span>
                </a>
            </div>
            <div class="availability">
                <span class="pulse-dot"></span>
                Disponible para trabajar — 2026
            </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-grid">
            <div class="grid-col brand">
                <div class="logo">Desarrollador de software<span class="yellow-dot">.</span></div>
                <p>Diseñando y programando experiencias digitales con un enfoque en el rendimiento y la estética.</p>
            </div>

            <div class="grid-col">
                <h4 class="col-title">Navegación</h4>
                <nav>
                    {#each navLinks as link}
                        <a href={link.to} class="footer-link">
                            <i class={link.icon}></i>
                            {link.title}
                        </a>
                    {/each}
                </nav>
            </div>

            <div class="grid-col">
                <h4 class="col-title">Social</h4>
                <nav>
                    {#each socials as social}
                        <a href={social.url} target="_blank" class="footer-link">
                            <i class={social.icon}></i>
                            {social.name}
                        </a>
                    {/each}
                </nav>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© {currentYear} — Hecho con <span class="purple-heart">💜</span></p>
            <div class="location-tag">
                <i class="i-carbon-location"></i>
               Caracas/Venezuela
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    .footer {
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(12px);
        border-top: 1px solid rgba(120, 0, 255, 0.15);
        padding: 80px 0 40px 0;
        position: relative;
        z-index: 1; /* Asegura que no tape al NavMenu si es fixed */

        .footer-inner {
            /* Usamos la misma lógica de container que tienes en index.scss */
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;

            @media (max-width: 1075px) {
                padding: 0 20px;
            }
        }
    }

    .footer-cta {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 60px;
        flex-wrap: wrap;
        gap: 30px;

        .title-yellow {
            color: #fbbf24; // Amarillo
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 800;
            margin: 0;
            line-height: 0.9;
        }

        .email-display {
            display: inline-block;
            margin-top: 15px;
            font-size: 1.2rem;
            color: var(--secondary-text);
            text-decoration: none;
            position: relative;

            &:hover {
                color: #a855f7; // Morado
                .underline-glow { width: 100%; }
            }

            .underline-glow {
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 30px;
                height: 2px;
                background: #a855f7;
                transition: width 0.3s ease;
                box-shadow: 0 0 10px #a855f7;
            }
        }
    }

    .availability {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.9rem;
        padding: 10px 20px;
        background: rgba(168, 85, 247, 0.05);
        border: 1px solid rgba(168, 85, 247, 0.2);
        border-radius: 50px;
        color: #a855f7;

        .pulse-dot {
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 10px #10b981;
            animation: pulse 2s infinite;
        }
    }

    .footer-divider {
        height: 1px;
        background: linear-gradient(90deg, rgba(120, 0, 255, 0.3), transparent);
        margin-bottom: 60px;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 60px;
        margin-bottom: 60px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }

    .col-title {
        color: #fbbf24;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 2px;
        margin-bottom: 25px;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .footer-link {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--tertiary-text);
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            color: var(--main-text);
            transform: translateX(5px);
        }

        i {
            font-size: 1.1rem;
            color: #a855f7;
            opacity: 0.7;
        }
    }

    .brand {
        .logo {
            font-weight: 800;
            font-size: 1.5rem;
            margin-bottom: 20px;
            .yellow-dot { color: #fbbf24; }
        }
        p {
            color: var(--tertiary-text);
            line-height: 1.6;
            max-width: 320px;
        }
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 30px;
        font-size: 0.85rem;
        color: var(--tertiary-text);

        .purple-heart {
            color: #a855f7;
            display: inline-block;
            animation: heartBeat 1.5s infinite;
        }
    }

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
    }

    @keyframes heartBeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
</style>