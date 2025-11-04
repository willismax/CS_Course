# 💻 CS Course - 計算機科學教學平台

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success)](https://willismax.github.io/CS_Course/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)

> 結合理論與實作的計算機科學教學平台，提供互動式視覺化工具和深入淺出的教學內容

## 🌟 專案特色

- ✨ **互動式視覺化工具** - 6+ 個互動式教學工具，讓抽象概念具體化
- 📝 **多語言程式碼範例** - 提供 Python、C、Java 三種語言的完整實作
- 🎮 **即時回饋** - 所有工具都支援即時操作與結果展示
- 📚 **系統化內容** - 從基礎到進階，完整的學習路徑規劃
- 🌐 **中文教學** - 繁體中文介面，降低學習門檻

## 🚀 線上體驗

📖 **訪問網站**: [https://willismax.github.io/CS_Course/](https://willismax.github.io/CS_Course/)

### 🎯 熱門工具

| 工具 | 類別 | 特色 |
|------|------|------|
| [排序演算法視覺化](https://willismax.github.io/CS_Course/Sorting_algorithm.html) | 演算法 | 6種演算法、動畫展示、多語言範例 |
| [CPU 排程演算法](https://willismax.github.io/CS_Course/cpu_Scheduling.html) | 作業系統 | FCFS、SJF、RR、Priority 互動學習 |
| [程序控制表 PCB](https://willismax.github.io/CS_Course/cpu_pcb.html) | 作業系統 | 動態展示程序狀態轉換 |
| [OSI 網路模型](https://willismax.github.io/CS_Course/osi.html) | 網路概論 | OSI 七層與 TCP/IP 四層模型互動學習 |
| [Python Set 教學](https://willismax.github.io/CS_Course/python-set.html) | 程式語言 | 集合操作互動練習 |
| [XSS 安全演示](https://willismax.github.io/CS_Course/xss-security-demo.html) | 資訊安全 | 跨站腳本攻擊實例 |

👉 [查看所有互動工具](https://willismax.github.io/CS_Course/interactive-tools/)

## 📚 學習內容分類

### 🖥️ 作業系統
- CPU 排程演算法互動教學
- 程序控制表 (PCB) 互動展示

### 🌐 網路概論
- OSI 與 TCP/IP 網路模型互動學習平台

### 🔐 資訊安全
- Information Security Course
- XSS Security Demo

### 💻 程式語言與資料庫
- Python Set Interactive Tutorial
- SQL Tutorial
- OpenAI Demo

### 📊 資料結構與演算法
- Binary Tree Explanation
- **排序演算法視覺化工具** ⭐ 新增

### 🐳 容器化技術
- Docker Tutorial

### 🔧 版本控制
- Git Tutorial
- Git Practice
- Pull Request Tutorial

### 🐧 Linux 系統
- Linux 基本指令教學
- Linux ls 指令詳解

## 🎯 推薦學習路徑

### 初學者路徑
1. **基礎程式概念** → Python Set Interactive Tutorial
2. **資料結構基礎** → Binary Tree Explanation
3. **演算法入門** → 排序演算法視覺化工具 ⭐
4. **作業系統概念** → CPU 排程演算法互動教學

### 進階學習路徑
1. **容器化技術** → Docker Tutorial
2. **版本控制** → Git Tutorial → Pull Request Tutorial
3. **資訊安全** → XSS Security Demo
4. **資料庫操作** → SQL Tutorial

## 💻 本地開發

## 安裝說明
1. 克隆此專案到本地端
   ```shell
   git clone https://github.com/willismax/CS_Course.git
   ```
2. 安裝所需的Python套件
   ```shell
   pip install -r requirements.txt
   ```

### 本地運行 GitHub Pages

如果你想在本地預覽 GitHub Pages 網站：

```shell
# 安裝 Jekyll (需要 Ruby)
gem install bundler jekyll

# 安裝相依套件
bundle install

# 本地運行
bundle exec jekyll serve

# 訪問 http://localhost:4000
```

## 🎮 使用指南
### Linux基本指令教學
詳見[Linus基本指令.md](Linus基本指令.md)

### OpenAI API使用範例
詳見[OpenAI_Demo.ipynb](OpenAI_Demo.ipynb)

### Docker 教學
詳見[Docker_Tutorial.md](Docker_Tutorial.md)

### 二子樹說明
詳見[Binary_Tree_Explanation.md](Binary_Tree_Explanation.md)

### 資訊安全課程
詳見[Information_Security_Course.md](Information_Security_Course.md)

### Python Set 互動教學
詳見[python-set.html](python-set.html)

### XSS 安全演示
詳見[xss-security-demo.tsx](xss-security-demo.tsx)

## 相關文件
- [Linux基本指令教學](Linus基本指令.md)
- [OpenAI API使用範例](OpenAI_Demo.ipynb)
- [Docker 教學](Docker_Tutorial.md)
- [二子樹說明](Binary_Tree_Explanation.md)
- [資訊安全課程](Information_Security_Course.md)
- [SQL 教學](SQL_Tutorial.md)
- [Python Set 互動教學](python-set.html)
- [XSS 安全演示](xss-security-demo.tsx)

## 在VS Code中的使用
### 在 VS Code 中使用
1. 打開 VS Code 並安裝 Python 擴展
2. 打開專案資料夾
3. 在終端機中執行 Python 腳本或 Jupyter Notebook
4. 使用 Live Server 預覽 HTML 檔案

### 在 GitHub Codespace 中使用
### 在 GitHub Codespace 中使用
1. 在 GitHub 中打開此專案
2. 點擊 "Code" 按鈕並選擇 "Open with Codespaces"
3. 等待 Codespace 環境配置完成後，即可開始使用

## 🤝 參與貢獻

我們歡迎各種形式的貢獻！

### 貢獻方式
- 🐛 回報 Bug
- 💡 提出新功能建議
- 📝 改善文件
- 🎨 優化使用者介面
- 🔧 提交程式碼

### 如何貢獻

1. **Fork 專案**
   ```shell
   # Fork 這個 repository
   ```

2. **建立功能分支**
   ```shell
   git checkout -b feature/AmazingFeature
   ```

3. **提交變更**
   ```shell
   git commit -m 'Add some AmazingFeature'
   ```

4. **推送到分支**
   ```shell
   git push origin feature/AmazingFeature
   ```

5. **開啟 Pull Request**

詳細說明請參考 [Pull Request Tutorial](Pull_Request_Tutorial.md)

## 📖 相關教學文件

- [Linux 基本指令教學](Linus基本指令.md)
- [Git 教學](Git_Tutorial.md) - Git 指令及使用方法
- [Pull Request 教學](Pull_Request_Tutorial.md) - 如何提交 PR
- [Docker 教學](Docker_Tutorial.md) - 容器化技術入門
- [Binary Tree 說明](Binary_Tree_Explanation.md) - 二元樹資料結構
- [資訊安全課程](Information_Security_Course.md) - 安全概念與實踐
- [SQL 教學](SQL_Tutorial.md) - 資料庫操作指南

## 📊 專案統計

- 📚 **13+** 個教學主題
- 🎮 **7+** 個互動式工具
- 💻 **3** 種程式語言範例
- 🌟 持續更新中...

## 📜 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 👥 作者

**willismax**
- GitHub: [@willismax](https://github.com/willismax)
- Website: [https://willismax.github.io/CS_Course/](https://willismax.github.io/CS_Course/)

## 🙏 致謝

感謝所有為這個專案做出貢獻的人！

---

## 📮 聯絡方式

如有任何問題或建議，歡迎：
- 📧 開啟 [Issue](https://github.com/willismax/CS_Course/issues)
- 💬 提交 [Pull Request](https://github.com/willismax/CS_Course/pulls)

---

<div align="center">
  
### ⭐ 如果覺得這個專案有幫助，請給我們一個星星！⭐

**Made with ❤️ by [willismax](https://github.com/willismax)**

[🏠 返回首頁](https://willismax.github.io/CS_Course/) | [🎮 互動工具](https://willismax.github.io/CS_Course/interactive-tools/) | [📂 GitHub](https://github.com/willismax/CS_Course)

</div>


## Git指令及Pull Request教學

### 簡介
Git是一個分散式版本控制系統，GitHub是一個基於Git的代碼託管平台。使用Git和GitHub可以方便地管理和協作開發代碼。

### 常用Git指令
以下是一些常用的Git指令及其說明：

1. 初始化一個新的Git倉庫
   ```shell
   git init
   ```

2. 克隆一個現有的Git倉庫
   ```shell
   git clone <repository_url>
   ```

3. 添加文件到暫存區
   ```shell
   git add <file_name>
   ```

4. 提交更改
   ```shell
   git commit -m "commit message"
   ```

5. 推送更改到遠程倉庫
   ```shell
   git push origin <branch_name>
   ```

6. 拉取遠程倉庫的更改
   ```shell
   git pull origin <branch_name>
   ```

7. 查看當前倉庫的狀態
   ```shell
   git status
   ```

8. 查看提交歷史
   ```shell
   git log
   ```

### 創建Pull Request
Pull Request（PR）是一種在GitHub上提交代碼更改的方式。以下是創建PR的步驟：

1. 在GitHub上fork一個倉庫
2. 克隆fork後的倉庫到本地
   ```shell
   git clone <forked_repository_url>
   ```
3. 創建一個新的分支
   ```shell
   git checkout -b <new_branch_name>
   ```
4. 在新分支上進行代碼更改並提交
   ```shell
   git add <file_name>
   git commit -m "commit message"
   ```
5. 推送新分支到GitHub
   ```shell
   git push origin <new_branch_name>
   ```
6. 在GitHub上打開原始倉庫，點擊 "Compare & pull request" 按鈕
7. 填寫PR的標題和描述，然後點擊 "Create pull request" 按鈕

## GitHub Pages 介面

此倉庫現在包含一個 GitHub Pages 介面，用於將課程材料作為一系列文章卡片進行瀏覽。您可以訪問 GitHub Pages 網站 [這裡](https://willismax.github.io/CS_Course/)。

<a href="https://github.com/willismax/CS_Course" class="btn btn-primary">View on GitHub</a>
