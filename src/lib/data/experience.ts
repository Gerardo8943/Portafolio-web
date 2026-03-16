import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Fundacion Mision Jose Gregorio Hernandez',
		description: 'Encargado de ser un programador fullstack en la Fundacion Mision Jose Gregorio Hernandez. Tuve experiencia en creacion de sistemas y soluciones reales, manejo de bases de datos, servidores, control de versiones, estuve junto a un equipo de trabajo, el cual logramos la finalizacion de 3 sistemas administrativos, que ayudaron de gran medida a la institucion. Aumento la productividad de los trabajadores, se simplificaron areas de trabajo criticas',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Edificio latino',
		period: { from: new Date(2022, 1, 14), to: new Date(2026, 0, 16) },
		skills: getSkills('php', 'js', 'Laravel', 'Livewire', 'Myadmin','Github', 'sql'),
		name: 'Desarrollador de Software',
		color: 'purple',
		links: [],
		logo: Assets.workOffice,
		shortDescription: 'Creacion de sistemas administrativos, migraciones, control de versiones y mejorar la productividad.'
	},
	{
		slug: 'software-freelance',
		company: 'La fabrica de la web (LLC)',
		description: 'Como Desarrollador Fullstack, desempeñé un rol integral en el ciclo de vida de las aplicaciones, desde la arquitectura de sistemas hasta la integración fluida entre frontend y backend. Desarrollé módulos personalizados y realicé el mantenimiento técnico de plataformas en WordPress, además de ejercer funciones de QA (Quality Assurance) para garantizar la estabilidad y el rendimiento del software. Mi labor incluyó la redacción de documentación técnica exhaustiva y la gestión de soporte técnico especializado. Debido a acuerdos de confidencialidad, los detalles específicos de los proyectos se mantienen bajo reserva',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2026, 0, 19), to: new Date(2026, 1, 17) },
		skills: getSkills('php', 'ts', 'css', 'html', 'js', 'Wordpress', 'PostgreSQL', 'Github'),
		name: 'Desarrollador de Software',
		color: 'blue',
		links: [],
		logo: Assets.workHome,
		shortDescription: 'Creacion de modulos en Wordpress, mejorar el rendimiento de la web, integraciones del backend con el frontend.'
	},
	
];

export const title = 'Experiencia';
