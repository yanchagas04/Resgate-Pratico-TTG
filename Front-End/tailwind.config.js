/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      'backgroundImage': {
        'cardServico': "url('.public/cardServico.png')",
        'cardCurso': "url('.public/cardCurso.png')",
        'cardEquipamento': "url('.public/cardEquipamento.png')"
      }
    },
  },
  plugins: [],
}

