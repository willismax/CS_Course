# 資訊安全課程

# **資訊安全課程教學說明**

## **課程目標**
- 學習基本的加密與解密技術。
- 理解身份驗證系統的基本原理及如何確保安全性。
- 分析真實案例以了解安全事件對組織的影響與應對措施。
- 培養評估資訊安全風險與改進措施的能力。

## **程式實作模組**

### **練習1：實作簡單的加密算法**

#### **背景知識**
- **凱撒密碼 (Caesar Cipher)** 是一種古老的加密技術，通過將字母按固定的位移加密。
- 雖然這種加密技術已過時，但它展示了加密的基本原理，是學習複雜加密技術的基礎。

#### **詳細步驟**
1. **介紹加密與解密的概念**：
   - 加密：將原始數據轉換為不易讀的形式。
   - 解密：將加密數據轉回原始形式。

2. **撰寫加密函數**：
   - 創建函數 `encrypt`，接受 `text` 和 `shift` 作為參數。
   - 使用 ASCII 編碼 (`ord()` 和 `chr()` 函數) 操作字母。

3. **撰寫解密函數**：
   - 使用與加密相反的位移來還原原始文本。

4. **測試與除錯**：
   - 提供測試數據並指導學生進行測試和排除錯誤。

#### **程式碼補充說明**
```python
# 凱撒密碼的加密和解密
def encrypt(text, shift):
    """加密函數"""
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            shift_base = ord('A') if char.isupper() else ord('a')
            encrypted_text += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            encrypted_text += char
    return encrypted_text

def decrypt(text, shift):
    """解密函數"""
    return encrypt(text, -shift)

# 測試加密與解密
if __name__ == "__main__":
    original = "Hello, World!"
    shift_value = 3
    encrypted = encrypt(original, shift_value)
    decrypted = decrypt(encrypted, shift_value)
    print(f"原始文字: {original}")
    print(f"加密後: {encrypted}")
    print(f"解密後: {decrypted}")
```

### **練習2：開發基本的身份驗證系統**

#### **學習目標**
1. 學會密碼Hash的基本操作。
2. 理解用戶註冊與驗證的流程。
3. 能夠應用安全的加密庫來提高系統安全性。

#### **背景知識**
- 密碼不能以明文形式存儲，必須使用雜湊算法。
- **bcrypt** 是一種強大的密碼雜湊工具，能自動添加鹽值(salt)以防止彩虹表攻擊。

#### **詳細步驟**
1. **介紹密碼雜湊的概念與重要性**：
   - 雜湊是一種不可逆的加密方法，適合用於密碼存儲。
   - 為什麼使用鹽值能提高安全性。

2. **撰寫用戶註冊函數**：
   - 使用字典模擬數據庫，將用戶名與加密的密碼對應存儲。

3. **撰寫用戶登入函數**：
   - 比對用戶提供的密碼與存儲的雜湊密碼。

4. **安全注意事項**：
   - 注意雜湊的成本參數調整。
   - 強調不應返回過於詳細的錯誤信息（例如：「用戶名不存在」或「密碼錯誤」）。

#### **程式碼補充說明**
```python
import bcrypt

# 模擬的用戶資料庫
user_db = {}

def register(username, password):
    """用戶註冊函數"""
    if username in user_db:
        return "用戶已存在"
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user_db[username] = hashed
    return "註冊成功"

def login(username, password):
    """用戶登入函數"""
    if username not in user_db:
        return "登入失敗：用戶名或密碼錯誤"
    stored_hashed = user_db[username]
    if bcrypt.checkpw(password.encode('utf-8'), stored_hashed):
        return "登入成功"
    else:
        return "登入失敗：用戶名或密碼錯誤"

# 測試
if __name__ == "__main__":
    print(register("user1", "mypassword123"))
    print(login("user1", "mypassword123"))
    print(login("user1", "wrongpassword"))
```

## **延伸討論**

### **1. 學習成果反思**
- 完成實作後，討論以下問題：
  - 凱撒密碼有何限制？如何改進？
  - 在身份驗證系統中，雜湊比對的效率是否會成為瓶頸？

### **2. 題目與討論**
- **題目**：
  1. 假設一個密碼存儲系統中遺失了鹽值，這會產生什麼影響？
  2. 如果凱撒密碼的密鑰被攔截，加密信息是否仍然安全？為什麼？

- **討論**：
  - 如何選擇合適的加密算法？（對稱 vs 非對稱加密）
  - 密碼管理的實務建議（例如：使用密碼管理器）。

## **課程結構說明**
本課程分為以下幾個模組，每個模組包含理論講解和實作練習：

1. **加密技術**：介紹基本的加密和解密技術，包括對稱加密和非對稱加密。
2. **身份驗證**：學習如何設計和實作安全的身份驗證系統。
3. **網絡安全**：分析常見的網絡攻擊手法及其防禦措施。
4. **安全事件管理**：通過案例分析，了解如何應對和處理安全事件。
5. **風險評估與管理**：學習如何評估資訊安全風險並制定改進措施。

每個模組都包含實作練習，幫助學生鞏固所學知識並應用於實際場景。
