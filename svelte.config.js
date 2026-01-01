import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.env.BASE_PATH || ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			crawl: true,
			entries: ['/', '/en', '/zh-cn', '/zh-tw', '/ja', '/ko', '/fr', '/ru', '/es', '/pt']
		}
	}
};

export default config;
