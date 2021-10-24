const {app, BrowserWindow} = require('electron')
const path = require("path")
function createWindow(){
    const window = new BrowserWindow({
        width: 500, height: 500,
        webPreferences:{
            nodeIntegration: true, 
            contextIsolation: false,
        }
    })
    window.openDevTools();
    window.loadFile('index.html')
}
app.whenReady().then(() =>{
    createWindow()
    app.on('activate',() =>{
        if(BrowserWindow.getAllWindows().length===0){
            createWindow()
        }
    })
})
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})