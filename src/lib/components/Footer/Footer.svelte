<script lang="ts">
	const currentYear = new Date().getFullYear();
	const email = 'torresanibal388@gmail.com';
	const phone = '584129058630';

	const navLinks = [
		{ title: 'Experiencia', to: 'experience', icon: 'i-carbon-development' },
		{ title: 'Proyectos', to: 'projects', icon: 'i-carbon-cube' },
		{ title: 'Habilidades', to: 'skills', icon: 'i-carbon-software-resource-cluster' },
		{ title: 'Educacion', to: 'education', icon: 'i-carbon-education' }
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
				<h2 class="title-yellow">Trabajemos juntos!</h2>
				<div class="contact-info">
					<br />
					<p>
						Correo:
						<a href="mailto:{email}" class="email-display">
							{email}
							<span class="underline-glow"></span>
						</a>
					</p>
					<div class="whatsapp-wrapper">
						<span>Hablemos:</span>
						<a
							href="https://wa.me/{phone}"
							target="_blank"
							class="whatsapp-btn"
							aria-label="Escríbeme por WhatsApp"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.192 8.192 0 0 1-1.26-4.38c0-4.51 3.67-8.19 8.19-8.19c2.19 0 4.25.85 5.8 2.4c1.55 1.55 2.4 3.61 2.4 5.8c0 4.52-3.67 8.19-8.19 8.19m4.48-6.14c-.24-.12-1.47-.73-1.69-.82c-.23-.09-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.18-.53.06c-.24-.12-1.02-.37-1.95-1.2c-.72-.64-1.2-1.43-1.34-1.68c-.14-.24-.02-.37.1-.49c.11-.11.24-.28.37-.42c.12-.14.16-.24.24-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01c-.17 0-.44.06-.67.31c-.24.24-.91.89-.91 2.17c0 1.28.84 2.51.96 2.67c.12.17 1.64 2.5 3.98 3.5c.55.24 1.01.38 1.35.49c.57.18 1.08.15 1.48.09c.45-.06 1.47-.6 1.69-1.18c.21-.58.21-1.08.15-1.18c-.06-.1-.23-.16-.47-.28Z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<div class="availability">
				<span class="pulse-dot"></span>
				Disponible para trabajar
			</div>
		</div>

		<div class="footer-divider"></div>

		<div class="footer-grid">
			<div class="grid-col brand">
				<div class="logo">Desarrollador de software<span class="yellow-dot">.</span></div>
				<p>
					Diseñando y programando experiencias digitales con un enfoque en el rendimiento y la
					estética.
				</p>
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
			<p>{currentYear} — Hecho con <span class="purple-heart">💜</span></p>
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
		z-index: 1;

		.footer-inner {
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
			color: #fbbf24;
			font-size: clamp(2rem, 5vw, 3.5rem);
			font-weight: 800;
			margin: 0;
			line-height: 0.9;
		}

		.contact-info {
			display: flex;
			flex-direction: column;
			gap: 15px;
			margin-top: 15px;

			.email-display {
				font-size: 1.2rem;
				color: var(--secondary-text, #ccc);
				text-decoration: none;
				position: relative;

				&:hover .underline-glow {
					width: 100%;
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

			.whatsapp-wrapper {
				display: flex;
				align-items: center;
				gap: 15px;
				color: var(--secondary-text, #ccc);

				span {
					font-size: 1.1rem;
				}

				.whatsapp-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background: rgba(37, 211, 102, 0.1);
					border: 1px solid rgba(37, 211, 102, 0.3);
					color: #25d366; // Color inicial
					transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
					text-decoration: none;

					&:hover {
						background: #4ade80; // Verde claro al hover
						color: #ffffff; // El SVG se vuelve blanco
						transform: scale(1.15) rotate(10deg);
						box-shadow: 0 0 20px rgba(74, 222, 128, 0.5);
						border-color: #4ade80;
					}

					svg {
						transition: transform 0.3s ease;
					}
				}
			}
		}
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 30px;
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
		@media (max-width: 850px) {
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
		color: var(--tertiary-text, #888);
		text-decoration: none;
		transition: all 0.2s ease;
		&:hover {
			color: #fff;
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
			.yellow-dot {
				color: #fbbf24;
			}
		}
		p {
			color: var(--tertiary-text, #888);
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
		color: var(--tertiary-text, #888);
		.purple-heart {
			color: #a855f7;
			display: inline-block;
			animation: heartBeat 1.5s infinite;
		}
		@media (max-width: 600px) {
			flex-direction: column;
			gap: 20px;
			text-align: center;

			.location-tag {
				justify-content: center;
			}
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}
	@keyframes heartBeat {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}
</style>
