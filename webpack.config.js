const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口
    output:{
        filename:"built.js",
        path:resolve(__dirname,'build')
    },
    // loader的配置
    module:{
        // 详细loader配置
        rules:[
            {
                // 匹配哪些文件
                test:/\.css$/,
                // 使用哪些loader处理
                use:[
                    // 创建style标签 将js中的样式资源插入head中
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中 内容是字符串
                    'css-loader'
                ]
            }
        ],
    },
    // plugins的配置
    plugins:[
        // html-webpack-plugin
        // 默认创建空的html文件并且自动引入打包的js文件
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html"
            }
        )
    ],
    mode:'development'
}