const axios = require('axios');
const { davlo } = require('../davlo');
const fs = require('fs');
const os = require('os');

// Load version from package.json
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const version = pkg.version || "1.0.0";

// Format uptime
function formatUptime(ms) {
    const sec = Math.floor((ms / 1000) % 60);
    const min = Math.floor((ms / (1000 * 60)) % 60);
    const hr = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hr}h ${min}m ${sec}s`;
}

davlo({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "📦 Show full repo & runtime stats",
    category: "main",
    react: "💚",
    filename: __filename
}, 
async (dave, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://api.github.com/repos/giftdee/DAVE-MD';
        const { data } = await axios.get(repoUrl, { timeout: 8000 });

        const { stargazers_count, forks_count } = data;
        const estUsers = (stargazers_count + forks_count) * 5;

        const uptime = formatUptime(process.uptime() * 1000);
        const platform = os.platform().toUpperCase();
        const arch = os.arch().toUpperCase();

        // Count plugins
        const commandFiles = fs.readdirSync('./plugins').filter(file => file.endsWith('.js')).length;

        const msg = `
╭━━〔 *⎈ 𝐃𝐀𝐕𝐄-𝐌𝐃 Runtime Info* 〕━━⊷
┃
┃ 💚 *Project:* 𝐃𝐀𝐕𝐄-𝐌𝐃
┃ 💚 *Repo:* https://github.com/giftdee/DAVE-MD
┃ 💚 Stars: ${stargazers_count}
┃ 💚 Forks: ${forks_count}
┃ 💚 Estimated Users: ${estUsers}
┃ 💚 Version: v${version}
┃ 💚 Commands Loaded: ${commandFiles}
┃ 💚 Uptime: ${uptime}
┃ 💚 System: ${platform} (${arch})
┃
╰━━━⊷ *© 𝐃𝐀𝐕𝐄-𝐌𝐃 2025*`.trim();

        const contextInfo = {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363400480173280@newsletter',
                newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
                serverMessageId: 143
            }
        };

        // Send main stats
        await dave.sendMessage(from, { text: msg, contextInfo }, { quoted: mek });

        // Send fancy image
        await dave.sendMessage(from, {
            image: { url: 'https://i.ibb.co/8gxpXvDk/temp-image.jpg' },
            caption: `✨ *𝐃𝐀𝐕𝐄-𝐌𝐃: Powering Smart Chats!* ✨\n\n📎 *Repo:* github.com/giftdee/DAVE-MD\n⭐ Stars: ${stargazers_count}\n🍴 Forks: ${forks_count}\n👥 Users: ${estUsers}`,
            contextInfo
        }, { quoted: mek });

        // Send promo audio
        await dave.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/hpwsi2.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (err) {
        console.error("❌ Repo Error:", err.message);
        reply(`🚫 *Oops!* Couldn’t fetch repo info.\n💬 ${err.message || "Network/Timeout Error"}`);
    }
});