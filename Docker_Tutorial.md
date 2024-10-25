# Docker 教學

## 簡介
Docker 是一個開源的平台，旨在自動化應用程序的部署、擴展和管理。它使用容器技術來實現這一目標。容器是一種輕量級、可移植的虛擬化技術，可以在任何支持 Docker 的環境中運行。

## Docker 安裝
在開始使用 Docker 之前，您需要在您的系統上安裝 Docker。以下是安裝 Docker 的步驟：

### 在 Ubuntu 上安裝 Docker
1. 更新您的包索引：
   ```shell
   sudo apt-get update
   ```
2. 安裝 Docker 的依賴包：
   ```shell
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
   ```
3. 添加 Docker 的官方 GPG 密鑰：
   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```
4. 添加 Docker 的 APT 存儲庫：
   ```shell
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```
5. 更新包索引並安裝 Docker：
   ```shell
   sudo apt-get update
   sudo apt-get install docker-ce
   ```
6. 啟動 Docker 並設置為開機自啟：
   ```shell
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

### 在 Windows 上安裝 Docker
1. 下載 Docker Desktop 安裝程序：https://www.docker.com/products/docker-desktop
2. 運行安裝程序並按照提示完成安裝。
3. 安裝完成後，啟動 Docker Desktop 並登錄您的 Docker 帳戶。

## 創建 Dockerfile
Dockerfile 是一個文本文件，包含了構建 Docker 映像所需的所有指令。以下是一個簡單的 Dockerfile 範例：

```Dockerfile
# 使用官方的 Python 基礎映像
FROM python:3.8-slim

# 設置工作目錄
WORKDIR /app

# 複製當前目錄的內容到容器中的 /app 目錄
COPY . /app

# 安裝所需的 Python 包
RUN pip install --no-cache-dir -r requirements.txt

# 指定容器啟動時運行的命令
CMD ["python", "app.py"]
```

## 構建和運行 Docker 容器
一旦您創建了 Dockerfile，您可以使用以下命令構建 Docker 映像並運行 Docker 容器：

### 構建 Docker 映像
```shell
docker build -t myapp .
```
此命令會根據 Dockerfile 構建一個名為 `myapp` 的 Docker 映像。

### 運行 Docker 容器
```shell
docker run -d -p 5000:5000 myapp
```
此命令會啟動一個 Docker 容器，並將本地機器的 5000 端口映射到容器的 5000 端口。

## 基本 Docker 指令
以下是一些常用的 Docker 指令及其說明：

### 列出所有運行中的容器
```shell
docker ps
```

### 列出所有容器（包括停止的容器）
```shell
docker ps -a
```

### 停止運行中的容器
```shell
docker stop <container_id>
```

### 刪除停止的容器
```shell
docker rm <container_id>
```

### 刪除 Docker 映像
```shell
docker rmi <image_id>
```

## 結論
本教學涵蓋了 Docker 的基本使用，包括 Docker 的安裝、創建 Dockerfile、構建和運行 Docker 容器以及基本的 Docker 指令。通過遵循這些步驟，您可以有效地使用 Docker 來部署和管理應用程序。
