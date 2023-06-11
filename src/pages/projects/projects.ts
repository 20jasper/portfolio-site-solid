import type { Props as Project } from '../../components/Project.astro';

const projects: Project[] = [
	{
		projectName: 'five line rhyme',
		demoUrl: 'https://five-line-rhyme.up.railway.app/',
		gitHubUrl: 'https://github.com/20jasper/five-line-rhyme',
		description: 'A collection of poems only five lines long',
		image: {
			src: 'https://user-images.githubusercontent.com/78604367/192409376-b33d90a4-9132-434e-bb98-b6867c74443b.png',
			altText:
				'The home page of five line rhyme. There are a few user–submitted poems to read',
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
	{
		projectName: 'budget tracker',
		demoUrl: 'https://budget-tracker.up.railway.app/',
		gitHubUrl: 'https://github.com/20jasper/budget-tracker',
		description: 'Track your monthly expenses',
		image: {
			src: 'https://user-images.githubusercontent.com/78604367/188524492-5c3a6633-335d-4511-ac35-59dc073f138c.png',
			altText:
				'A budget planner with a few test expenses. There is a form to add a new expense',
		},
		techUsed: [
			'JavaScript',
			'CSS',
			'HTML',
			'Node',
			'Express',
			'EJS',
			'MongoDB',
			'Mongoose',
		],
	},
];

export default projects;
