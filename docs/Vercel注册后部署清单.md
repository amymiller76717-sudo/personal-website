# Vercel 注册后部署清单

## 准备状态

- GitHub 仓库：`https://github.com/amymiller76717-sudo/personal-website`
- 仓库状态：私有仓库
- 构建命令：`npm run build`
- 输出目录：`dist`
- 框架：Vite

## 注册 / 登录

1. 打开 `https://vercel.com/`。
2. 选择使用 GitHub 登录。
3. 授权 Vercel 访问 GitHub。
4. 如果 Vercel 询问导入范围，优先只授权 `personal-website` 这个仓库。

## 导入项目

1. 在 Vercel Dashboard 点击 `Add New`。
2. 选择 `Project`。
3. 找到 `personal-website` 仓库。
4. 点击 `Import`。
5. Project Name 可保持 `personal-website`。
6. Framework Preset 选择或保持 `Vite`。
7. Build Command 填 `npm run build`。
8. Output Directory 填 `dist`。
9. Install Command 保持 `npm install` 或 `npm ci`。
10. 点击 `Deploy`。

## 部署后检查

部署完成后，Vercel 会给一个 `https://...vercel.app` 地址。

检查：

- 桌面浏览器能打开首页。
- 手机 4G/5G 能打开首页。
- 家庭 Wi-Fi 能打开首页。
- 刷新 5 次没有偶发失败。
- 首页图片、样式和跳转锚点正常。

国内访问记录写到 `docs/国内访问实测表.md`。

## 失败时处理

- 如果提示 GitHub 仓库不可见：回到 GitHub 授权页面，确认 Vercel 有权限访问 `personal-website`。
- 如果构建失败：确认 Build Command 是 `npm run build`，Output Directory 是 `dist`。
- 如果部署成功但页面样式丢失：先不要改平台设置，回到本地跑 `npm run build` 验证产物。
- 如果国内访问不稳定：不要继续在 Vercel 上硬优化，记录实测结果，后续迁移到阿里云 OSS / 腾讯云 COS + CDN。
