import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Tecnico medio en informatica (Educacion media)',
		description: '',
		location: 'Caracas, Venezuela',
		logo: Assets.Unknown,
		name: '',
		organization: 'Didascalio Nuestra Señora del Encuentro',
		period: { from: new Date(2013, 0, 1), to: new Date(2019, 0, 1) },
		shortDescription: 'Estudie la educacion media y un año adicional para ser tecnico medio en informatica',
		slug: 'dummy-education-item',
		subjects: ['Sublime text', 'Algoritmos', 'Algebra', 'Ingles', 'HTML', 'CSS']
	},
	{
		degree: 'Tecnico superior universitario',
		description: '',
		location: 'Caracas, Venezuela',
		logo: Assets.Unknown,
		name: '',
		organization: 'Universidad Nacional Experimental de la Gran Caracas',
		period: { from: new Date(2020, 0, 1), to: new Date(2023, 0, 1) },
		shortDescription: 'hola',
		slug: 'dummy-education-item-2',
		subjects: ['PHP','Bases de datos', 'MySQL', 'npm', 'Composer','phpmyadmin']
	},
	{
		degree: 'Curso de programacion',
		description: 'Aprendizaje en programacion Frontend y Backend',
		location: 'Caracas',
		logo: Assets.Unknown, // puedes usar otro logo si tienes
		name: '',
		organization: 'ED Tecnica',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 5, 30) },
		shortDescription: 'Completé una maestría enfocada en IA y sistemas inteligentes.',
		slug: 'dummy-education-item-3',
		subjects: ['Node JS', 'Express', 'Firebase', 'Github', 'Creacion de soluciones', 'Paradigmas de programacion']
	},

	{
		degree: 'Ingenieria en informatica',
		description: 'Titulo de ingeniero en informatica',
		location: 'Caracas',
		logo: Assets.Unknown, // puedes usar otro logo si tienes
		name: '',
		organization: 'Universidad Nacional Experimental de la Gran Caracas',
		period: { from: new Date(2023, 1, 1), to: new Date(2025, 5, 30) },
		shortDescription: 'Completé una maestría enfocada en IA y sistemas inteligentes.',
		slug: 'maestria-cs-2022',
		subjects: ['Resolucion de problemas', 'Creacion de proyectos', 'Trabajo en equipo']
	}
	
	
	
];

export const title = 'Educacion';
