const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6289646942000'] // pakai nomor owner
global.ownernomer = "6289746942000" // pakai nomor owner
global.socialmedia = "IG: @keilasenpaj" // ini ig buat di ownerjy
global.yutub = "YT: @keilasenpai"// sama
global.lokasi = "Indonesia, Jawatengah, Kudus"//

global.packgename = "by" 
global.author = "KeiLaSenpai" 

global.title = 'KeiLa - MD'//Tittle reply 
global.body = 'Ei Wangy Wangy!' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})