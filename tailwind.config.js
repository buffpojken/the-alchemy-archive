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
      zIndex: {
        '1': '1', 
        '2': '2', 
        '3': '3', 
        '4': '4', 
        '5': '5'
      },
      backgroundSize: {
        'icon-mixtures': '62px 71px',
        'icon-black-mixtures': '62px 71px',
        'icon-bases': '76px 73px',
        'icon-decoctions': '89px 89px',
        'mixture-list-icon': '32px 42px', 
        'mixture-list-icon-filled': '32px 42px',
        'mixture-pageheader-icon': '37px 61px',
        'decoctions-pageheader-icon': '45px 71px',
        'bases-pageheader-icon': '40px 63px',
        'mixture-mobile-pageheader-icon': '30px 52px',
        'decoctions-mobile-pageheader-icon': '30px 52px',
        'bases-mobile-pageheader-icon': '30px 52px',
        'icon-mobile-back-mixtures': '44px 44px',
        'icon-mobile-back-bases': '44px 44px',
        'icon-mobile-back-decoctions': '44px 44px'
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
        'mixture-list-icon': 'url(images/list-mixing-glas.svg)', 
        'mixture-list-icon-filled': 'url(images/list-mixing-glas-filled.svg)',
        'decoct-list-icon': 'url(images/list-bg-ekolv.svg)', 
        'decoct-list-icon-filled': 'url(images/list-bg-ekolv-filled.svg)',
        'base-list-icon': 'url(images/list-bg-bottle.svg)', 
        'base-list-icon-filled': 'url(images/list-bg-bottle-filled.svg)',
        'mixture-pageheader-icon': 'url(images/list-mixing-glas-filled.svg)',
        'decoctions-pageheader-icon': 'url(images/list-bg-ekolv-filled.svg)',
        'bases-pageheader-icon': 'url(images/list-bg-bottle-filled.svg)',
        'mixture-mobile-pageheader-icon': 'url(images/list-mixing-glas-filled.svg)',
        'decoctions-mobile-pageheader-icon': 'url(images/list-bg-ekolv-filled.svg)',
        'bases-mobile-pageheader-icon': 'url(images/list-bg-bottle-filled.svg)',
        'icon-mobile-back-mixtures': "url(images/icons/icon-mixturer.svg)",
        'icon-mobile-back-bases': 'url(images/icons/icon-baser.svg)',
        'icon-mobile-back-decoctions': 'url(images/icons/icon-dekokter.svg)'


      })
    }
  },
  variants: {},
  plugins: [],
}