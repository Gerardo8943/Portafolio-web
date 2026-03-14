import { Platform } from '$lib/types';

import type { PlatformLink } from '$lib/types';


export const title = 'Home';

export const name = 'Gerardo Salazar';

export const lastName = 'Fullstack Developer';

export const description = `Ingeniero en Informática:
Especialista en desarrollo Full Stack,
diseño de bases de datos e integraciones de sistemas.`;



export const links: PlatformLink[] = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/Gerardo8943',
		label: 'GitHub'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/feed/',
		label: 'LinkedIn'
	},
	{
		platform: Platform.CV,
		link: 'cv/CV_Gerardo.pdf',
		label: 'Descargar CV'
	}
];



export const profileImage = 'logos/perfil.jpg';
