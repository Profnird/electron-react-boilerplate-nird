const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');
// const electronReload = require('electron-reload')

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// });

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false
        },
    })
    win.setMenu(null)
    win.loadFile('./src/index.html');
    win.webContents.openDevTools();
    // add function to launch developer electron env
}

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// });

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

app.whenReady().then(createWindow);

// encrypt
// const bcrypt = require('bcrypt')
// const saltRounds = 10;

// ipcMain.on('encrypt', (event, arg) => {
//     const hash = null;
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//         bcrypt.hash(arg, salt, function (err, hash) {
//             // Store hash in your password DB.
//             console.log(salt)
//             hash = salt;
//         });
//     })
//     bcrypt.compare(arg, hash, function (err, result) {
//         console.log(result);
//         event.reply('asynchronous-reply', result)
//     });
// })