# CS_Course

## 專案說明
這是一個有關於計算機科學的教學專案，包含了基本的Linux指令教學以及OpenAI API的使用範例。

## 安裝說明
1. 克隆此專案到本地端
   ```shell
   git clone https://github.com/willismax/CS_Course.git
   ```
2. 安裝所需的Python套件
   ```shell
   pip install -r requirements.txt
   ```

## 使用範例
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
1. 打開VS Code並安裝Python擴展
2. 打開專案資料夾
3. 在終端機中執行Python腳本或Jupyter Notebook

## 在GitHub Codespace中的使用
1. 在GitHub中打開此專案
2. 點擊 "Code" 按鈕並選擇 "Open with Codespaces"
3. 等待Codespace環境配置完成後，即可開始使用

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
