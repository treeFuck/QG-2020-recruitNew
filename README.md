# 2020招新网总结

### 一、PC端、ipad端、手机端分离
- css
    ```
    // PC
    @media only screen and (min-width: 1025px) {

    }
    // ipad
    @media only screen and (max-width: 1024px) and (min-width: 741px) {
 
    }
    // 手机
    @media only screen and (max-width: 740px) {

    }
    ```
- js判断
    ```
    getEquipment() {
      if ($(window).width() <= 740) {
        // this.$store.state.equipment = "phone";
      } else if ($(window).width() <= 1024) {
        // this.$store.state.equipment = "ipad";
      } else {
        // this.$store.state.equipment = "PC";
      }
    }
    ```
### 二、获取浏览器
```
    getBrowser() {
      let UserAgent = navigator.userAgent.toLowerCase();
      let browser = null;
      let browserArray = {
        IE: window.ActiveXObject || "ActiveXObject" in window, // IE
        Chrome:
          UserAgent.indexOf("chrome") > -1 && UserAgent.indexOf("safari") > -1, // Chrome浏览器
        Firefox: UserAgent.indexOf("firefox") > -1, // 火狐浏览器
        Opera: UserAgent.indexOf("opera") > -1, // Opera浏览器
        Safari:
          UserAgent.indexOf("safari") > -1 && UserAgent.indexOf("chrome") == -1, // safari浏览器
        UC: /ucbrowser/.test(UserAgent), // uc浏览器
        Edge: UserAgent.indexOf("edge") > -1, // Edge浏览器
        QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
        WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
      };
      for (var i in browserArray) {
        if (browserArray[i]) {
          browser = i;
        }
      }
      if (!browser) {
        browser = "";
      }
      browser = browser.toLowerCase();
      if (browser == "chrome") {
        // 区分低版本chrome和高版本chrome
        let cores = UserAgent.split(" ");
        for (let i = 0; i < cores.length; i++) {
          if (cores[i].indexOf("chrome") > -1) {
            if (parseInt(cores[i].split("/")[1]) < 68) {
              browser = "lowChrome";
            }
          }
        }
      }
      // this.$store.state.browserName = browser;
    },
```

### 三、事件监听
- 手机端触摸和滚动
```
    let touchStartY，touchEndY;
    let app = DOM;
    util.addHandler(app, "touchstart", event => {
      event.preventDefault();
      touchStartY = event.changedTouches[0].pageY;
    });
    util.addHandler(app, "touchend", event => {
      event.preventDefault();
      touchEndY = event.changedTouches[0].pageY;
      touchChangePage();
    });
    touchChangePage() {
      // 触摸滚动事件
      let distance = touchEndY - touchStartY;
      if (distance < 50 && distance > -50) {
        // 点击
        event.stopPropagation();
        return;
      }
      if (distance > 0) {
        // 上滚
      } else {
        // 下滚
      }
      event.stopPropagation();
    }
```
- pc端鼠标滚滑
```
    if (browserName === "firefox") {
    // browserName 浏览器名字
      util.addHandler(app, "DOMMouseScroll", scrollChangePage);
    } else {
      util.addHandler(app, "mousewheel", scrollChangePage);
    }
    scrollChangePage() {
      // event.preventDefault();
      let detail = event.wheelDelta || event.detail;
      let scrollTop = $(window).scrollTop;
      if (browserName === "firefox") {
        detail = -detail;
      }
      let index = this.index;
      if (detail > 0) {
        // 上滚
      } else if (detail < 0) {
        // 下滚
      }
      // event.stopPropagation();
    },
```

### 四、换页动画设计
- 大体上，是用index和transform的改变来制造换页动画。特殊的是，给换页的时候，给换页时的上一页加了一个svg的path路径作为边缘修饰。边缘的动效是通过改变path的d属性来渲染。值得提醒的是，这个d属性的动效有点苛刻，要保证d属性里面的的各种参数数量相同，而且在火狐、ie浏览器里面这个动效不兼容。
- **难点总结**：
    + **浏览器不兼容问题**：因为火狐和ie等浏览器不兼容path的d属性改变的动效，所以后来采用了两个办法去解决，但是都产生了另外一个bug——页面卡顿：
        - ++动画库渲染++：引用了animate.js来渲染svg动画，虽然解决了浏览器兼容问题，可是页面卡顿的厉害
        - ++DOM重新渲染++：++换页时给DOM插入这个svg，因为是新插入的DOM，所以DOM会重新渲染这个svg，可以利用这一点做svg动画，也能解决浏览器兼容问题，但是依旧卡顿，虽然卡顿程度要比动画库渲染要低。
    + **渲染卡顿**：因为以上两种办法都不难很好地渲染出svg动画，所以，我采用了原生代码动画，直接DOM操作修改path节点的d属性。但是这个动画浏览器兼容效果不好，在火狐、ie上无法显示。不过，在手机端上，普遍有动画效果，所以最后还是采用原生动画。
    + **手机端动画卡顿问题**：手机端浏览器对于动画有着普遍不支持的特征。尝试了很多办法，最好锁定两个优化方法:
        - ++减少多余动画++
        - ++开启CPU渲染++。我开启CPU渲染的方法是，换页动画的transform属性，用了translate3d来产生位移。
        - 定时器用`window.requestAnimationFrame`代替

