import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'sistema-sidaii',
		color: '#750C7D',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Sistema de registro y entrega de ayudas tecnicas para las personas con discapacidad a nivel nacional.',
		links: [{ to: 'https://github.com/Deiker619/sidaii.git', label: 'GitHub' }],
		logo: Assets.PHP,
		name: 'Sistema Sidaii',
		period: {
			from: new Date(2024, 4, 1), to: new Date(2026, 0, 14)
		},
		skills: getSkills('php', 'css', 'js', 'html', 'Myadmin', 'Github'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: 'https://images.unsplash.com/photo-1581093588401-12f3d1c1b3b2?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'intranet-recursos-humanos',
		color: '#D11313',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'Intranet la cual permite crear una constancia de trabajo y ver el reporte de ingresos que poseen los trabajadores.',
		links: [{ to: 'https://github.com/Deiker619/intranet', label: 'GitHub' }],
		logo: Assets.Laravel,
		name: 'Intranet (Fundacion Jose Gregorio Hernandez)',
		period: {
			from: new Date(2025, 1, 20), to: new Date(2025, 8, 14)
		},
		skills: getSkills('php', 'Laravel', 'Livewire','html', 'css', 'js', 'PostgreSQL','Github'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'sistema-bienes',
		color: '#D11313',
		description: '...',
		shortDescription: 'Sistema que se encarga de llevar un registro de los bienes para la Fundacion Jose Gregorio Hernandez.',
		links: [{ to: 'https://github.com/Deiker619/bienes.git', label: 'GitHub' }],
		logo: Assets.Laravel,
		name: 'Sistema de bienes (Fundacion Jose Gregorio Hernandez)',
		period: {
			from: new Date(2025, 1, 25), to: new Date(2025, 11, 16)
		},
		skills: getSkills('php', 'Laravel', 'Livewire','html', 'css', 'js', 'Myadmin', 'Github'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'clon-traductor-google',
		color: '#FFF700',
		description: '...',
		shortDescription: 'Clon del traductor mas famoso de internet, puede escuchar audio de la traduccion, detectar idioma, etc. ',
		links: [{ to: 'https://github.com/Gerardo8943/Traductor-Google-clon-', label: 'GitHub' }],
		logo: Assets.JavaScript,
		name: 'Clon de traductor Google',
		period: {
			from: new Date(2025, 9, 9)
		},
		skills: getSkills('html','css', 'js', 'NodeJs', 'ExpressJs', 'Github'),
		type: 'Website Template',
		screenshots: [
			{
				label: '1',
				src: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Proyectos';
