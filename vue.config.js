// 作为配置文件，直接导出配置对象即可
module.exports = {
  // publicPath:'/ddwbboard/',
  productionSourceMap:false,
  devServer: {
    // 设置主机地址
    // 设置默认端口
    port: 8090,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://board.gdnxeco.com/',
        //target: 'http://192.168.1.107:8081',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/api': '/api'  //默认所有请求都加了api前缀，需要去掉
        }
      },
      '/lunar/now': {
        // 目标 API 地址
        target: 'https://www.sojson.com',
        //target: 'http://192.168.1.107:8081',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/lunar/now': '/open/api/lunar/json.shtml'  //默认所有请求都加了api前缀，需要去掉
        }
      },
     /* '/tianqi': {
        // 目标 API 地址
        target: 'https://www.tianqiapi.com',
        //target: 'http://192.168.1.107:8081',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/tianqi': '/api'  //默认所有请求都加了api前缀，需要去掉
        }
      },*/
      '/tq': {
        // 目标 API 地址
        target: 'https://ali-weather.showapi.com/gps-to-weather',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/tq': ' '  //默认所有请求都加了api前缀，需要去掉
        }
      },
      '/sqtq': {
        // 目标 API 地址
        target: 'https://ali-weather.showapi.com/hour24',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/sqtq': ' '  //默认所有请求都加了api前缀，需要去掉
        }
      },
      '/video': {
        // 目标 API 地址
        target: 'https://open.ys7.com/api/lapp/live/video/list',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '/video': ' '  //默认所有请求都加了api前缀，需要去掉
        }
      },

    }
  }
}
