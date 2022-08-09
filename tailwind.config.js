module.exports = {
  content:[
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_drinks/*.md',
    './src/**/*.vue',
    './*.html',
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
        'icon-mixturer': '62px 71px',
        'icon-baser': '76px 73px',
        'icon-dekokter': '89px 89px',
        'icon-substantia': '61px 70px'
      },
      backgroundImage: theme => ({
        'icon-mixturer': "url(images/icons/icon-mixturer.svg)",
        'icon-baser': 'url(images/icons/icon-baser.svg)',
        'icon-dekokter': 'url(images/icons/icon-dekokter.svg)',
        'icon-substantia': 'url(images/icons/icon-substantia.svg)',
      })
    }
  },
  variants: {},
  plugins: [],
}