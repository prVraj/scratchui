import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        surface: '#FFFFFF',
        border: '#E5E7EB',
        'border-strong': '#D1D5DB',
        text: {
          primary: '#0A0A0A',
          secondary: '#525252',
          muted: '#9CA3AF',
        },
        accent: '#0A0A0A',
        'accent-hover': '#262626',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['30px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'label': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        'body': ['15px', { lineHeight: '1.6' }],
        'body-sm': ['13px', { lineHeight: '1.5' }],
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        card: '8px',
        btn: '6px',
      },
      maxWidth: {
        content: '720px',
      },
    },
  },
  plugins: [],
}

export default config
