# Linux基本指令

[![hackmd-github-sync-badge](https://hackmd.io/yXelGmwnQnyFrkq9MCV1jw/badge)](https://hackmd.io/yXelGmwnQnyFrkq9MCV1jw)
<!-- linux基本指令教學 ，將在Github codespace進行示範，使學習者能夠透過codespace的終端機以及介面，即早席熟悉linux指令-->

## 目的
本篇教學將介紹Linux的基本指令，包括`pwd`、`ls`、`cd`、`mkdir`、`touch`、`cp`、`mv`、`rm`、`cat`、`more`、`less`、`head`、`tail`、`grep`、`find`、`tar`、`gzip`、`chmod`、`chown`、`ps`、`top`、`kill`、`ifconfig`、`ping`、`wget`、`ssh`、`clear`、`history`等指令，以及vim和nano編輯器。透過本篇教學，我們將學習如何使用這些指令來操作Linux系統。

## 環境
- 作業系統：Linux
- 開發工具：終端機
- 程式語言：Shell
- 開發框架：無


## 1. 什麼是Linux
Linux是一個自由和開放源代碼的類Unix操作系統，是一個基於POSIX和UNIX的多用戶、多任務、支持多線程和多CPU的操作系統。Linux的核心是由林納斯·托瓦茲（Linus Torvalds）在1991年10月5日首次發布。Linux也是一個典型的自由軟體和開放源代碼軟體的範例。Linux也是一個典型的自由軟體和開放源代碼軟體的範例。
## 2. Linux基本指令
### 2.1. pwd
`pwd`指令用來顯示目前所在的目錄路徑。
```shell
$ pwd
/home/user
```
### 2.2. ls
`ls`指令用來顯示目錄下的檔案與目錄。
```shell
$ ls
Desktop  Documents  Downloads  Music  Pictures  Public  Templates  Videos
```
### 2.3. cd
`cd`指令用來切換目錄。
```shell
$ cd Documents
```
### 2.4. mkdir
`mkdir`指令用來建立目錄。
```shell
$ mkdir test
```
### 2.5. touch
`touch`指令用來建立檔案。
```shell
$ touch test.txt
```
### 2.6. cp
`cp`指令用來複製檔案或目錄。
```shell
$ cp test.txt test2.txt
```
### 2.7. mv
`mv`指令用來移動檔案或目錄。
```shell
$ mv test2.txt Documents
```
### 2.8. rm
`rm`指令用來刪除檔案或目錄。
```shell
$ rm test2.txt
```
### 2.9. cat
`cat`指令用來顯示檔案內容。
```shell
$ cat test.txt
```
### 2.10. more
`more`指令用來分頁顯示檔案內容。
```shell
$ more test.txt
```
### 2.11. less
`less`指令用來分頁顯示檔案內容。
```shell
$ less test.txt
```
### 2.12. head
`head`指令用來顯示檔案的前幾行。
```shell
$ head test.txt
```
### 2.13. tail
`tail`指令用來顯示檔案的後幾行。
```shell
$ tail test.txt
```
### 2.14. grep
`grep`指令用來搜尋檔案內容。
```shell
$ grep "hello" test.txt
```
### 2.15. find
`find`指令用來搜尋檔案。
```shell
$ find / -name test.txt
```
### 2.16. tar
`tar`指令用來壓縮與解壓縮檔案。
```shell
$ tar -cvf test.tar test.txt
$ tar -xvf test.tar
```
### 2.17. gzip
`gzip`指令用來壓縮與解壓縮檔案。
```shell
$ gzip test.txt
$ gzip -d test.txt.gz
```
### 2.18. chmod
`chmod`指令用來更改檔案權限。
```shell
$ chmod 777 test.txt
```
### 2.19. chown
`chown`指令用來更改檔案擁有者。
各種權限的意義如下：
- r：讀取權限
- w：寫入權限
- x：執行權限
- u：擁有者
- g：群組
- o：其他
- a：全部
- +：增加權限
- -：移除權限

```shell
$ chown user test.txt
```
### 2.20. ps
`ps`指令用來顯示系統進程。
```shell
$ ps
```
### 2.21. top
`top`指令用來顯示系統資源使用情況。
```shell
$ top
```
### 2.22. kill
`kill`指令用來終止執行。
```shell
$ kill 1234
```
### 2.23. ifconfig
`ifconfig`指令用來顯示網路設定。
```shell
$ ifconfig
```
### 2.24. ping
`ping`指令用來測試網路連通性。
```shell
$ ping google.com
```
### 2.25. wget
`wget`指令用來下載檔案。
```shell
$ wget https://www.google.com
```
### 2.26. ssh
`ssh`指令用來遠端登入。
```shell
$ ssh user@
```
### 2.27. clear
`clear`指令用來清除終端機畫面。
```shell
$ clear
```
### 2.28. history
`history`指令用來顯示指令歷史。
```shell
$ history
```

## 編輯器
### vim
`vim`是一個強大的文本編輯器，可以用來編輯各種文本檔案。
```shell
$ vim test.txt
```
- 按`i`進入編輯模式
- 編輯完成後按`Esc`退出編輯模式
- 輸入`:wq`保存並退出
- 輸入`:q!`不保存並退出
- 輸入`:w`保存
- 輸入`:q`退出
- 輸入`:set nu`顯示行號
- 輸入`:set nonu`隱藏行號
- 按`Shift + G`跳轉到最後一行
- 按`gg`跳轉到第一行
- 按`/`進入搜尋模式
- 按`n`跳轉到下一個搜尋結果
- 按`N`跳轉到上一個搜尋結果
- 按`dd`刪除一行
- 按`yy`複製一行
- 按`p`粘貼
- 按`u`撤銷
- 按`Ctrl + r`重做
- 按`Shift + v`進入可視模式

### nano
`nano`是一個簡單的文本編輯器，可以用來編輯各種文本檔案。
```shell
$ nano test.txt
```
- 按`Ctrl + O`保存
- 按`Ctrl + X`退出
- 按`Ctrl + G`顯示幫助

## 3. 結論
透過本篇教學，我們學習了Linux的基本指令，包括`pwd`、`ls`、`cd`、`mkdir`、`touch`、`cp`、`mv`、`rm`、`cat`、`more`、`less`、`head`、`tail`、`grep`、`find`、`tar`、`gzip`、`chmod`、`chown`、`ps`、`top`、`kill`、`ifconfig`、`ping`、`wget`、`ssh`、`clear`、`history`等指令，以及vim和nano編輯器。這些指令是Linux操作系統中最基本的指令，對於初學者來說非常重要。希望本篇教學能夠幫助大家更好地理解和使用Linux操作系統。