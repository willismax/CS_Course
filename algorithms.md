---
layout: page
title: 演算法學習
permalink: /algorithms/
---

# 📊 演算法學習中心

歡迎來到演算法學習中心！這裡提供從基礎到進階的演算法教學內容，配合互動式視覺化工具，幫助你深入理解各種演算法的運作原理。

---

## 🎯 學習目標

通過本單元的學習，你將能夠：
- ✅ 理解常見排序演算法的原理與實作
- ✅ 掌握搜尋演算法的應用時機
- ✅ 分析演算法的時間與空間複雜度
- ✅ 了解動態規劃與遞迴的差異
- ✅ 實作並優化各種演算法

---

## 📚 課程內容

### 1️⃣ 排序演算法 (Sorting Algorithms)

排序是計算機科學中最基本也最重要的操作之一。理解不同排序演算法的特性，能幫助你在實際應用中選擇最適合的方法。

#### 📖 理論基礎

**什麼是排序？**
排序是將一組資料按照特定順序（通常是升序或降序）重新排列的過程。

**為什麼要學排序？**
- 🔍 許多演算法的基礎（如二元搜尋需要排序好的資料）
- ⚡ 提升資料處理效率
- 🎓 學習演算法設計與分析的最佳入門
- 💼 面試必考題型

#### 🎮 互動式學習工具

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; margin: 25px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h3 style="color: white; margin-top: 0;">🔄 排序演算法視覺化工具</h3>
  <p>這個工具提供 6 種演算法的即時視覺化，讓你看到每個步驟的執行過程！</p>
  <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin: 15px 0;">
    <strong>支援的演算法：</strong>
    <ul style="color: white; margin: 10px 0;">
      <li>✨ 選擇排序 (Selection Sort)</li>
      <li>✨ 插入排序 (Insertion Sort)</li>
      <li>✨ 泡沫排序 (Bubble Sort)</li>
      <li>✨ 快速排序 (Quick Sort)</li>
      <li>🔍 二元搜尋 (Binary Search)</li>
      <li>⚡ 動態規劃 (Dynamic Programming - Fibonacci)</li>
    </ul>
  </div>
  <a href="../Sorting_algorithm.html" style="display: inline-block; padding: 12px 24px; background: white; color: #667eea; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">🚀 立即體驗</a>
</div>

#### 📝 各演算法詳解

##### 1. 選擇排序 (Selection Sort)

**核心概念：**
- 找到陣列中的最小值
- 將它與第一個元素交換
- 對剩餘元素重複此過程

**時間複雜度：** O(n²)  
**空間複雜度：** O(1)

**適用場景：**
- 資料量小的情況
- 記憶體空間有限
- 不需要穩定排序

```python
def selection_sort(arr):
    for i in range(len(arr) - 1):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
```

---

##### 2. 插入排序 (Insertion Sort)

**核心概念：**
- 將陣列分為已排序和未排序兩部分
- 依次取出未排序的元素
- 插入到已排序部分的正確位置

**時間複雜度：** O(n²)（最佳情況 O(n)）  
**空間複雜度：** O(1)

