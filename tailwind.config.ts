import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1e40af',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          dark: '#334155',
          foreground: '#ffffff'
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff'
        },
        background: {
          DEFAULT: '#f8fafc',
          dark: '#1e293b'
        },
        accent: {
          DEFAULT: '#f59e42',
          light: '#fbbf24',
          dark: '#b45309',
          foreground: '#1e293b'
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#f1f5f9'
        },
        muted: {
          DEFAULT: '#e5e7eb',
          dark: '#475569'
        },
        input: {
          DEFAULT: '#e2e8f0'
        },
        ring: {
          DEFAULT: '#2563eb'
        },
        success: '#22c55e',
        warning: '#facc15',
        error: '#ef4444',
        info: '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        md: '0.5rem',
        lg: '1rem',
      },
      boxShadow: {
        md: '0 4px 24px 0 rgba(30, 41, 59, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config
