const config = require('../config')
const { davlo, commands } = require('../davlo')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');
const axios = require('axios')
var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."

//====================================================================================
davlo({
    pattern: "garl",
    alias: ["imgloli"],
    react: '😎',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `😎 Random Garl image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
davlo({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '💫',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `🩵 Random Waifu image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
davlo({
    pattern: "neko",
    alias: ["imgneko"],
    react: '💫',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `🩷 Random neko image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
  
//=====================================================================
davlo({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '💕',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `❤️‍🔥Random megumin image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//================================================================
davlo({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '💫',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `😎 Random maid image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.images[0].url  }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})

//=====================================================================
davlo({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '😎',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(dave, mek, m,{from, l, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `😎 Random awoo image

©💎 DAVE-MD 💎`
await dave.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })
} catch (e) {
reply(cants)
console.log(e)
}
})
// Anmiex
davlo({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: '*ANIME GIRL IMAGE* 🥳\n\n\n *> ©💎 DAVE-MD 💎`*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

davlo({
    pattern: "animegirl1",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > ©💎 DAVE-MD 💎' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

davlo({
    pattern: "animegirl2",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > ©💎 DAVE-MD 💎' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

davlo({
    pattern: "animegirl3",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © 💎 DAVE-MD 💎' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

davlo({
    pattern: "animegirl4",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © 💎 DAVE-MD 💎' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});

davlo({
    pattern: "animegirl5",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.url }, caption: 'ANIME GIRL IMAGE 👾\n\n\n > © 💎 DAVE-MD 💎' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});


//==========anime=====

davlo({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `>💎 DAVE-MD 💎 ANIME IMGS*`
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/b26f27aa5daaada031b90.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/51b44e4b086667361061b.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/7d165d73f914985542537.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/3d9732d2657d2d72dc102.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/7514b18ea89da924e7496.jpg`},caption:dec},{quoted:mek});
await dave.sendMessage(from,{image:{url: `https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
});


davlo({
    pattern: "anime1",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/aD7t0Bc.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/PQO5wPN.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/5At1P4A.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/MjtH3Ha.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/QQW7VKy.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

davlo({
    pattern: "anime2",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/0r1Bn88.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/2Xdpuov.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/0hx-3AP.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/q054x0_.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/4lyqRvd.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


davlo({
    pattern: "anime3",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/gnpc_Lr.jpeg` },caption: '> ©💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/P6X-ph6.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/~p5W9~k.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/7Apu5C9.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/OTRfON6.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


davlo({
    pattern: "anime4",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/aGgUm80.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/i~RQhRD.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/94LH-aU.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/V8hvqfK.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/lMiXE7j.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


davlo({
    pattern: "anime5",
    desc: "Animal image.",
    react: "🧚‍♀️",
    category: "other",
    filename: __filename
},
async(dave, mek, m,{from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/-ABlAvr.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/HNEg0-Q.png` },caption: '> ©💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/3x~ovC6.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/brv-GJu.jpg` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

await dave.sendMessage(from,{image :{ url: `https://i.waifu.pics/FWE8ggD.png` },caption: '> © 💎 DAVE-MD 💎' },{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
