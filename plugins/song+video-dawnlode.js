const {cmd , commands} = require('../command')
const fg = require("api-dylux")
const yts = require("yt-search")


cmd({
    pattern: "song",
    desc: "Download Song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(iq) return reply ("plese give url or title")
const search = await yts(q)
const data = search.videos[0]:
const url = data.url

let desc = " 
 `𝐒𝐔𝐋𝐀-𝐌𝐃 SONG DOWNLOADER` 😈

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}

Made By 𝐒𝐔𝐋𝐀-𝐌𝐃
"

await conn.sendMessege(from.{image:{url: data.thumbnail},caption:desc},quoted:mek}):

//downlode audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message

await conn.sendMessege(from.{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek}):


}catch(e){
console.log(e)
reply("{$e}")
}
}}
