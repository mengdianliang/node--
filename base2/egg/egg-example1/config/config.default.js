/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582956134917_8218'

  // add your middleware config here
  config.middleware = []
  // 配置模板引擎
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks' // 左边写成.html后缀，会自动渲染.html文件
    }
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  config.api = 'http://www.itying.com/api'

  return {
    ...config,
    ...userConfig
  }
}
