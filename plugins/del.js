const config = require('../config')
const { davlo, commands } = require('../davlo')

davlo({
pattern: "delete",
react: "❌",
alias: ["del"],
desc: "delete message",
category: "group",
use: '.del',
filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner ||  !isAdmins) return;
try{
if (!m.quoted) return reply(mg.notextfordel);
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await dave.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('💎 DAVE-MD 💎 successful..👨‍💻✅')
} 
})