**適用場景：**
- 資料接近排序狀態
- 資料量小
- 需要線上排序（邊輸入邊排序）

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
```

---

##### 3. 泡沫排序 (Bubble Sort)

**核心概念：**
- 重複比較相鄰元素
- 如果順序錯誤就交換
- 大的元素會像泡泡一樣「浮」到最後

**時間複雜度：** O(n²)  
**空間複雜度：** O(1)

**適用場景：**
- 教學用途
- 資料量極小
- 需要穩定排序

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

---

##### 4. 快速排序 (Quick Sort)

**核心概念：**
- 選擇一個基準點 (pivot)
- 將小於基準的放左邊，大於的放右邊
- 遞迴處理左右兩側

**時間複雜度：** O(n log n)（最壞 O(n²)）  
**空間複雜度：** O(log n)

**適用場景：**
- 大量資料排序
- 不需要穩定排序
- 記憶體充足

```python
def quick_sort(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr
```

---

### 2️⃣ 搜尋演算法 (Search Algorithms)

#### 二元搜尋 (Binary Search)

**核心概念：**
- 在已排序的陣列中搜尋
- 每次將搜尋範圍縮小一半
- 效率遠超線性搜尋

**時間複雜度：** O(log n)  
**空間複雜度：** O(1)

**重要條件：** ⚠️ 資料必須先排序！

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

---

### 3️⃣ 動態規劃 (Dynamic Programming)

動態規劃是一種解決複雜問題的方法，通過將問題分解為更小的子問題，並儲存子問題的解來避免重複計算。

#### Fibonacci 數列範例

**遞迴方法（效率低）：**
```python
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)
# 時間複雜度：O(2^n) - 非常慢！
```

**動態規劃方法（效率高）：**
```python
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
# 時間複雜度：O(n) - 快很多！
```

**效能比較：**
- 計算 Fibonacci(40)：
  - 遞迴：約需 1-2 秒
  - 動態規劃：不到 0.001 秒
  - **效能提升超過 1000 倍！** 🚀

---

## 📊 演算法比較表

| 演算法 | 時間複雜度(平均) | 時間複雜度(最差) | 空間複雜度 | 穩定性 | 適用場景 |
|--------|------------------|------------------|------------|--------|----------|
| 選擇排序 | O(n²) | O(n²) | O(1) | ❌ | 小資料、記憶體受限 |
| 插入排序 | O(n²) | O(n²) | O(1) | ✅ | 接近排序、小資料 |
| 泡沫排序 | O(n²) | O(n²) | O(1) | ✅ | 教學、極小資料 |
| 快速排序 | O(n log n) | O(n²) | O(log n) | ❌ | 大量資料、一般用途 |
| 二元搜尋 | O(log n) | O(log n) | O(1) | - | 已排序資料搜尋 |

**說明：**
- ✅ 穩定：相同元素的相對位置不變
- ❌ 不穩定：相同元素的相對位置可能改變

---

## 🎯 學習建議

### 初學者
1. **先理解概念**：觀看視覺化工具，理解演算法如何運作
2. **手動模擬**：拿紙筆模擬排序過程，加深理解
3. **閱讀程式碼**：仔細閱讀範例程式碼，理解實作細節
4. **自己實作**：試著不看答案，自己寫出來

### 進階學習者
1. **分析複雜度**：練習計算時間與空間複雜度
2. **優化演算法**：思考如何改進現有演算法
3. **比較效能**：實際測試不同演算法的執行時間
4. **解決問題**：在 LeetCode 等平台練習相關題目

---

## 💡 實用技巧

### 何時使用哪種排序？

```
資料量很小 (< 10)
  → 插入排序 或 選擇排序

資料接近排序狀態
  → 插入排序

需要穩定排序
  → 泡沫排序 或 插入排序

一般情況、大量資料
  → 快速排序 或 合併排序

記憶體受限
  → 選擇排序 或 插入排序
```

### 常見陷阱

⚠️ **二元搜尋的前提**
- 資料必須已排序
- 忘記排序會導致錯誤結果

⚠️ **快速排序的基準點選擇**
- 選擇不當會導致最壞情況 O(n²)
- 可使用隨機選擇或三數取中法改善

⚠️ **動態規劃的記憶體使用**
- 注意避免不必要的空間浪費
- 可以用滾動陣列優化

---

## 📖 延伸閱讀

### 相關教學
- [Binary Tree Explanation](../Binary_Tree_Explanation.md) - 樹狀資料結構
- [CPU 排程演算法](../cpu_Scheduling.html) - 作業系統中的演算法應用

### 推薦資源
- [VisuAlgo](https://visualgo.net/) - 更多演算法視覺化
- [LeetCode](https://leetcode.com/) - 演算法練習平台
- [演算法圖解](https://www.books.com.tw/products/0010774152) - 推薦書籍

---

## 🚀 開始實作

準備好了嗎？選擇一個工具開始你的演算法學習之旅！

<div style="text-align: center; margin: 40px 0;">
  <a href="../Sorting_algorithm.html" style="display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); margin: 10px;">
    🎮 開始視覺化學習
  </a>
  <a href="../interactive-tools/" style="display: inline-block; padding: 15px 30px; background: #48bb78; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); margin: 10px;">
    🔧 查看所有工具
  </a>
</div>

---

<div style="background: #f7fafc; padding: 25px; border-radius: 10px; border-left: 4px solid #4299e1; margin-top: 40px;">
  <h3 style="margin-top: 0; color: #2d3748;">💬 學習建議</h3>
  <p style="color: #4a5568; margin-bottom: 0;">
    演算法學習需要時間和練習。不要急於求成，先理解原理，再追求效率。
    記住：<strong>理解比記憶更重要</strong>！
  </p>
</div>

---

<div style="text-align: center; padding: 20px;">
  <a href="../" style="color: #4299e1; text-decoration: none; font-weight: 600;">← 返回首頁</a> | 
  <a href="https://github.com/willismax/CS_Course" style="color: #4299e1; text-decoration: none; font-weight: 600;">查看原始碼 →</a>
</div>
