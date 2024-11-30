import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Lock, Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import * as THREE from 'three';

const XSSSecurityDemo = () => {
  const [currentDefense, setCurrentDefense] = useState(null);
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const defenseMethods = [
    {
      name: 'HTML轉義',
      code: `// JavaScript HTML轉義函式
function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// React使用範例
const safeContent = escapeHTML(userInput);`,
      description: '將特殊字符轉換為安全的HTML實體，防止腳本執行',
      benefit: '阻止大多數基本XSS攻擊'
    },
    {
      name: '內容安全策略(CSP)',
      code: `// HTML Meta標籤設定
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
              script-src 'self' 'nonce-random123'; 
              style-src 'self';">

// Apache .htaccess設定
Header set Content-Security-Policy "default-src 'self';"

// Nginx 配置
add_header Content-Security-Policy "default-src 'self';";`,
      description: '限制可載入的資源來源，阻止未授權腳本',
      benefit: '全面控制網頁資源載入'
    },
    {
      name: 'HttpOnly Cookie',
      code: `// PHP設定
setcookie("session_id", $token, [
    'httponly' => true,
    'secure' => true,
    'samesite' => 'Strict'
]);

// Node.js Express設定
res.cookie('session_id', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
});`,
      description: '設置Cookie不可被客戶端腳本存取',
      benefit: '防止Cookie被XSS腳本竊取'
    },
    {
      name: '輸入驗證',
      code: `// JavaScript驗證範例
function validateInput(input) {
  // 只允許特定字符
  const sanitizedInput = input.replace(/[<>'"]/g, '');
  
  // 使用白名單驗證
  const allowedPattern = /^[a-zA-Z0-9\s]+$/;
  return allowedPattern.test(sanitizedInput);
}

// React組件範例
const handleSubmit = (e) => {
  const userInput = e.target.value;
  if (validateInput(userInput)) {
    // 處理安全的輸入
  } else {
    // 阻止可疑輸入
    alert('輸入包含不安全字符');
  }
}`,
      description: '限制和過濾使用者輸入',
      benefit: '主動阻絕潛在威脅'
    }
  ];

  const selectDefenseMethod = (method) => {
    setCurrentDefense(method);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          <Shield className="mr-2 text-blue-500" /> XSS安全防禦教學平台
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" /> 
                防禦技術選擇
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {defenseMethods.map((method, index) => (
                  <Button 
                    key={index}
                    onClick={() => selectDefenseMethod(method)}
                    variant="outline"
                    className="w-full"
                  >
                    {method.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 text-green-500" /> 
                防禦技術詳細說明
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentDefense ? (
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {currentDefense.name}
                  </h3>
                  <p className="mb-3">{currentDefense.description}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-md">
                    <h4 className="font-semibold mb-2">實作代碼:</h4>
                    <pre className="bg-white p-2 rounded text-sm overflow-x-auto">
                      {currentDefense.code}
                    </pre>
                  </div>
                  
                  <div className="mt-3 bg-green-50 p-3 rounded-md">
                    <h4 className="font-semibold mb-2">防禦優勢:</h4>
                    <p>{currentDefense.benefit}</p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">
                  選擇一種防禦技術以查看詳細說明
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>安全實踐指南</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="principles">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="principles">安全原則</TabsTrigger>
                <TabsTrigger value="checklist">檢查清單</TabsTrigger>
                <TabsTrigger value="tools">推薦工具</TabsTrigger>
              </TabsList>
              
              <TabsContent value="principles">
                <h3 className="font-semibold mb-2">網路安全基本原則</h3>
                <ul className="list-disc pl-5">
                  <li>最小權限原則</li>
                  <li>深度防禦策略</li>
                  <li>持續安全更新</li>
                  <li>安全意識培訓</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="checklist">
                <h3 className="font-semibold mb-2">XSS防禦檢查清單</h3>
                <ul className="list-disc pl-5">
                  <li>驗證所有用戶輸入</li>
                  <li>實施內容安全策略(CSP)</li>
                  <li>使用安全的輸出編碼</li>
                  <li>限制Cookie存取</li>
                  <li>定期進行安全掃描</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="tools">
                <h3 className="font-semibold mb-2">安全檢測工具</h3>
                <ul className="list-disc pl-5">
                  <li>OWASP ZAP</li>
                  <li>Burp Suite</li>
                  <li>Acunetix</li>
                  <li>Nessus</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div ref={mountRef} />
    </div>
  );
};

export default XSSSecurityDemo;
