# Git 團隊協作開發指南

## 簡介
在團隊開發中，特別是遊戲開發項目（如使用 RPG Maker 等工具），有效的版本控制和協作流程至關重要。本指南將以遊戲開發為例，介紹如何使用 Git 進行團隊協作開發。

## 為什麼遊戲開發需要版本控制？

在遊戲開發過程中，團隊成員可能包括：
- 🎨 **美術設計師**：負責角色、場景、UI 設計
- 💻 **程式設計師**：負責遊戲邏輯、系統開發
- 📝 **劇本編劇**：負責故事、對話、任務設計
- 🎵 **音效設計師**：負責背景音樂、音效製作
- 🎮 **關卡設計師**：負責地圖、關卡佈局

多人同時修改遊戲內容時，沒有版本控制會導致：
- ❌ 檔案覆蓋和工作遺失
- ❌ 無法追蹤誰做了什麼修改
- ❌ 難以回溯到之前的版本
- ❌ 團隊成員之間的協調困難

## 團隊協作工作流程

### 1. Git Flow 分支策略

在遊戲開發中，建議採用以下分支結構：

```
main (master)          # 穩定的發布版本
  │
  ├─ develop           # 開發主分支
  │   │
  │   ├─ feature/character-system    # 角色系統功能
  │   ├─ feature/battle-system       # 戰鬥系統功能
  │   ├─ feature/map-design          # 地圖設計
  │   └─ feature/story-chapter1      # 第一章劇情
  │
  ├─ hotfix/critical-bug            # 緊急修復
  └─ release/v1.0                   # 發布準備分支
```

#### 分支說明

**主要分支**：
- `main` (或 `master`)：只包含穩定的、可發布的版本
- `develop`：開發主分支，包含最新的開發進度

**支援分支**：
- `feature/*`：新功能開發分支
- `hotfix/*`：緊急錯誤修復分支
- `release/*`：版本發布準備分支

### 2. 實際操作流程

#### 步驟 1：設置專案倉庫

**專案負責人**創建主倉庫：
```shell
# 創建本地倉庫
mkdir rpg-maker-project
cd rpg-maker-project
git init

# 創建基本結構
mkdir -p Assets/{Characters,Maps,Audio,Scripts}
mkdir -p Documentation

# 創建 .gitignore 文件（稍後詳述）
touch .gitignore

# 初始提交
git add .
git commit -m "Initial project setup"

# 推送到遠程倉庫（GitHub/GitLab）
git remote add origin <repository_url>
git push -u origin main

# 創建 develop 分支
git checkout -b develop
git push -u origin develop
```

#### 步驟 2：團隊成員加入專案

**團隊成員**克隆倉庫：
```shell
# 克隆倉庫
git clone <repository_url>
cd rpg-maker-project

# 查看所有分支
git branch -a

# 切換到開發分支
git checkout develop
```

#### 步驟 3：開發新功能

**例如：美術設計師要添加新角色**

```shell
# 從 develop 創建功能分支
git checkout develop
git pull origin develop
git checkout -b feature/add-hero-character

# 添加角色圖檔和設定
# 在 Assets/Characters/ 添加圖片和設定檔

# 查看更改
git status

# 添加更改到暫存區
git add Assets/Characters/hero_sprite.png
git add Assets/Characters/hero_config.json

# 提交更改
git commit -m "Add hero character sprite and configuration"

# 推送到遠程倉庫
git push origin feature/add-hero-character
```

#### 步驟 4：創建 Pull Request

1. 在 GitHub/GitLab 上打開專案倉庫
2. 點擊 "New Pull Request" 或 "Create Merge Request"
3. 選擇：`feature/add-hero-character` → `develop`
4. 填寫 PR 描述：
   ```
   ## 添加主角角色

   ### 變更內容
   - 添加主角精靈圖（hero_sprite.png）
   - 添加角色配置文件（hero_config.json）

   ### 測試
   - [x] 圖片格式正確
   - [x] 配置文件格式驗證通過
   - [x] 在 RPG Maker 中可正常載入

   ### 相關 Issue
   Closes #15
   ```
5. 請求團隊成員審查

#### 步驟 5：程式碼審查

**審查者**檢查更改：
```shell
# 拉取 PR 分支
git fetch origin
git checkout feature/add-hero-character

# 在 RPG Maker 中測試
# 檢查圖片品質、配置正確性

# 在 GitHub/GitLab 上留下評論
# - 如果沒問題：批准 PR
# - 如果需要修改：請求更改
```

#### 步驟 6：合併到開發分支

