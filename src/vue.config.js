module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': '@assets',
        'views': '@views',
        'common': '@/common',
        'network': '@/network'
      }
    }
  }
}