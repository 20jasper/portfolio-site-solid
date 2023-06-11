import type { Props as Project } from '../../components/Project.astro';

const projects: Project[] = [
	{
		demoUrl: 'https://five-line-rhyme.up.railway.app/',
		gitHubUrl: 'https://github.com/20jasper/five-line-rhyme',
		projectName: 'five line rhyme',
		description: 'A collection of poems only five lines long',
		image: {
			altText:
				'The home page of five line rhyme. There are a few user–submitted poems to read',
			src: 'https://user-images.githubusercontent.com/78604367/192409376-b33d90a4-9132-434e-bb98-b6867c74443b.png',
		},
		techUsed: [
			'JavaScript',
			'CSS',
			'Node',
			'Express',
			'Pug',
			'MongoDB',
			'Mongoose',
		],
	},
];

export default projects;
