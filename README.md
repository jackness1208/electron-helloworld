# electron demo

# 使用说明

## 初始化
执行 npm install 进行组件初始化
```
$ npm install
```

## 运行
```
$ gulp start
```

## 打包
打包分 2 步骤

1. 程序打包
```
$ gulp pack --system <platform>
# @param {String} platform 打包的平台 pc|mac|linux
```

2. 图标更换
windows 下使用 tool/ResHacker.exe 进行图标替换

