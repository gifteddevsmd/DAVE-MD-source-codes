const config = require('../config')
const {davlo , commands} = require('../davlo')
davlo({
    pattern: "live",
    react: "⤵️",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await dave.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.LIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
