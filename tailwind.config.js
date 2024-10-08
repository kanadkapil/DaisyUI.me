/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src//*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [

            "emerald",
            "retro",
            "cyberpunk",
            "halloween",
            "pastel",
            "dracula",
            "lemonade",
            "night",
            "coffee", ,
        ],
    },
}



// module.exports = {
//     daisyui: {
//       themes: [
//         {
//           mytheme: {
            
//   "primary": "#0083fa",
            
//   "primary-content": "#000615",
            
//   "secondary": "#00ac00",
            
//   "secondary-content": "#000b00",
            
//   "accent": "#00b4ff",
            
//   "accent-content": "#000c16",
            
//   "neutral": "#08040a",
            
//   "neutral-content": "#c6c4c7",
            
//   "base-100": "#fffde2",
            
//   "base-200": "#dedcc4",
            
//   "base-300": "#bebca8",
            
//   "base-content": "#161612",
            
//   "info": "#2d7df8",
            
//   "info-content": "#010515",
            
//   "success": "#00ca61",
            
//   "success-content": "#000f03",
            
//   "warning": "#fb7400",
            
//   "warning-content": "#150500",
            
//   "error": "#ff0046",
            
//   "error-content": "#160002",
//             },
//           },
//         ],
//       },
//       plugins: [
//         require('daisyui'),
//       ],
//       //...
//     }


// module.exports = {
//     daisyui: {
//       themes: [
//         {
//           mytheme: {
            
//   "primary": "#ce00ff",
            
//   "primary-content": "#0f0016",
            
//   "secondary": "#00d8c5",
            
//   "secondary-content": "#00110e",
            
//   "accent": "#0083b8",
            
//   "accent-content": "#00060c",
            
//   "neutral": "#00241b",
            
//   "neutral-content": "#c7cfcc",
            
//   "base-100": "#fff4e5",
            
//   "base-200": "#ded4c7",
            
//   "base-300": "#beb5aa",
            
//   "base-content": "#161412",
            
//   "info": "#00b5ff",
            
//   "info-content": "#000c16",
            
//   "success": "#8ad600",
            
//   "success-content": "#071000",
            
//   "warning": "#c69e00",
            
//   "warning-content": "#0e0900",
            
//   "error": "#ff575b",
            
//   "error-content": "#160303",
//             },
//           },
//         ],
//       },
//       plugins: [
//         require('daisyui'),
//       ],
//       //...
//     }