**專案負責人**合併 PR：
```shell
# 確保在 develop 分支
git checkout develop
git pull origin develop

# 合併功能分支（使用 --no-ff 保留分支歷史）
git merge --no-ff feature/add-hero-character

# 推送到遠程
git push origin develop

# 刪除已合併的功能分支（可選）
git branch -d feature/add-hero-character
git push origin --delete feature/add-hero-character
```

### 3. 處理衝突

當多人修改同一個文件時，可能會產生衝突。

**例如：兩個設計師都修改了同一個地圖檔案**

```shell
# 嘗試合併時出現衝突
git merge feature/map-update-alice
# 衝突訊息：CONFLICT (content): Merge conflict in Assets/Maps/town.json

# 查看衝突文件
git status

# 打開衝突文件，會看到類似內容：
# <<<<<<< HEAD
# "npc_count": 5
# =======
# "npc_count": 7
# >>>>>>> feature/map-update-alice

# 手動解決衝突（保留正確的版本或合併兩者）
# 編輯文件後：
git add Assets/Maps/town.json
git commit -m "Resolve merge conflict in town map"
```

**最佳實踐**：
- 🔔 經常從 `develop` 拉取最新更改
- 💬 在修改共享文件前與團隊溝通
- 🔄 保持功能分支短小，盡快合併
- 📞 遇到複雜衝突時，與相關開發者討論

## RPG Maker 專案的特殊考慮

### 1. .gitignore 設置

RPG Maker 項目會產生許多臨時文件和大型二進制文件，需要正確設置 `.gitignore`：

```gitignore
# RPG Maker 臨時文件
*.rpgproject
*.rxproj
*.rvproj2
*.autosave

# 編輯器臨時文件
*.tmp
*.bak
*~

# 作業系統文件
.DS_Store
Thumbs.db
desktop.ini

# 大型資源文件（考慮使用 Git LFS）
# *.ogg
# *.mp4
# *.webm

# 測試存檔
save*.rvdata2
save*.rpgsave

# 部署文件
/www/
/nwjs/
*.zip
*.7z
```

### 2. 處理大型二進制文件

遊戲開發涉及大量圖片、音頻、視頻文件。建議使用 **Git LFS（Large File Storage）**：

```shell
# 安裝 Git LFS
git lfs install

# 追蹤大型文件類型
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.ogg"
git lfs track "*.mp3"
git lfs track "*.mp4"
git lfs track "*.webm"

# 確認 .gitattributes 文件已創建
cat .gitattributes

# 添加和提交
git add .gitattributes
git commit -m "Configure Git LFS for large assets"
```

### 3. 文件命名規範

建立清晰的命名規範：

```
Assets/
├── Characters/
│   ├── hero_idle.png
│   ├── hero_walk.png
│   ├── npc_merchant_idle.png
│   └── enemy_goblin_attack.png
├── Maps/
│   ├── map_town_central.json
│   ├── map_dungeon_floor1.json
│   └── map_castle_throne.json
├── Audio/
│   ├── bgm_battle_boss.ogg
│   ├── bgm_town_peaceful.ogg
│   └── sfx_sword_slash.ogg
└── Scripts/
    ├── battle_system.js
    ├── inventory_system.js
    └── dialog_system.js
```

**命名原則**：
- 使用小寫字母和底線
- 包含類型前綴（hero_, npc_, enemy_, map_, bgm_, sfx_）
- 描述性名稱，便於搜尋

### 4. 提交訊息規範

使用清晰、一致的提交訊息：

```shell
# 格式：<類型>: <簡短描述>
# 
# <詳細說明>（可選）
# 
# <相關 Issue>（可選）

# 好的範例：
git commit -m "feat: add boss battle system

- Implement phase-based boss mechanics
- Add special attack patterns
- Integrate with existing battle UI

Closes #42"

git commit -m "fix: resolve dialog text overflow issue

Text was wrapping incorrectly on smaller screens.
Added auto-scaling for different resolutions.

Fixes #38"

git commit -m "asset: add chapter 2 background music"

git commit -m "docs: update character design guidelines"
```

**提交類型**：
- `feat`: 新功能
- `fix`: 錯誤修復
- `asset`: 資源文件添加/更新
- `refactor`: 代碼重構
- `docs`: 文檔更新
- `test`: 測試相關
- `chore`: 構建、配置相關

## 協作最佳實踐

### 1. 日常工作流程

**每天開始工作前**：
```shell
# 拉取最新更改
git checkout develop
git pull origin develop

# 更新你的功能分支
git checkout feature/your-feature
git merge develop

# 或使用 rebase 保持歷史整潔
git rebase develop
```

**每天結束工作時**：
```shell
# 提交當天的工作
git add .
git commit -m "feat: implement character movement system (WIP)"
git push origin feature/your-feature
```

### 2. 團隊溝通

