/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "noto" :["nunito sans", "sans-serif", "cursive"]
      },
      boxShadow: {
        'sharp-2xl':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '13px 13px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-xl':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '11px 11px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-lg':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '9px 9px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp-md-noborder':[
          '6px 6px 0 0 rgba(57, 57, 57, 1)' 
        ],
        'sharp-md':[
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '6px 6px 0 0 rgba(57, 57, 57, 1)' 
        ],
        'sharp-sm': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '4px 4px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        'sharp': [
          '0 0 0 1px rgba(0, 0, 0, 1)', // Black border
          '7px 7px 0 0 rgba(57, 57, 57, 1)' // Existing shadow
        ],
        
      },
      screens: {
        sm0:'440px',
        sm: '640px',   // Small devices (mobile)
        md: '768px',   // Medium devices (tablet)
        lg: '1024px',  // Large devices (laptop)
        lg2: '1100px',
        xl: '1280px',  // Extra large devices (desktop)
        '2xl': '1536px', // 2x Extra large devices (large desktop)
        '3xl': '1640px'
      },
    },
   
  },
  plugins: [],
}

