import mdsvexConfig from './mdsvex.config.js';

import adapter from '@sveltejs/adapter-cloudflare-workers';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [preprocess(), mdsvex(mdsvexConfig)],
    kit: {
        target: '#svelte',
        adapter: adapter(),
    },
};

export default config;
