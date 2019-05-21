
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://gank.io/api';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex"], //,"wx","alipay","baidu"
  buildInfo: {
    wxAppId: '123456'
  },
  base: {
    dev: {
      domain: {
      }
    },
    build: {
      domain: {
      }
    }
  },
  wx: {
    dev: {
      apiPrefix
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false,
      apiPrefix
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
      apiPrefix
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

