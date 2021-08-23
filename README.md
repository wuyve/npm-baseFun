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
1. 在项目中安装此NPM包 ``