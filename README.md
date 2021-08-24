# 测试发布一个NPM包

<text style="color: red;">
NPM包 注意事项：NPM包名要全网唯一
</text>

## 发布流程：
1. 初始化项目 `npm init`
2. 安装依赖包 `npm install`
3. 新建dist、src项目文件，编写代码
4. 编写好之后，打包 `npm run build`
5. package.json 里的 `main` 字段指向 `dist` 里的 `js` 文件
6. 新建 `.npmignore` 文件,可以把不需要发布的文件忽略，如果只有 .gitignore，没有 .npmignore，则会使用 .gitignore
7. 登录 `npm login` ，输入账号、密码、邮箱
8. 发布 `npm publish`


## 使用流程
1. 在项目中安装此NPM包 `npm install test-wuyve-npm --save`

```js
import {randomArr} from 'test-wuyve-npm'

console.log(randomArr([1, 2, 3]))
```

2. 升级NPM包
    卸载已有NPM `npm uninstall test-wuyve-npm`
    更新NPM`npm install test-wuyve-npm --save`


## 方法
### randomArr

- 描述：返回随机数组
- 入参：数组
- 出参：随机后的数组

### randomNum
- 描述：返回随机数字
- 入参：最小值，最大值，小数点位数
- 出参：返回最小值和最大值之间的n位小数的随机数

### getUrlParam
- 描述：返回URI参数
- 入参：
- 出参：

### getParamType, 
- 描述：返回数据类型
- 入参：
- 出参：

### deepClone,
- 描述：深拷贝
- 入参：
- 出参：

### formatNum,
- 描述：数值千分位
- 入参：
- 出参：

### uniqArr,
- 描述：数组去重
- 入参：
- 出参：

### uniqArrObj,
- 描述：数组对象去重
- 入参：
- 出参：

### throttle
- 描述：节流
- 入参：
- 出参：