### 五、svg动画
+ 这次项目，尝试了一些svg动效，效果确实比CSS3的强大和丰富。下面简要介绍，我用过的动画：
    + **描边动画**：主要用了path的stroke-dasharray（路径间隙）、stroke-dashoffset（路径位移）属性，通过一开始把stroke-dasharray设为path的长度，然后stroke-dashoffset的位移也设到path的长度，动画的时候把stroke-dashoffset设为0，就看产生动画效果。
    ```
    .path { //默认类
		fill-rule:evenodd;
		clip-rule:evenodd;   
		fill: none;   // 内部没颜色
		stroke: #666;  // 路径颜色
		stroke-linecap: round;  // 端点平滑
		stroke-width:5; // 路径宽度
		stroke-dasharray: 1008; 
		stroke-dashoffset: 1009;
		transition: stroke-dashoffset 1.5s;
	}
    .pathShow { // 动画类
        stroke-dashoffset: 0;
    }
    ```
    + **Lottie动画**：一个可以直接用json数据生成动画的组件。方便设计师给动画效果，而且动画渲染也很好，只是因为是自动生成的问题，有一些最后在DOM渲染的动画代码会很冗长，不适合小型简单动画。

### 六、字蛛压缩字体
+ 安装`npm install font-spider -g`
+ 新建一个font.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
      @charset 'utf-8';
        @font-face {
            font-family: 'one';                 
            src: url('./src/assets/font1.ttf');            
        }
        @font-face {
            font-family: 'two';                 
            src: url('./src/assets/font2.ttf');            
        }
        #one {
            font-family: 'one';                      
        }
        #two {
            font-family: 'two';   
        }
  </style>
</head>
<body>
  <div id="one">用字体font1的字放到这里</div>    
  <div id="two">用字体font2的字放到这里</div>
   <!-- <p>font-spider ./font.html</p> -->
</body>
</html>
```
+ 在font.html所在目录下，用命令行输入`font-spider ./font.html`
+ 最后，会在原本放字体font1.ttf和font2.ttf的目录里，重新压缩出新的font1.ttf和font2.ttf，原本的font1.ttf和font2.ttf会保存在一个.font-spider文件夹里面。

### 七、阿里云oss资源上传
- oss.config.js 
```
module.exports = {
	region: 'oss-cn-shenzhen', 
	accessKeyId: '……',
	accessKeySecret: '……',
	bucket: 'qg-oss-static'
}
```
- vue.config.js
```
const oss = require('./oss.config');
const WebpackAliyunOss = require('webpack-aliyun-oss');

module.exports = {
    devServer: {
        open: true, 
        hot: true,
    },
    productionSourceMap: false,
    // publicPath: './',
    publicPath: 'https://xxx.oss-cn-shenzhen.xxx.com/data/',

  configureWebpack: config => {
    let webpackAliyunOss = [
      new WebpackAliyunOss({
        from: ['./dist/**', '!./dist/**/*.html'], // 上传那个文件或文件夹  可以是字符串或数组
        dist: "data",  // 需要上传到oss上的给定文件目录
        region: oss.region,
        accessKeyId: oss.accessKeyId,
        accessKeySecret: oss.accessKeySecret,
        bucket: oss.bucket,
        // test: true,
        setOssPath: filePath => {
          // some operations to filePath
          let index = filePath.lastIndexOf("dist");
          let Path = filePath.substring(index + 4, filePath.length);
          return Path.replace(/\\/g, "/");
        },
        setHeaders: filePath => {
          // some operations to filePath
          // return false to use default header
          return {
            "Cache-Control": "max-age=31536000"
          };
        }
      })
    ];
    config.plugins = [...config.plugins, ...webpackAliyunOss ];
  }
}
```
- `npm run build` 或者 `npm run serve`
