🔗 **Wiki 链接**：[课程大纲 Wiki 首页](https://github.com/acaGPT/lettersjourney/blob/main/index.html) · [第 1 课讲稿](https://github.com/acaGPT/lettersjourney/blob/main/lesson-01.html) · [仓库 acaGPT/lettersjourney](https://github.com/acaGPT/lettersjourney)

# 字母的旅程：从尼罗河到英吉利

> ### 🔒 版权声明（All Rights Reserved）
>
> Copyright (c) 2026 Binny. **保留所有权利。**
> 本仓库及课程 Wiki（大纲、讲稿、词表、图示、页面代码）整体依「保留所有权利」原则处理：
> 未获书面许可，不得以复制、改写、汇编、翻译、上传网络、制作衍生讲义、商业性使用等方式利用。
> 课堂内为教学目的之讲授、投影、复印，属许可范围内之使用；公开出版、网络公开发布、商业培训或二次改编须先行取得书面同意。
> 详见仓库根目录 [`LICENSE`](LICENSE)；联系邮箱 4she2run2024@gmail.com。

> An interactive teaching wiki for an etymological English alphabet course grounded in Homer's Greek.
> 基于荷马史诗希腊文底本与英文注释本的英语字母词源启蒙课程（三单元二十课）。

**English title.** *The Journey of Letters: From the Nile to England — An Etymological Alphabet Course Grounded in Homer's Greek*

---

## Wiki 入口

| 入口 | 链接 |
|------|------|
| 课程大纲 Wiki（站点首页） | [lettersjourney/index.html](https://github.com/acaGPT/lettersjourney/blob/main/index.html) |
| 第 1 课讲稿（牛头与飞鸟 A, A） | [lesson-01.html](https://github.com/acaGPT/lettersjourney/blob/main/lesson-01.html) |
| 仓库主页（PUBLIC · 默认分支 main） | [acaGPT/lettersjourney](https://github.com/acaGPT/lettersjourney) |

> 在仓库主页点开 `index.html` 即可浏览课程大纲 Wiki；从首页「第一单元 · 动物与自然」的第 1 课卡片「打开讲稿」进入第 1 课。
> 站点为纯静态文件（无构建、无依赖），离线状态下双击本地 `index.html` 同样可用。

---

## 项目简介

这门课以中文为母语的混龄小组为对象（高龄段负责考证与表达，低龄段负责形象记忆与绘画），
以「画一个东西、读它的名字、再取其首音」为线索，带学生走完
**埃及象形 → 腓尼基 → 希腊 → 拉丁 → 英语** 的字母演化链，并把落脚点放回**英文单词本身**。

荷马史诗在本课程中承担「希腊字母阶段」的原文语料：学生亲见 α↔A、β↔B 的形音对应，
并借英文注释本把希腊词引入英语词汇，而非学习古希腊语。

**核心教学原则（务必遵守）**
- 词汇表只收**本字母词**（以该字母开头或含该字母词根）；母题形象词若不以本字母开头，移出词汇表，仅作画图母题与词源彩蛋。
- **图画原型 ≠ 含义**：牛头、飞鸟、眼睛等是字母当初提示读音的「意象 / 图案」，字母本身只表音，不表示那一物。
- 荷马原文语料只用于展示「该字母的字母阶段形音」；原文词若恰好同主题（如「鹰」「牛」），
  必须显式标注为「仅意象呼应、非词形关联、非同源」，不作遗传关系讲解。
- 每个词都要讲清「与字母来源 / 意象的关联」，统一模式讲解。

---

## 目录结构

```
.
├── index.html                  # 课程大纲 Wiki 首页（三单元二十课，课次卡片可点开）
├── lesson-01.html              # 第 1 课讲稿（牛头与飞鸟 A, A）
├── assets/
│   ├── css/wiki.css            # 站点样式（明暗双主题）
│   └── js/wiki.js              # 交互脚本（主题 / 搜索 / 标签页 / 演化链 / 词族筛选）
├── 字母词源英语教学大纲.md        # 大纲 Markdown 源档（可编辑设计稿）
└── 第一课讲稿.md                 # 第 1 课讲稿 Markdown 源档（可编辑设计稿）
```

---

## 使用方法

**作为站点打开**
直接用浏览器打开 `index.html` 即可（纯静态，无构建、无依赖、无需服务器）。
从首页「第一单元 · 动物与自然」的 **第 1 课卡片 → 打开讲稿**，即进入 `lesson-01.html`。

**作为编辑稿修改**
- 大纲与讲稿的**事实内容**以两份 Markdown 源档为准（`字母词源英语教学大纲.md`、`第一课讲稿.md`）；
- 站点页面为可编辑的 HTML，改完同步更新对应 Markdown，保持两处一致；
- 新增课时：在 `index.html` 对应单元的 `.lesson-grid` 内增加一张 `.lesson-card`，
  把 `data-search` 填上课次 / 主题 / 字母关键词，再把「待产出」换成指向新页面的链接。

**交互功能**
| 功能 | 位置 | 说明 |
|------|------|------|
| 明暗主题切换 | 页头「主题」 | 偏好记入 localStorage，默认跟随系统 |
| 课次搜索 | 页头「搜索」 | 按课次 / 主题 / 字母 / 关键词过滤课次卡片 |
| 字母演化链 | 首页「教学主线」 | 点击任一阶段，下方显示该阶段在课程中的角色 |
| 讲稿标签页 | 第 1 课页 | 教师口述 / 板书投屏 / 英文词族词汇卡 / 教师参考 |
| 词族分层筛选 | 词汇卡页 | 全部 / 高龄派生词 / 低龄简单词 |

---

## 语料来源（课件写作依据）

- 希腊文底本：Homer, *Homeri Opera* (ed. D. B. Monro & T. W. Allen), Oxford Classical Texts, 1902–1912；
  Perseus Digital Library（CC BY-SA）：Iliad `urn:cts:greekLit:tlg0012.tlg001`、Odyssey `urn:cts:greekLit:tlg0012.tlg002`。
- 英译对照：Loeb Classical Library *Iliad* (L170N/L171N) & *Odyssey* (L104/L105)，A. T. Murray 译，rev. Wyatt / Dimock。
- 英文注释本：Richmond Lattimore (1951/1965)；Robert Fagles, intro. & notes Bernard Knox (1990/1996)；Emily Wilson (2017/2023)；Peter Green (2015/2018)。
- 专业注释：G. S. Kirk 等《The Iliad: A Commentary》6 卷 (1985–1993)；A. Heubeck 等《A Commentary on Homer's Odyssey》3 卷 (1988–1992)。
- 词源核验：OED / Etymonline。

---

## 版权协议

**All Rights Reserved（保留所有权利）**——不采用任何开源 / 开放内容许可（非 CC、非 GPL），
以最严格方式保留全部权利。

- 仓库根目录 [`LICENSE`](LICENSE) 为版权声明正本。
- 仓库可见性：PUBLIC（仅表示源码可读，不表示任何使用授权）。
- 课程 Wiki 站点首页（`index.html`）页脚以同一声明标注；讲稿页为课堂投屏件，不置页脚，版权只记于此处与 `LICENSE`。
- 课堂内讲授、投影、复印属许可范围内之使用；二次开发、改编、商用、公开发布须书面授权。

---

## 版本

v1.2.0
