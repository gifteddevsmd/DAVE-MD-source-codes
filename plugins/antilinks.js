const config = require('../config')
const { davlo, commands } = require('../davlo')
davlo({
    pattern: "antilink",
    on: "body",
    desc: "Auto delete messages containing links in groups",
    category: "antifeature",
    filename: __filename
},
async (dave, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins }) => {
    try {
        if (!config || config.ANTI_LINK !== 'true') return;
        if (!isGroup || isAdmins || !isBotAdmins) return;

        if (!global.warnings) global.warnings = {};

        const linkPatterns = [
            /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,
            /https?:\/\/(?:api\.whatsapp\.com|wa\.me)\/\S+/gi,
            /wa\.me\/\S+/gi,
            /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,
            /https?:\/\/(?:www\.)?.+\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,
            /https?:\/\/(?:whatsapp\.com|channel\.me)\/\S+/gi,
            /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,
            /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,
            /https?:\/\/(?:www\.)?medium\.com\/\S+/gi
        ];

        const containsLink = linkPatterns.some(pattern => pattern.test(body?.toLowerCase()));

        if (!containsLink) return;

        // Delete the message
        await dave.sendMessage(from, { delete: m.key });

        // Track warnings
        global.warnings[sender] = (global.warnings[sender] || 0) + 1;
        const warningCount = global.warnings[sender];

        if (warningCount < 4) {
            await dave.sendMessage(from, {
                text: `⚠️ *LINK DETECTED!*\n\n` +
                      `╭── ⚠️ WARNING ⚠️ ──╮\n` +
                      `├ 👤 User: @${sender.split('@')[0]}\n` +
                      `├ 📊 Count: ${warningCount}/3\n` +
                      `├ ❌ Reason: Link Detected\n` +
                      `╰──────────────────`,
                mentions: [sender]
            });
        } else {
            await dave.sendMessage(from, {
                text: `🚫 @${sender.split('@')[0]} has been removed: too many warnings.`,
                mentions: [sender]
            });
            await dave.groupParticipantsUpdate(from, [sender], "remove");
            delete global.warnings[sender];
        }

    } catch (err) {
        console.error("❌ Anti-Link Error:", err);
        await dave.sendMessage(from, { text: "❌ An error occurred while processing Anti-Link." }, { quoted: mek });
    }
});