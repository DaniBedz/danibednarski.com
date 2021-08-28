import mdsvexConfig from './mdsvex.config.js';

import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

const config = {
    'extensions': ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [preprocess(), mdsvex(mdsvexConfig)],
    kit: {
        target: '#svelte',
        adapter: adapter({
            env: {
                host: '127.0.0.1',
                port: '3000',
            },
        }),
    },
};

export default config;
