# Git 指令教學

## 簡介
Git 是一個分散式版本控制系統，GitHub 是一個基於 Git 的代碼託管平台。本教學將指導您如何使用基本的 Git 指令。

## 初始化倉庫
要開始使用 Git，您需要初始化一個倉庫。可以使用以下命令完成：
```shell
git init
```
此命令會在當前目錄中創建一個新的 Git 倉庫。

## 克隆倉庫
如果您想要在現有項目上工作，可以使用以下命令克隆倉庫：
```shell
git clone <repository_url>
```
此命令會在您的本地機器上創建一個倉庫的副本。

## 添加更改
要將更改添加到暫存區，請使用以下命令：
```shell
git add <file_name>
```
您也可以使用以下命令添加當前目錄中的所有更改：
```shell
git add .
```

## 提交更改
一旦您將更改添加到暫存區，您可以使用以下命令提交它們：
```shell
git commit -m "commit message"
```
此命令會將更改記錄在倉庫中，並附上描述更改的消息。

## 推送更改
要將您的更改推送到遠程倉庫，請使用以下命令：
```shell
git push origin <branch_name>
```
此命令會將您的本地更改上傳到遠程倉庫的指定分支。

## 創建和管理分支
分支用於獨立於主代碼庫開發功能或修復錯誤。要創建新分支，請使用以下命令：
```shell
git checkout -b <new_branch_name>
```
要切換到現有分支，請使用：
```shell
git checkout <branch_name>
```
要列出所有分支，請使用：
```shell
git branch
```
要刪除分支，請使用：
```shell
git branch -d <branch_name>
```

## 撤回提交
如果您需要因為提交錯誤而撤回提交，可以使用以下命令：
```shell
git revert <commit_hash>
```
此命令會創建一個新提交，撤銷指定提交所做的更改。

## 結論
本教學涵蓋了基本的 Git 指令。通過遵循這些步驟，您可以有效地使用 Git 來管理和協作開發代碼。
