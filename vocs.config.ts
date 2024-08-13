import { defineConfig } from 'vocs'

export default defineConfig({
	title: 'Concero Docs',
	titleTemplate: '%s – Concero Docs',
	// banner: 'Head to our new [Discord](https://discord.gg/lanca)!',
	description: 'Build the next big thing on Concero.',
	baseUrl: 'https://docs.concero.io',
	iconUrl: 'https://concero.io/favicon.ico',
	logoUrl: {
		light: '/logo-light.svg',
		dark: '/logo-dark.svg',
	},
	theme: {
		colorScheme: 'system',
		accentColor: '#5E43FF',
		variables: {
			color: {
				background: {
					light: 'white',
					dark: 'black',
				},
			},
		},
	},

	// font: {
	//   google: 'Manrope'
	// },
	sidebar: [
		{
			text: 'What is Concero?',
			link: '/what-is-concero',
		},
		{
			text: 'Cross-chain Infrastructure',
			collapsed: false,
			items: [
				{
					text: 'Overview',
					link: '/cross-chain-infrastructure/overview',
				},
				{
					text: 'Technical Architecture',
					link: '/cross-chain-infrastructure/technical-architecture',
				},
				{
					text: 'Off-chain routing',
					link: '/cross-chain-infrastructure/routing',
				},
				{
					text: 'Solidity API',
					link: '/cross-chain-infrastructure/api',
				},
				{
					text: 'Messaging (Coming Soon)',
					link: '/cross-chain-infrastructure/messaging',
				},
				{
					text: 'Deployments',
					link: '/cross-chain-infrastructure/deployments',
				}
			],
		},
		{
			text: 'Getting Started',
			link: '/getting-started',
		},
		{
			text: 'Cross-chain Liquidity Pools',
			link: '/concero-cross-chain-liquidity-pools',
		},
		{
			text: 'JS SDK',
			link: '/concero-js-sdk',
		},
	],
})
