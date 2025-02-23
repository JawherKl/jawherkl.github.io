import Project1 from '../../src/assets/Project1.png';
import Project2 from '../../src/assets/Project2.png';
import Project3 from '../../src/assets/Project3.png';
import Project4 from '../../src/assets/Project4.png';
import Project5 from '../../src/assets/Project5.png';
import Project6 from '../../src/assets/Project6.png';
import Project7 from '../../src/assets/Project7.png';
import Project8 from '../../src/assets/Project8.png';
import Project9 from '../../src/assets/Project9.png';
import Project from '../../src/assets/Project.png';

export const projectsData = [
	// API Projects
	{
		id: 1,
		image: Project1,
		title: 'Node.js API with PostgreSQL',
		category: 'API',
		demoUrl: 'https://github.com/JawherKl/node-api-postgres',
		sourceUrl: 'https://github.com/JawherKl/node-api-postgres',
		status: 'completed',
	},
	{
		id: 2,
		image: Project5,
		title: 'API Design',
		category: 'API',
		demoUrl: 'https://github.com/JawherKl/api-design',
		sourceUrl: 'https://github.com/JawherKl/api-design',
		status: 'in-progress',
	},
	{
		id: 3,
		image: null,
		title: 'GraphQL Node.js E-commerce',
		category: 'API',
		demoUrl: 'https://github.com/JawherKl/graphql-nodejs-ecom',
		sourceUrl: 'https://github.com/JawherKl/graphql-nodejs-ecom',
		status: 'completed',
	},
	{
		id: 4,
		image: null,
		title: 'User Caching App',
		category: 'API',
		demoUrl: 'https://github.com/JawherKl/user-caching-app',
		sourceUrl: 'https://github.com/JawherKl/user-caching-app',
		status: 'completed',
	},
	{
		id: 5,
		image: null,
		title: 'Go User Caching',
		category: 'API',
		demoUrl: 'https://github.com/JawherKl/go-user-caching',
		sourceUrl: 'https://github.com/JawherKl/go-user-caching',
		status: 'completed',
	},
	// Website Projects
	{
		id: 6,
		image: null,
		title: 'AI FAQ Bot',
		category: 'Website',
		demoUrl: 'https://github.com/JawherKl/ai-faq-bot',
		sourceUrl: 'https://github.com/JawherKl/ai-faq-bot',
		status: 'completed',
	},
	{
		id: 7,
		image: null,
		title: 'Angular Guide',
		category: 'Website',
		demoUrl: 'https://github.com/JawherKl/angular-guide',
		sourceUrl: 'https://github.com/JawherKl/angular-guide',
		status: 'completed',
	},
	{
		id: 8,
		image: Project7,
		title: 'Weather App',
		category: 'Website',
		demoUrl: 'https://github.com/JawherKl/weather-app',
		sourceUrl: 'https://github.com/JawherKl/weather-app',
		status: 'in-progress',
	},
	// DevOps Projects
	{
		id: 9,
		image: Project3,
		title: 'DevOps Guide',
		category: 'Devops',
		demoUrl: 'https://github.com/JawherKl/devops-guide',
		sourceUrl: 'https://github.com/JawherKl/devops-guide',
		status: 'completed',
	},
	// AI/ML Projects
	{
		id: 10,
		image: null,
		title: 'AI Models Integration',
		category: 'AI/ML',
		demoUrl: 'https://github.com/JawherKl/ai-models-integration',
		sourceUrl: 'https://github.com/JawherKl/ai-models-integration',
		status: 'completed',
	},
	{
		id: 11,
		image: Project9,
		title: 'AI Faq Bot',
		category: 'AI/ML',
		demoUrl: 'https://github.com/JawherKl/ai-faq-bot',
		sourceUrl: 'https://github.com/JawherKl/ai-faq-bot',
		status: 'in-progress',
	},
	// Contributions
	{
		id: 12,
		image: null,
		title: 'Developer Roadmap Contribution',
		category: 'Contributions',
		demoUrl: 'https://github.com/JawherKl/developer-roadmap',
		sourceUrl: 'https://github.com/JawherKl/developer-roadmap',
		status: 'in-progress',
	},
	{
		id: 13,
		image: null,
		title: 'Git Ignore Contribution',
		category: 'Contributions',
		demoUrl: 'https://github.com/JawherKl/gitignore',
		sourceUrl: 'https://github.com/JawherKl/gitignore',
		status: 'in-progress',
	},
	// Research
	{
		id: 14,
		image: Project2,
		title: 'Design Patterns in Multiple Languages',
		category: 'Research',
		demoUrl: 'https://github.com/JawherKl/design-patterns-in-multiple-languages',
		sourceUrl: 'https://github.com/JawherKl/design-patterns-in-multiple-languages',
		status: 'completed',
	},
];

export const projectsNav = [
	{ name: 'all' },
	{ name: 'API' },
	{ name: 'Website' },
	{ name: 'Devops' },
	{ name: 'AI/ML' },
	{ name: 'Contributions' },
	{ name: 'Research' },
];