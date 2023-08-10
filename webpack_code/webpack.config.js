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
        // 入口文件的文件名   前面加一个 js/ 区分每个文件的路径
        filename:'static/js/main.js',
        // 自动将上次打包目录资源清空
        clean: true, 

    },
    // loader（加载器）
    // webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析
    module:{
        rules:[
            // loader 的配置
            {
                test: /\.css$/i,  // 检测xxx文件(.css结尾文件)
                // 执行顺序：从右到左(从下到上)
                use: [
                 // 将js中css通过创建style标签添加到html文件中生效
                 "style-loader",
                 // 将css资源编译成commonjs的模块到js中
                 "css-loader",

                ],
            },
            {
                test: /\.less$/i,  // 只能使用一个loader
                use: [
                  // 使用多个loader
                  'style-loader',
                  'css-loader',
                  'less-loader',  // 将less编译成css文件
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // 将 JS 字符串生成为 style 节点
                  'style-loader',
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                ],
              },
            // 处理.styl样式资源
            {
            test: /\.styl$/i,
            use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 stylus 编译成 CSS
                'stylus-loader',
            ],
            },
            // 处理图片资源  
            // Webpack5 已经将file-loader 和 url-loader功能内置到 Webpack 里了，只需要简单配置即可处理图片资源
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                      maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    //   优点：减少请求数量
                    //   缺点：体积变得更大
                    }
                },
                // generator 表示对应文件的保存路径
                generator:{
                    // 输出图片名称  hash 是哈希值会填充在点号的前面  ext 是文件格式在逗号后面 query 是一些其他参数
                    // hash:10 代表只取hash值的前10位
                    filename:"static/images/[hash:10][ext][query]"
                }
            },
        
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