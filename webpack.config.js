var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
//定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');              //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app');               //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, 'build/static'); //发布文件所存放的目录/pxq/dist/前面加/报错？

module.exports = {
    entry: {
        app: APP_FILE,
        // vendor: ['react', 'react-dom', 'react-router']
    },
    devtool:'eval-source-map',
    output: {
        // publicPath: 'template/',   // 给资源文件添加前缀，一般会把静态资源发布的 cdn 上
        path: BUILD_PATH,                    //编译到当前目录
        // filename: '[name].js',               //编译后的文件名字
        // chunkFilename: '[name].[chunkhash:5].min.js'
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'] //后缀名自动补全
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader'
        },{
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer'])
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({                    //根据模板插入css/js等生成最终HTML
            filename: '../index.html',             //生成的html存放路径，相对于output中的path而言的
            template: './src/template/index.html', //html模板路径
            inject: 'body',
            hash: true
        }),
        new ExtractTextPlugin('[name].css'),
        // new webpack.optimize.CommonsChunkPlugin({name: 'vendor',
        //     filename: '[name].js'
        // }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false // remove all comments （移除所有注释）
            },
            compress: {          // 压缩
                warnings: false
            }
        })
    ]
};
