## 优化网站性能

把这个卡卡的网站变得如丝般顺滑

### 启动这个网站
1. 将这个代码库导出
2. 你可以运行一个本地服务器，以便在你的手机上检查这个站点

```bash
  $> cd /你的工程目录
  $> python -m SimpleHTTPServer 8080
```

1. 打开浏览器，访问 localhost:8080
2. 下载 [ngrok](https://ngrok.com/) 并将其安装在你的工程根目录下，让你的本地服务器能够被远程访问。

``` bash
  $> cd /你的工程目录
  $> ./ngrok http 8080
```

1. 复制ngrok提供给你的公共URL，然后访问它吧！

### 优化步骤

1. 将style.css中的媒体查询部分分离成portrait.css，并在index.html中给portrait.css和print.css添加媒体查询条件。

2. 删除google的web字体，太拖慢速度了，尤其在中国。

3. 删除google analytics部分，不造干嘛用的。

4. 将更改也应用到project-2048, project-mobile, project-webperf三个页面中。

5. 将index.html中content的img下载下来放入本地文件夹，并且修改src，国内加载这几张图片实在是太慢了。

6. 压缩pizzeria.jpg,pizza.png和profilepic.jpg，尽量减少加载的数据大小。

7. 修改main.js的函数changePizzaSizes，简化这个方法，并消除强制同步布局。

8. 修改main.js中生成的披萨滑窗数，200个也太多了。

9. 在style.css中为.mover添加will-change属性，简化绘制流程。
