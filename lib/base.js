const fs = require('fs')
const { prefix } = require('./setting.js')
//const prefix = JSON.parse(fs.readFileSync('./setting.json'))
const menu = 
`*=== Tesse BOT ===*
*Tesse BOT build 1.0.1*

*MENU*
${prefix}ping
${prefix}menu

semoga membantu`;



const allcmd = `
*= Terra BOT =*
_by Tesseract build 1.0.2_

*ALL COMMAND*
_semoga bermanfaat :3_
> ${prefix}ping
> ${prefix}menu
> ${prefix}info
`;

module.exports = { menu, allcmd }