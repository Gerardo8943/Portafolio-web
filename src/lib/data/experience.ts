import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Fundacion Mision Jose Gregorio Hernandez',
		description: 'Me desarrolle como un programador, fullstack en la fundacion. Tuve experiencia en creacion de sistemas y soluciones reales, manejo de bases de datos, servidores, control de versiones',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Edificio latino',
		period: { from: new Date() },
		skills: getSkills('php', 'js', 'Laravel', 'Livewire', 'Myadmin','Github'),
		name: 'Open Source Developer',
		color: 'purple',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'software-freelance',
		company: 'La fabrica de la web (LLC)',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('php', 'ts', 'css', 'html', 'js', 'Wordpress', 'PostgreSQL', 'Github'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	
];

export const title = 'Experiencia';
