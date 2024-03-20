import { app, BrowserWindow } from "electron";
app.whenReady().then(async () => {
  const win = await new BrowserWindow({
    width: 800,
    height: 600,
    // 配置窗口的WebPreferences选项，用于控制渲染进程的行为
    webPreferences: {
      nodeIntegration: true,
      // 启用Node.js集成
      contextIsolation: false,
      // 禁用上下文隔离
      webSecurity: false
      // 禁用web安全策略
    }
  });
  if (app.isPackaged) {
    win.loadFile("index.html");
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  }
});
