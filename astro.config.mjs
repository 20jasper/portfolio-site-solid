import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		redirects: true,
	},
	redirects: {
		'/': '/projects/1',
	},
});
