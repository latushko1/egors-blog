import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import addClasses from 'rehype-add-classes';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), tailwind(), image()],

	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				addClasses,
				{
					h1: 'text-4xl font-bold font-mplus',
					h2: 'text-2xl font-bold font-mplus',
					h3: 'text-xl font-bold font-mplus',
					h4: 'text-lg font-bold font-mplus',
					h5: 'font-bold font-mplus',
					h6: 'font-bold font-mplus',
					img: 'border dark:border-zinc-700 rounded-xl max-w-[550px] mb-6',
					p: 'mb-6 ',
					a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500',
				},
			],
		],
	},
});
