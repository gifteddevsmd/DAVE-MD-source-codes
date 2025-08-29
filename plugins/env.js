const config = require('../config');
const { davlo } = require('../davlo');
const axios = require('axios');

function isEnabled(value) {
    return value && value.toString().toLowerCase() === "true";
}

davlo({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of 𝐃𝐀𝐕𝐄-𝐌𝐃",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, async (dave, mek, m, { from, reply }) => {
    try {
        let envSettings = `╭〔 *𝐃𝐀𝐕𝐄-𝐌𝐃* 〕⊷
┃▸╭───────────
┃▸┃๏ *ENV SETTINGS 🗿*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━〔 *Enabled / Disabled* 〕━━┈⊷
┇๏ *Auto Read Status:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Reply Status:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Reply:* ${isEnabled(config.AUTO_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Sticker:* ${isEnabled(config.AUTO_STICKER) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Voice:* ${isEnabled(config.AUTO_VOICE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Owner React:* ${isEnabled(config.OWNER_REACT) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Custom Reacts:* ${isEnabled(config.CUSTOM_REACT) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto React:* ${isEnabled(config.AUTO_REACT) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Delete Links:* ${isEnabled(config.DELETE_LINKS) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Anti-Bad Words:* ${isEnabled(config.ANTI_BAD) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Typing:* ${isEnabled(config.AUTO_TYPING) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Recording:* ${isEnabled(config.AUTO_RECORDING) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Always Online:* ${isEnabled(config.ALWAYS_ONLINE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Public Mode:* ${isEnabled(config.PUBLIC_MODE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Read Message:* ${isEnabled(config.READ_MESSAGE) ? "Enabled ✅" : "Disabled ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${config.DESCRIPTION}`;

        // Send the rebranded image
        await dave.sendMessage(from, {
            image: { url: 'https://i.ibb.co/8gxpXvDk/temp-image.jpg' }, // New image URL
            caption: envSettings,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400480173280@newsletter',
                    newsletterName: "𝐃𝐀𝐕𝐄-𝐗𝐌𝐃",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Optional: Send audio if you want (keep original or update URL)
        await dave.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});