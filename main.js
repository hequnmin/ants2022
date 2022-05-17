
const electron = require('electron');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false     //上下文隔离，此参数影响net的使用
        }
    });

    mainWindow.loadFile('index.html');
    
}

app.whenReady().then(createWindow);