- 📅 **每日站會**：同步進度，識別阻礙
- 📝 **使用 Issue 追蹤**：記錄任務、Bug、改進建議
- 💬 **PR 中討論技術細節**：保留決策歷史
- 📊 **使用專案看板**：視覺化工作流程（GitHub Projects/Trello）

### 3. 程式碼審查指南

**審查者應檢查**：
- ✅ 程式碼品質和可讀性
- ✅ 是否符合專案規範
- ✅ 是否有適當的註釋
- ✅ 資源文件是否正確命名
- ✅ 是否有遺漏的文件
- ✅ 是否測試過功能

**審查者態度**：
- 🤝 友善、建設性的反饋
- 💡 提供具體的改進建議
- 👍 認可好的實作
- ❓ 提問而非批評

### 4. 發布流程

**準備發布新版本**：

```shell
# 從 develop 創建 release 分支
git checkout develop
git pull origin develop
git checkout -b release/v1.0

# 更新版本號、變更日誌
# 修復最後的小 bug
git commit -m "chore: prepare for v1.0 release"

# 合併到 main 和 develop
git checkout main
git merge --no-ff release/v1.0
git tag -a v1.0 -m "Version 1.0 - Initial Release"
git push origin main --tags

git checkout develop
git merge --no-ff release/v1.0
git push origin develop

# 刪除 release 分支
git branch -d release/v1.0
```

**建立變更日誌**（CHANGELOG.md）：
```markdown
# 變更日誌

## [1.0.0] - 2024-12-24

### 新增
- 完整的戰鬥系統
- 五個主要角色可選
- 10 個關卡地圖
- 背景音樂和音效

### 修復
- 修復存檔載入時的崩潰問題
- 解決對話框文字溢出
- 修正敵人 AI 行為異常

### 改進
- 優化遊戲載入速度
- 提升戰鬥動畫流暢度
```

## 常見問題與解決方案

### 問題 1：忘記創建分支，直接在 develop 上開發

```shell
# 保存當前工作
git stash

# 創建並切換到新分支
git checkout -b feature/your-feature

# 恢復工作
git stash pop
```

### 問題 2：提交到錯誤的分支

```shell
# 如果還沒 push，重置並切換分支
git reset HEAD~1
git checkout correct-branch
git add .
git commit -m "your commit message"
```

### 問題 3：需要撤銷已推送的提交

```shell
# 創建反向提交（推薦，保留歷史）
git revert <commit_hash>
git push origin branch-name

# 或者（僅限個人分支，會改寫歷史）
git reset --hard <commit_hash>
git push --force origin branch-name
```

### 問題 4：不小心刪除了重要文件

```shell
# 如果還沒提交，恢復文件
git checkout -- <filename>

# 如果已經提交，找回之前版本
git log -- <filename>
git checkout <commit_hash> -- <filename>
```

## 工具推薦

### Git 圖形界面工具
- **SourceTree**：功能強大的免費 Git GUI
- **GitKraken**：視覺化分支管理
- **GitHub Desktop**：簡單易用，適合初學者
- **VS Code Git 擴充**：在編輯器內操作 Git

### 協作工具
- **GitHub/GitLab**：代碼託管和協作平台
- **Slack/Discord**：團隊即時通訊
- **Trello/Notion**：專案管理
- **Figma**：設計協作（美術資源）

### RPG Maker 相關
- **RPG Maker MV/MZ**：遊戲開發引擎
- **Tiled**：地圖編輯器
- **Aseprite**：像素圖編輯
- **Audacity**：音頻編輯

## 總結

成功的團隊協作需要：

1. 📋 **清晰的工作流程**：使用 Git Flow 或類似策略
2. 🎯 **明確的責任分工**：每個人知道自己負責什麼
3. 💬 **良好的溝通**：及時同步進度和問題
4. 📝 **規範的提交訊息**：便於追蹤和回溯
5. 🔍 **嚴謹的程式碼審查**：確保品質
6. 🔄 **頻繁的整合**：減少合併衝突
7. 📚 **完善的文檔**：幫助新成員快速上手

遵循這些原則，你的團隊將能高效地協作開發出優秀的遊戲作品！

## 延伸學習

- [Git Tutorial](Git_Tutorial.md) - Git 基礎教學
- [Pull Request Tutorial](Pull_Request_Tutorial.md) - PR 詳細流程
- [Git 官方文檔](https://git-scm.com/doc)
- [GitHub Flow 指南](https://guides.github.com/introduction/flow/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

---

<div style="text-align: center; padding: 20px; background: #f7fafc; border-radius: 10px; margin-top: 30px;">
  <p style="color: #4a5568;">
    🎮 祝你的遊戲開發專案順利！💻 Happy Coding!
  </p>
</div>
