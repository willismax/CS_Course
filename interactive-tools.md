---
layout: page
title: 互動式學習工具
permalink: /interactive-tools/
---

# 🎮 互動式學習工具

歡迎來到互動式學習工具區！這裡收集了所有的視覺化教學工具，讓你透過實際操作來理解抽象的計算機科學概念。

---

## 📊 演算法與資料結構

### 🔄 排序演算法視覺化工具
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>✨ 6 種排序演算法：選擇排序、插入排序、泡沫排序、快速排序、二元搜尋、動態規劃</li>
    <li>🎬 即時動畫展示每個步驟</li>
    <li>💻 提供 Python、C、Java 三種語言的完整程式碼</li>
    <li>⚡ 可調整陣列大小和動畫速度</li>
    <li>📈 顯示時間與空間複雜度分析</li>
  </ul>
  <a href="../Sorting_algorithm.html" style="display: inline-block; padding: 10px 20px; background: white; color: #667eea; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 理解不同排序演算法的運作原理
- 比較各種演算法的效率差異
- 學習動態規劃與遞迴的差異
- 掌握二元搜尋的應用時機

### 🧊 排序演算法 3D 實驗室
<div style="background: linear-gradient(135deg, #2c54d6 0%, #1fc0d6 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>泡沫、選擇、插入、希爾、合併、快速、堆積 7 種排序</li>
    <li>立體長條動畫：交換時走弧線、合併排序有暫存陣列後排</li>
    <li>Python、C、Java 程式碼同步亮起正在執行的那一行</li>
    <li>時間軸可前後拖曳、單步執行，停在第 0 步可拖曳長條改數值</li>
  </ul>
  <a href="../sorting-lab/" style="display: inline-block; padding: 10px 20px; background: white; color: #2c54d6; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 比較不同資料型態（隨機、幾乎排好、反向、大量重複）下的步驟數
- 理解穩定性與額外空間的差別
- 把每一步動畫對應回程式碼

### 🌳 二元樹 3D 實驗室
<div style="background: linear-gradient(135deg, #5a3dd0 0%, #2f7eea 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>前序、中序、後序、層序走訪動畫</li>
    <li>走訪者沿著樹的外圍繞一圈：經過左側、下方、右側分別是前、中、後序</li>
    <li>由「前序＋中序」或「後序＋中序」一步步反推二元樹</li>
    <li>挑戰模式：自己點出走訪順序或每一步的根</li>
  </ul>
  <a href="../tree-lab/" style="display: inline-block; padding: 10px 20px; background: white; color: #5a3dd0; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 分辨三種深度優先走訪與層序（佇列）的差別
- 理解中序就是把樹投影到地面
- 學會考試常見的「給兩個序列求原樹」題型

---

## 🌐 網路概論

### ✂️ IP 切割 3D 實驗室
<div style="background: linear-gradient(135deg, #e0772a 0%, #e7a400 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>32 個位元做成 3D 方塊，遮罩 AND 運算逐位元呈現</li>
    <li>位址空間像一條長方塊，切割時真的一刀一刀切開</li>
    <li>三種模式：位址解析、等分切割、VLSM 可變長度</li>
    <li>練習題自動出題、即時批改，並可播放解答動畫</li>
  </ul>
  <a href="../subnet-lab/" style="display: inline-block; padding: 10px 20px; background: white; color: #c0601a; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 計算網路位址、廣播位址與可用主機數
- 決定要借幾個位元、新遮罩與區塊大小
- 用 VLSM 依需求由大到小分配網段

---

## 🖥️ 作業系統

### ⏰ CPU 排程演算法互動教學
<div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>📅 支援 FCFS、SJF、RR、Priority 等排程演算法</li>
    <li>🎯 視覺化顯示程序執行時間軸</li>
    <li>📊 自動計算平均等待時間與周轉時間</li>
    <li>🔧 可自訂程序參數進行實驗</li>
  </ul>
  <a href="../cpu_Scheduling.html" style="display: inline-block; padding: 10px 20px; background: white; color: #38a169; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 了解作業系統如何分配 CPU 時間
- 比較不同排程演算法的優缺點
- 理解等待時間與周轉時間的計算
- 學習 Time Quantum 對 Round Robin 的影響

