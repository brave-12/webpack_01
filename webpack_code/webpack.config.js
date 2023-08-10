const path = require('path')  // nodejs核心模块。专门用来处理路径问题

module.exports = {
    // entry（入口）
    // 指示 Webpack 从哪个文件开始打包
    entry:'./src/main.js',  // 相对路径

    // output（输出）
    // 指示 Webpack 打包完的文件输出到哪里去，如何命名等
    output:{
        // 文件的输出路径  __dirname nodejs的变量  代表当前文件的文件夹目录
        path:path.resolve(__dirname,"dist"),  // 绝对路径
        // 文件名
        filename:'main.js'
    },
    // loader（加载器）
    // webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析
    module:{
        rules:[
            // loader 的配置
        ]
    },
    // plugins（插件）
    // 扩展 Webpack 的功能
    plugins:[
        // plugin的配置
    ],

    // mode（模式）
    // 主要由两种模式：
    // 开发模式：development
    // 生产模式：production 
    mode:'development'
}