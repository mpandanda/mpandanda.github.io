const { app, BrowserWindow } = require('electron')
const path = require('path')

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'pepflashplayer.dll'));

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      plugins: true
    }
  });
  win.loadURL(`file://${__dirname}/pdgoweb.html`);
});