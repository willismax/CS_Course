# Pull Request 教學

## 簡介
Pull Request（PR）是一種在GitHub上提交代碼更改的方式。通過PR，您可以請求將您的更改合併到主代碼庫中。這是一種協作開發的常見方式。

## 創建 Pull Request 的步驟

### 1. Fork 一個倉庫
首先，您需要在GitHub上fork一個倉庫。這會在您的GitHub帳戶下創建一個該倉庫的副本。

### 2. 克隆 Fork 後的倉庫
接下來，將fork後的倉庫克隆到您的本地機器上：
```shell
git clone <forked_repository_url>
```

### 3. 創建一個新分支
在本地倉庫中，創建一個新分支來進行您的更改：
```shell
git checkout -b <new_branch_name>
```

### 4. 進行代碼更改並提交
在新分支上進行您的代碼更改，然後將更改添加到暫存區並提交：
```shell
git add <file_name>
git commit -m "commit message"
```

### 5. 推送更改到您的 Fork 倉庫
將您的更改推送到GitHub上的fork倉庫：
```shell
git push origin <new_branch_name>
```

### 6. 創建 Pull Request
在GitHub上打開您的fork倉庫，點擊 "Compare & pull request" 按鈕。填寫PR的標題和描述，然後點擊 "Create pull request" 按鈕。

## 審查 Pull Request 的步驟

### 1. 轉到 GitHub 上的 PR
在GitHub上打開您要審查的PR。

### 2. 審查更改
查看PR中的代碼更改，並在必要時留下評論。

### 3. 批准或請求更改
如果您認為PR中的更改是正確的，可以批准PR；如果需要進一步修改，可以請求更改。

### 4. 合併 PR
一旦PR獲得批准，您可以將其合併到主代碼庫中。

## 撤回提交
如果您需要因為提交錯誤而撤回提交，可以使用以下命令：
```shell
git revert <commit_hash>
```
此命令會創建一個新提交，撤銷指定提交所做的更改。

## 使用 reset 撤回提交
如果您需要撤回提交並且不保留提交記錄，可以使用以下命令：
```shell
git reset --hard <commit_hash>
```
此命令會將當前分支重置到指定的提交，並且不保留之後的提交記錄。

## reset 和 revert 的區別
- `git revert` 會創建一個新提交，撤銷指定提交所做的更改，保留提交記錄。
- `git reset` 會將當前分支重置到指定的提交，不保留之後的提交記錄。

## 結論
本教學涵蓋了創建和審查Pull Request的基本步驟。通過遵循這些步驟，您可以有效地使用GitHub來協作開發代碼。
