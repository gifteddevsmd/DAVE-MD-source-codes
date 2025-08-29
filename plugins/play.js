const { davlo } = require('../davlo');
const fg = require('api-dylux');
const yts = require('yt-search');

//===========Audio Downloader===========
davlo({
    pattern: "play2",
    alias: ["ytmp3","audio"],
    desc: "Download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(dave, mek, m,{from, quoted, q, reply}) => {
try{
    if(!q) return reply("*Please provide a link or song name 🔎*");

    const search = await yts(q);
    const data = search.videos[0];
    const url = data.url;

    const caption = `╭━━〔 *⎈ 𝐃𝐀𝐕𝐄-𝐌𝐃 ⎈* 〕━━
┃🎵 *Title:* ${data.title}
┃👀 *Views:* ${data.views}
┃⏱️ *Duration:* ${data.timestamp}
┃🔗 *Link:* ${data.url}
╰━━━ *© 𝐃𝐀𝐕𝐄-𝐌𝐃*`;

    await dave.sendMessage(from,{image:{url: data.thumbnail},caption},{quoted:mek});

    const down = await fg.yta(url);
    await dave.sendMessage(from,{audio:{url: down.dl_url},mimetype:"audio/mpeg"},{quoted:mek});
    await dave.sendMessage(from,{document:{url: down.dl_url,mimetype:"audio/mpeg",fileName:data.title+".mp3",caption:"© 𝐃𝐀𝐕𝐄-𝐌𝐃"}},{quoted:mek});

}catch(e){ reply(`${e}`); }
});

//===========Video Downloader===========
davlo({
    pattern: "darama",
    alias: ["video2","ytmp4"],    
    desc: "Download videos",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(dave, mek, m,{from, quoted, q, reply}) => {
try{
    if(!q) return reply("*Please provide a link or video name 🔎*");

    const search = await yts(q);
    const data = search.videos[0];
    const url = data.url;

    const caption = `╭━━〔 *⎈ 𝐃𝐀𝐕𝐄-𝐌𝐃 ⎈* 〕━━
┃🎬 *Title:* ${data.title}
┃👀 *Views:* ${data.views}
┃⏱️ *Duration:* ${data.timestamp}
┃🔗 *Link:* ${data.url}
╰━━━ *© 𝐃𝐀𝐕𝐄-𝐌𝐃*`;

    await dave.sendMessage(from,{image:{url: data.thumbnail},caption},{quoted:mek});

    const down = await fg.ytv(url);
    await dave.sendMessage(from,{video:{url: down.dl_url},mimetype:"video/mp4"},{quoted:mek});
    await dave.sendMessage(from,{document:{url: down.dl_url,mimetype:"video/mp4",fileName:data.title+".mp4",caption:"© 𝐃𝐀𝐕𝐄-𝐌𝐃"}},{quoted:mek});

}catch(e){ reply(`${e}`); }
});