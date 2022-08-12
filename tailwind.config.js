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
        'louvette': 'louvette-banner, serif'
      },
      fontSize: {        
        '1_5xl': '1.37rem', 
      },
      backgroundSize: {
        'icon-mixtures': '62px 71px',
        'icon-black-mixtures': '62px 71px',
        'icon-bases': '76px 73px',
        'icon-decoctions': '89px 89px',
        'icon-substantia': '61px 70px'
      },
      colors: {
        'background': '#151515'
      },      
      backgroundImage: theme => ({
        'icon-mixtures': "url(images/icons/icon-mixturer.svg)",
        'icon-black-mixtures': "url(images/icons/icon-black-mixtures.svg)",
        'icon-bases': 'url(images/icons/icon-baser.svg)',
        'icon-decoctions': 'url(images/icons/icon-dekokter.svg)',
        'icon-substantia': 'url(images/icons/icon-substantia.svg)',
      })
    }
  },
  variants: {},
  plugins: [],
}