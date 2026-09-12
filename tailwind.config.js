/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alzo: {
          bg: '#fafbfe',
          surface: '#ffffff',
          card: '#ffffff',
          subtle: '#f1f5f9',
          border: 'rgba(15, 23, 42, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.35)',
          blue: '#2563eb',
          electric: '#0284c7',
          violet: '#7c3aed',
          purple: '#9333ea',
          deepNavy: '#0f172a',
          muted: '#64748b',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-alzo': 'linear-gradient(135deg, #0284c7 0%, #2563eb 40%, #7c3aed 100%)',
        'gradient-alzo-text': 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)',
        'gradient-light-radial': 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.04) 40%, transparent 75%)',
        'gradient-glow-hero': 'radial-gradient(circle at 60% 30%, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
