import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Fundacion Mision Jose Gregorio Hernandez',
		description: 'Encargado de ser un programador fullstack en la Fundacion Mision Jose Gregorio Hernandez. Tuve experiencia en creacion de sistemas y soluciones reales, manejo de bases de datos, servidores, control de versiones, estuve junto a un equipo de trabajo, el cual logramos la finalizacion de 3 sistemas administrativos, que ayudaron de gran medida a la institucion. Aumento la productividad de los trabajadores, se simplificaron areas de trabajo criticas',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Edificio latino',
		period: { from: new Date(2022, 1, 14), to: new Date(2026, 0, 16) },
		skills: getSkills('php', 'js', 'Laravel', 'Livewire', 'Myadmin','Github'),
		name: 'Desarrollador de Software',
		color: 'purple',
		links: [],
		logo: Assets.workOffice,
		shortDescription: 'Programador fullstack, me dedique a crear sistemas administrativos para los empleados.'
	},
	{
		slug: 'software-freelance',
		company: 'La fabrica de la web (LLC)',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2026, 0, 19), to: new Date(2026, 1, 17) },
		skills: getSkills('php', 'ts', 'css', 'html', 'js', 'Wordpress', 'PostgreSQL', 'Github'),
		name: 'Desarrollador de Software',
		color: 'blue',
		links: [],
		logo: Assets.workHome,
		shortDescription: 'Programador enfocado en crear modulos en Wordpress y crear soluciones fiables.'
	},
	
];

export const title = 'Experiencia';
