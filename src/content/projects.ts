import fullStackInterviewQuestions from '@images/fullStackInterviewQuestions.mp4';
import ticTacToe from '@images/ticTacToe.mp4';

type Image = {
	mediaType: 'image';
	altText: string;
	src: string;
};
type Video = {
	mediaType: 'video';
	altText: string;
	src: string;
	srcType: string;
};

export type Project = {
	demoUrl: string;
	gitHubUrl: string;
	projectName: string;
	description: string;
	media: Image | Video;
	techUsed: string[];
};

const projects: Project[] = [
	{
		projectName: 'five line rhyme',
		demoUrl: 'https://five-line-rhyme.up.railway.app/',
		description: 'A collection of poems only five lines long',
		media: {
			mediaType: 'image',
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
		gitHubUrl: 'https://github.com/20jasper/five-line-rhyme',
	},
	{
		projectName: 'budget tracker',
		demoUrl: 'https://budget-tracker.up.railway.app/',
		description: 'Track your monthly expenses',
		media: {
			mediaType: 'image',
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
		gitHubUrl: 'https://github.com/20jasper/budget-tracker',
	},
	{
		projectName: 'PAIHS Portfolios',
		demoUrl: 'https://paihsportfolios.netlify.app/',
		description: 'Track your monthly expenses',
		media: {
			mediaType: 'image',
			src: 'https://user-images.githubusercontent.com/78604367/190449712-5d834ec4-354c-4a35-953b-47ff17f5c5b1.png',
			altText:
				'A large purple crest with hands handing the globe below a large purple heading that says PAIHS portfolios',
		},
		techUsed: ['JavaScript', 'CSS', 'HTML'],
		gitHubUrl: 'https://github.com/20jasper/PAIHS-portfolio-page',
	},
	{
		projectName: 'Full Stack Interview Question Generator',
		demoUrl: 'https://full-stack-interview-prep.up.railway.app/',
		description: 'Study for a full stack web development interview',
		media: {
			mediaType: 'video',
			srcType: 'video/mp4',
			src: fullStackInterviewQuestions,
			altText:
				'An animation of a button being clicked and a question showing up',
		},
		techUsed: ['JavaScript', 'CSS', 'HTML', 'Node'],
		gitHubUrl: 'https://github.com/20jasper/interview-question-api',
	},
	{
		projectName: 'COVID–19 Tracker',
		demoUrl: 'https://coronavirusworlddata.netlify.app/',
		description:
			'See the current world and total world COVID deaths and cases in real time',
		media: {
			mediaType: 'image',
			src: 'https://raw.githubusercontent.com/20jasper/covid-tracker/main/CovidTracker.jpg',
			altText: 'a site tracking COVID-19 statistics',
		},
		techUsed: ['JavaScript', 'CSS', 'HTML'],
		gitHubUrl: 'https://github.com/20jasper/covid-tracker',
	},
	{
		projectName: 'Tic-Tac-Toe',
		demoUrl: 'https://2-player-tic-tac-toe.netlify.app/',
		description: 'A 2-player tic-tac-toe game with win and draw validation',
		media: {
			mediaType: 'video',
			src: ticTacToe,
			srcType: 'video/mp4',
			altText: 'An animation of a tic tac toe game',
		},
		techUsed: ['JavaScript', 'CSS', 'HTML'],
		gitHubUrl: 'https://github.com/20jasper/tic-tac-toe',
	},
	{
		projectName: 'SVG faces',
		demoUrl: 'https://svg-faces.netlify.app/',
		description:
			'Modular faces built with SVG, HTML, CSS, JavaScript, React, and D3.js',
		media: {
			mediaType: 'image',
			src: 'https://raw.githubusercontent.com/20jasper/SVG-faces/main/SVG-faces.webp',
			altText:
				'a site with a a yellow happy face, a blue sad face, and a red mad face',
		},
		techUsed: ['JavaScript', 'CSS', 'HTML', 'React', 'D3'],
		gitHubUrl: 'https://github.com/20jasper/SVG-faces',
	},
];

export default projects;
