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
	{
		demoUrl: 'https://budget-tracker.up.railway.app/',
		gitHubUrl: 'https://github.com/20jasper/budget-tracker',
		projectName: 'budget tracker',
		description: 'Track your monthly expenses',
		image: {
			altText:
				'A budget planner with a few test expenses. There is a form to add a new expense',
			src: 'https://user-images.githubusercontent.com/78604367/188524492-5c3a6633-335d-4511-ac35-59dc073f138c.png',
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
