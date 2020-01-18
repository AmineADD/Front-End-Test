/* config-overrides.js */
const rewireProvidePlugin = require('react-app-rewire-provide-plugin')

module.exports = function override(config, env) {
  // Use `webpack.ProvidePlugin` to add jQuery globally
  config = rewireProvidePlugin(config, env, {
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  })
  return config;
}