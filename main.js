// app および BrowserWindow への参照を読み込む
const {app, BrowserWindow} = require('electron');

// Window を管理する変数
let win;

// メインウィンドウを作成するための関数
function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(`file://${__dirname}/mainwindow.html`);
    win.on('closed', () => { win = null; });
}

// アプリケーションが準備できたらメインウィンドウを作成する
app.on('ready', createWindow);

// macOS ではすべてのウィンドウが閉じた際にアプリケーションを終了させる
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
