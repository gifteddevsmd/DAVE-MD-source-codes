const config = require('../config')
const {davlo , commands} = require('../davlo')
davlo({
     pattern: "unmute",	
     alias: ["unlock"],
     react: "🔊",
     desc: "mute group.",
     category: "group",
     filename: __filename,
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isOwner || !isAdmins) return;  


    if (!m.isGroup) return reply(mg.onlygroup);
    if (!isBotAdmins) return reply(mg.needbotadmins);     
  
            await dave.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await dave.sendMessage(m.chat, { text: '*Group chat unmuted DAVE-MD* 🔊' }, { quoted: mek });
            return await dave.sendMessage(m.chat, { react: { text: '🔊', key: mass.key } });
} catch(e) {
console.log(e);
reply('*Error !!*')     
} 
})
