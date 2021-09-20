import mdsvexConfig from './mdsvex.config.js';

import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';

// import adapter from '@sveltejs/adapter-cloudflare-workers';

const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [mdsvex(mdsvexConfig)],
    kit: {
        target: '#svelte',
        adapter: adapter(),
    },
};

export default config;
