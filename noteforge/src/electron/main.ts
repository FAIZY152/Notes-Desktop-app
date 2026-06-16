import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 670,
  minWidth: 900,
  minHeight: 600,
  backgroundColor: '#f7f7f7',
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : any),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (proce}ss.platform !== 'darwin') {
//     app.quit()
//   }
// })

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
