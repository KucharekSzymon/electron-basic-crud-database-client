const {app, BrowserWindow} = require('electron')
const path = require("path")
function createWindow(){
    const window = new BrowserWindow({
        width: 800, height: 800,
        webPreferences:{
            nodeIntegration: true, 
            contextIsolation: false,
        }
    })
    window.openDevTools();
    window.loadFile('Select.html')
}
function sndWindow(){
    const window = new BrowserWindow({
        width: 800, height: 800,
        webPreferences:{
            nodeIntegration: true, 
            contextIsolation: false,
        }
    })
    window.openDevTools();
    window.loadFile('Insert.html')
}
app.whenReady().then(() =>{
    createWindow()
    sndWindow()
    app.on('activate',() =>{
        if(BrowserWindow.getAllWindows().length===0){
            createWindow()
            sndWindow()
        }
    })
})
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
