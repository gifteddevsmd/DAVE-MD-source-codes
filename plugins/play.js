const {davlo , commands} = require('../davlo')
const fg = require('api-dylux')
const yts = require('yt-search')

davlo({
    pattern: "play2",
    alias: ["ytmp3","audio"],
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a link or a name 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `╭━━━〔 *⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈* 〕━━━┈⊷
┃▸┃๏ *MUSIC DOWNLOADER*
╭━❮ *Download Audio* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃๏ *Tital* - ${data.title}
┃▸┃๏ *Views* - ${data.views}
┃▸┃๏ *Description* - ${data.description}
┃▸┃๏ *Duration:* ${data.timestamp}}
┃▸┃๏ *Link* - ${data.url}
┃▸┃๏ *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *©⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈ ♡*`
await dave.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await dave.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await dave.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========darama-dl===========

davlo({
    pattern: "darama",
    alias: ["video2","ytmp4"],    
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a link or a name 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `╭━━━〔 *⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈* 〕━━━┈⊷
┃▸┃๏ *VIDEO DOWNLOADER*
╭━❮ *Download Audio* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃๏ *Tital* - ${data.title}
┃▸┃๏ *Views* - ${data.views}
┃▸┃๏ *Description* - ${data.description}
┃▸┃๏ *Duration:* ${data.timestamp}}
┃▸┃๏ *Link* - ${data.url}
┃▸┃๏ *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *©⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈♡*`
await dave.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await dave.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await dave.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©⎈ Sɪʟᴠᴀ Ｓᴘᴀʀᴋ мᎠ ⎈"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