### 🔄 程序控制表 (PCB) 互動展示
<div style="background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>🎬 動態展示程序狀態轉換</li>
    <li>📋 完整呈現 PCB 結構內容</li>
    <li>🔍 深入理解程序生命週期</li>
    <li>💡 視覺化 CPU 與程序的互動</li>
  </ul>
  <a href="../cpu_pcb.html" style="display: inline-block; padding: 10px 20px; background: white; color: #3182ce; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 認識程序控制表的結構
- 理解程序狀態轉換機制
- 了解作業系統如何管理程序
- 掌握多工處理的基本概念

---

## 💻 程式語言

### 🐍 Python Set 互動教學
<div style="background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>🎯 互動式集合操作練習</li>
    <li>🔍 視覺化展示集合運算結果</li>
    <li>📝 提供實用的程式碼範例</li>
    <li>✅ 即時驗證學習成果</li>
  </ul>
  <a href="../python-set.html" style="display: inline-block; padding: 10px 20px; background: white; color: #dd6b20; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 掌握 Python 集合的基本操作
- 理解聯集、交集、差集的概念
- 學習集合在實際應用中的使用場景
- 了解集合與列表的差異

---

## 🔐 資訊安全

### 🛡️ XSS 安全演示
<div style="background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>⚠️ 實際展示跨站腳本攻擊</li>
    <li>🔒 學習如何防禦 XSS 攻擊</li>
    <li>💉 了解不同類型的 XSS 漏洞</li>
    <li>🛠️ 掌握安全編碼實踐</li>
  </ul>
  <a href="../xss-security-demo.html" style="display: inline-block; padding: 10px 20px; background: white; color: #c53030; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 認識 XSS 攻擊的原理與危害
- 了解如何識別潛在的安全漏洞
- 學習輸入驗證與輸出編碼
- 掌握現代防禦機制

---

## 🗺️ Linux 系統

### 📂 Linux ls 指令詳解
<div style="background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>📋 互動式學習 ls 指令參數</li>
    <li>🎯 實際範例展示指令效果</li>
    <li>💡 常用組合技巧分享</li>
    <li>🔍 深入了解檔案權限與屬性</li>
  </ul>
  <a href="../linux_ls.html" style="display: inline-block; padding: 10px 20px; background: white; color: #805ad5; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 熟悉 ls 指令的各種參數
- 理解 Linux 檔案系統結構
- 掌握檔案權限的讀取方式
- 學習高效的檔案管理技巧

---

## 📚 其他工具

### 🎮 Git 實作練習
<div style="background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
  <h4 style="color: white; margin-top: 0;">功能特色</h4>
  <ul style="color: white;">
    <li>🌳 視覺化 Git 分支操作</li>
    <li>📝 互動式學習 Git 指令</li>
    <li>🔄 實作 Pull Request 流程</li>
    <li>💾 理解版本控制概念</li>
  </ul>
  <a href="../git practice.html" style="display: inline-block; padding: 10px 20px; background: white; color: #e53e3e; text-decoration: none; border-radius: 5px; font-weight: 600; margin-top: 10px;">🚀 開始使用</a>
</div>

**學習重點：**
- 掌握 Git 基本操作流程
- 理解分支管理策略
- 學習團隊協作最佳實踐
- 了解衝突解決方法

---

## 💡 使用建議

### 🎯 學習策略
1. **從基礎開始**：如果你是初學者，建議從排序演算法開始
2. **動手實作**：不要只看，要實際操作每個工具
3. **比較學習**：同時使用多個工具，理解概念間的關聯
4. **反覆練習**：重複使用工具直到完全理解

### 📖 配合閱讀
每個互動工具都配有相應的理論教學文件，建議：
- 先閱讀理論文件
- 再使用互動工具實作
- 最後查看程式碼範例
- 嘗試自己實現

---

<div style="text-align: center; padding: 30px; background: #f7fafc; border-radius: 10px; margin-top: 40px;">
  <h3 style="color: #4a5568;">🚀 開始你的學習之旅</h3>
  <p style="color: #718096; margin: 20px 0;">
    選擇一個工具，立即開始互動式學習！
  </p>
  <a href="../" style="display: inline-block; padding: 12px 24px; background: #4299e1; color: white; text-decoration: none; border-radius: 5px; font-weight: 600; margin: 10px;">← 返回首頁</a>
  <a href="https://github.com/willismax/CS_Course" style="display: inline-block; padding: 12px 24px; background: #48bb78; color: white; text-decoration: none; border-radius: 5px; font-weight: 600; margin: 10px;">📂 查看原始碼</a>
</div>
