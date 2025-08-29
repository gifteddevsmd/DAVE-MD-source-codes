/*const config = require('../config')
const { davlo, commands } = require('../davlo')
const { getAnti, setAnti, initializeAntiDeleteSettings } = require('../data/antidel');

// Initialize anti-delete settings once
initializeAntiDeleteSettings();

davlo({
    pattern: "antidelete",
    alias: ['antidel', 'antid'],
    desc: "Toggle Anti-Delete system",
    category: "misc",
    react: "🛡️",
    filename: __filename
}, 
async (dave, mek, m, { from, reply, q, isOwner }) => {
    if (!isOwner) {
        return await dave.sendMessage(from, {
            text: "*📛 Only the bot owner can use this command.*"
        }, { quoted: mek });
    }

    try {
        const command = q?.toLowerCase();

        switch (command) {
            case 'on':
                await setAnti('gc', true);
                await setAnti('dm', true);
                return reply('✅ 𝐃𝐀𝐕𝐄-𝐌𝐃 Anti-Delete is now enabled for both groups and private chats.');

            case 'off gc':
                await setAnti('gc', false);
                return reply('🚫 𝐃𝐀𝐕𝐄-𝐌𝐃 Anti-Delete disabled for groups.');

            case 'off dm':
                await setAnti('dm', false);
                return reply('🚫 𝐃𝐀𝐕𝐄-𝐌𝐃 Anti-Delete disabled for private chats.');

            case 'set gc':
                const gcStatus = await getAnti('gc');
                await setAnti('gc', !gcStatus);
                return reply(`🔁 𝐃𝐀𝐕𝐄-𝐌𝐃 Group Anti-Delete is now *${!gcStatus ? 'enabled' : 'disabled'}*.`);

            case 'set dm':
                const dmStatus = await getAnti('dm');
                await setAnti('dm', !dmStatus);
                return reply(`🔁 𝐃𝐀𝐕𝐄-𝐌𝐃 DM Anti-Delete is now *${!dmStatus ? 'enabled' : 'disabled'}*.`);

            case 'set all':
                await setAnti('gc', true);
                await setAnti('dm', true);
                return reply('✅ 𝐃𝐀𝐕𝐄-𝐌𝐃 Anti-Delete activated across all chats.');

            case 'status':
                const currentDmStatus = await getAnti('dm');
                const currentGcStatus = await getAnti('gc');
                return reply(
                    `📊 *𝐃𝐀𝐕𝐄-𝐌𝐃 Anti-Delete Status:*\n\n` +
                    `• Group Chats: *${currentGcStatus ? 'Enabled ✅' : 'Disabled ❌'}*\n` +
                    `• Private Chats: *${currentDmStatus ? 'Enabled ✅' : 'Disabled ❌'}*`
                );

            default:
                return reply(
`🛡️ *𝐃𝐀𝐕𝐄-𝐌𝐃 AntiDelete Command Guide:*

• \`.antidelete on\` – Enable globally
• \`.antidelete off gc\` – Disable for groups
• \`.antidelete off dm\` – Disable for private chats
• \`.antidelete set gc\` – Toggle for groups
• \`.antidelete set dm\` – Toggle for private chats
• \`.antidelete set all\` – Enable everywhere
• \`.antidelete status\` – View current status`
                );
        }

    } catch (e) {
        console.error("❌ AntiDelete Error:", e);
        return reply("❌ 𝐃𝐀𝐕𝐄-𝐌𝐃: An error occurred while toggling AntiDelete settings.");
    }
});*/