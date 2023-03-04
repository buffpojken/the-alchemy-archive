module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_drinks/*.md',
    './src/**/*.vue',
    './*.html',
  ],
  safelist: [
    {
      pattern: /bg-icon-black-*/
     }
  ],
  theme: {
    extend: {
      fontFamily: {
        'louvette': 'louvette-banner, serif', 
        'aviano': 'aviano, serif'
      },
      fontSize: {        
        '1_5xl': '1.37rem', 
      },
      backgroundSize: {
        'icon-mixtures': '62px 71px',
        'icon-black-mixtures': '62px 71px',
        'icon-bases': '76px 73px',
        'icon-decoctions': '89px 89px',
        'icon-substantia': '61px 70px',
        'mixture-list-icon': '32px 42px', 
        'mixture-list-icon-filled': '32px 42px'
      },
      colors: {
        'background': '#151515'
      },      
      borderWidth: {
        '3': '3px'
      },
      backgroundImage: theme => ({
        'icon-mixtures': "url(images/icons/icon-mixturer.svg)",
        'icon-black-mixtures': "url(images/icons/icon-black-mixtures.svg)",
        'icon-bases': 'url(images/icons/icon-baser.svg)',
        'icon-decoctions': 'url(images/icons/icon-dekokter.svg)',
        'icon-substantia': 'url(images/icons/icon-substantia.svg)',
        'mixture-list-icon': 'url(images/list-mixing-glas.svg)', 
        'mixture-list-icon-filled': 'url(images/list-mixing-glas-filled.svg)',
        'decoct-list-icon': 'url(images/list-bg-ekolv.svg)', 
        'decoct-list-icon-filled': 'url(images/list-bg-ekolv-filled.svg)',
        'base-list-icon': 'url(images/list-bg-bottle.svg)', 
        'base-list-icon-filled': 'url(images/list-bg-bottle-filled.svg)'
      })
    }
  },
  variants: {},
  plugins: [],
}