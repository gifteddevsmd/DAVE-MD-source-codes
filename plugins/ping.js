const fs = require('fs');
const { davlo } = require('../davlo');

// Safely get version from package.json
let version = "2.0.0";
try {
    const pkg = JSON.parse(fs.readFileSync('./package.json'));
    version = pkg.version || "1.0.0";
} catch (err) {
    console.warn("⚠️ Could not read version:", err.message);
}

/**
 * Ping command - shows simple response speed
 */
davlo({
    pattern: "ping",
    alias: "speed",
    desc: "Check bot response time",
    category: "main",
    react: "🌐",
    filename: __filename
}, async (dave, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        await new Promise(resolve => setTimeout(resolve, 50));
        const ping = Date.now() - start;

        const msg = `╭━━〔 *𝐃𝐀𝐕𝐄-𝐌𝐃 PING* 〕━━┈⊷
┃ ⚡ *Speed:* \`${ping}ms\`
╰━━━⊷ *💖 Powered by 𝐃𝐀𝐕𝐄-𝐌𝐃*`;

        await dave.sendMessage(from, { text: msg }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});

/**
 * Ping2 command - lightweight, real round-trip ping
 */
davlo({
    pattern: "ping2",
    desc: "Quick ping check with real response time",
    category: "main",
    react: "💀",
    filename: __filename
}, async (dave, mek, m, { from, reply }) => {
    try {
        const start = Date.now();

        // Send temporary "thinking" message
        const temp = await dave.sendMessage(from, { text: "💫 *𝐃𝐀𝐕𝐄-𝐌𝐃 SPARKING... Please wait...*" });

        // Measure real round-trip time
        const ping = Date.now() - start;

        const msg = `╭────❍ *𝐃𝐀𝐕𝐄-𝐌𝐃 STATUS*
│
├ ✦ 𝙎𝙥𝙚𝙚𝙙: *${ping}ms*
├ ✦ 𝙋𝙞𝙣𝙜 𝙏𝙚𝙨𝙩: ✅
├ ✦ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: *v${version}*
│
╰────❍ *💖 Powered by 𝐃𝐀𝐕𝐄-𝐌𝐃*`;

        await dave.sendMessage(from, { text: msg }, { quoted: temp });
    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
});