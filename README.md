# CreatPixels - 复古打字机风格网页

一个简洁优雅的复古打字机拟物站点：

- 上方：打字机机身 + 拟物化按键导航
- 下方：卷纸式文章阅读区
- 交互：按键按下反馈 + 滚动联动激活导航

## 本地预览

```bash
python3 -m http.server 4173
```

打开：`http://localhost:4173`

## GitHub Pages 发布

仓库已包含工作流：`.github/workflows/pages.yml`。

你已经完成了 **Source = GitHub Actions**，接下来做这几步：

1. 把本地代码 push 到 GitHub（默认分支建议 `main`）。
2. 打开仓库 **Actions**，查看 `Deploy static site to GitHub Pages` 是否执行成功。
3. 首次成功后，去 **Settings → Pages** 可看到线上地址。

常见地址格式：

`https://<你的用户名>.github.io/<仓库名>/`

> 如需绑定自定义域名，我可以继续帮你加 `CNAME` 与工作流细节。
