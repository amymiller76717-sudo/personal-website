# 个人网站实验站

这是个人网站第一版静态站，用来最快跑通“本地构建 → 静态托管 → HTTPS 访问 → 国内实测 → 后续迁移”的完整链路。

## 当前边界

- 只做静态网站：个人介绍、项目入口、文章入口、小工具入口。
- 不做登录、评论、数据库、支付或后台。
- 平台只负责托管，站点源码和内容留在本地/Git 仓库里。

## 本地使用

```powershell
npm install
npm run dev
```

本地打开：

```text
http://127.0.0.1:5180/
```

构建：

```powershell
npm run build
```

构建产物在 `dist/`，可部署到 Vercel、Cloudflare Pages、阿里云 OSS 或腾讯云 COS。

## 文档

- `docs/部署手册.md`
- `docs/国内访问实测表.md`
- `docs/Vercel注册后部署清单.md`

## 当前远程仓库

- GitHub：`https://github.com/amymiller76717-sudo/personal-website`
- 当前仓库先保持私有；Vercel 可以通过 GitHub 授权读取私有仓库并部署。
