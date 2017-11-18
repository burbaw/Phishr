const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

//good enough for the demo lul
app.on('ready', () => {
    win = new BrowserWindow({
        width: 400,
        height: 600
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'pages/index.html'),
        protocol: 'file:',
        slashes: true
    }))
})


app.on('window-all-closed', () => {
    app.quit();
})