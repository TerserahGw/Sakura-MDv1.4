const chalk = require('chalk')
const fs = require('fs')
global.ppbot = `https://telegra.ph/file/10dcba2d11638a71d2dbc.jpg`// pakai url gmbr
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})