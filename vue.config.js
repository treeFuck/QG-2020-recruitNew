// const webpack = require("webpack");
// const path = require('path');
const oss = require('./oss.config');
const WebpackAliyunOss = require('webpack-aliyun-oss');

module.exports = {
    devServer: {
        open: true, 
        hot: true,
    },
    //publicPath: 'https://qg-oss-static.oss-cn-shenzhen.aliyuncs.com/2020-rec/wsg/',
    publicPath: './',

    productionSourceMap: false,
  // configureWebpack: config => {
  //   let webpackAliyunOss = [
  //     new WebpackAliyunOss({
  //       from: ['./dist/**', '!./dist/**/*.html'], // 上传那个文件或文件夹  可以是字符串或数组
  //       dist: "2020-rec/wsg",  // 需要上传到oss上的给定文件目录
  //       region: oss.region,
  //       accessKeyId: oss.accessKeyId,
  //       accessKeySecret: oss.accessKeySecret,
  //       bucket: oss.bucket,
  //       // test: true,
  //       setOssPath: filePath => {
  //         // some operations to filePath
  //         let index = filePath.lastIndexOf("dist");
  //         let Path = filePath.substring(index + 4, filePath.length);
  //         return Path.replace(/\\/g, "/");
  //       },
  //       setHeaders: filePath => {
  //         // some operations to filePath
  //         // return false to use default header
  //         return {
  //           "Cache-Control": "max-age=31536000"
  //         };
  //       }
  //     })
  //   ];
  //   config.plugins = [...config.plugins, ...webpackAliyunOss ];
  // }

}