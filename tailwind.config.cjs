const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
	theme: {
		container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
		extend: {
			// fontFamily: {
      //   'sans': ['Satoshi', ...defaultTheme.fontFamily.sans],
			// 	'serif': ['Erode', ...defaultTheme.fontFamily.serif]
      // },
			// borderRadius: {
      //   '4xl': '2rem',
			// 	'5xl': '3rem',
			// 	'6xl': '5rem',
      // },
			// colors: {
			// 	'brand-primary': 'var(--brand-primary)',
			// 	'brand-secondary': 'var(--brand-secondary)',
			// 	'brand-tertiary': 'var(--brand-tertiary)'
			// },
			// backgroundColor: {
      //   brand: 'var(--brand-bg)',
			// 	'brand-card': 'var(--brand-card)'
      // },
      // textColor: {
      //   brand: 'var(--brand-text)',
			// 	'brand-head': 'var(--brand-head)'
      // },
			colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("tailwindcss-animate")
	],
};
