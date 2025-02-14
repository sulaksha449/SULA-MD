const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/vmjibk.jpg",
ALIVE_MSG: process.env.ALIVE_Msg || "𝗛𝗜,𝐒𝐔𝐋𝐀-𝐌𝐃 𝙰𝚕𝚒𝚟𝚎 𝓝𝓞𝓦",
};
