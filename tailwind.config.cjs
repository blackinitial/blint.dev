module.exports = {
  darkMode: 'media',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
        '4xl': '2rem',
				'5xl': '3rem',
				'6xl': '5rem',
      },
			colors: {
				'brand-primary': 'var(--brand-primary)',
				'brand-secondary': 'var(--brand-secondary)',
				'brand-tertiary': 'var(--brand-tertiary)'
			},
			backgroundColor: {
        brand: 'var(--brand-bg)',
				'brand-card': 'var(--brand-card)'
      },
      textColor: {
        brand: 'var(--brand-text)',
				'brand-head': 'var(--brand-head)'
      },
		}
	},
	plugins: [],
};
