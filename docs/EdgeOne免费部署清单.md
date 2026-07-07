# EdgeOne 免费部署清单

## 当前项目参数

- GitHub 仓库：`https://github.com/amymiller76717-sudo/personal-website`
- 仓库可见性：public
- 分支：`main`
- 框架：Vite
- 安装命令：`npm install`
- 构建命令：`npm run build`
- 输出目录：`dist`
- 环境变量：无

## 推荐方式：导入 Git 仓库

1. 打开 `https://pages.edgeone.ai/zh`。
2. 登录腾讯账号后进入控制台。
3. 点击 `Create project`。
4. 选择 `Import Git repository`。
5. 选择 GitHub，并授权访问 `personal-website` 仓库。
6. 选择仓库 `amymiller76717-sudo/personal-website`。
7. 部署设置填写：
   - Project name：`personal-website`
   - Production branch：`main`
   - Framework preset：`Vite`
   - Install command：`npm install`
   - Build command：`npm run build`
   - Output directory：`dist`
8. 不填写环境变量。
9. 点击部署，等待 1-3 分钟。
10. 复制 EdgeOne 分配的访问地址，写入 `docs/国内访问实测表.md`。

## 备选方式：直接上传 ZIP

如果 GitHub 授权或导入失败，使用直接上传：

1. 本地运行 `npm run build`。
2. 上传文件：`dist-edgeone-upload.zip`。
3. 如果平台要求上传文件夹而不是 ZIP，上传 `dist/` 目录内容。

当前已生成的 ZIP：

```text
C:\Users\fy\Desktop\新建文件夹\04 Projects\Personal Website\dist-edgeone-upload.zip
```

## 验收

- EdgeOne 地址能打开首页。
- 首页标题显示 `个人网站实验站`。
- 样式正常，流程图正常。
- 手机 4G/5G 能打开。
- 家庭 Wi-Fi 能打开。

## 注意

- EdgeOne Makers / Pages 免费方案适合当前静态站试运行。
- 如果以后绑定正式中国内地域名，仍然要关注备案要求。
- GitHub Pages 仍保留为临时备用地址。
