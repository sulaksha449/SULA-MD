const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "💾",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*╭──────────●●►*
*𝐒𝐔𝐋𝐀-𝐌𝐃 UPTIME LIST↷*

*_UPTIME:➠_*  ${runtime(process.uptime())}
*_RAM USAGE:➠_* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*_HOSTNAME:➠_* ${os.hostname()}
*_OWNER:➠_* *𝗦𝘂𝗹𝗮𝗸𝘀𝗵𝗮 𝗠𝗮𝗱𝗮𝗿𝗮*
*_channal link »_*Comming Soon !*
*╰──────────●●►*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

