export default {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.t = (key, data) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return window.i18n.t(key, data)
    }
  }
}