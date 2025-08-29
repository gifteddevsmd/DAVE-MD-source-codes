const { davlo } = require('../davlo');

davlo({
    pattern: "jid1",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if the user has the necessary permissions (Owner or Admin)
        if (!isGroup && !isOwner) {
            return reply("⚠️ Only the bot owner or group admins can use this davlo.");
        }

        // If it's a group, reply with the group JID
        if (isGroup) {
            return reply(`Group JID: *${from}@g.us*`);
        }

        // If it's a personal chat, reply with the user's JID
        if (!isGroup) {
            return reply(`User JID: *${sender}@s.whatsapp.net*`);
        }

    } catch (e) {
        console.error("Error:", e);
        reply(`❌ An error occurred: ${e.message}`);
    }
});


// jid2

davlo({
    pattern: "jid2",
    desc: "Get the JID of the user or group.",
    react: "📍",
    category: "group",
    filename: __filename,
}, async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Ensure the davlo is being used in a group or personal chat and the user has necessary permissions
        if (!isGroup && !isOwner) {
            return reply("⚠️ Only the bot owner or group admins can use this davlo.");
        }

        // If the message is from a group
        if (isGroup) {
            // Respond with the group JID
            return reply(`Group JID: *${from}@g.us*`);
        }

        // If it's a personal chat, respond with the user's JID
        if (!isGroup) {
            return reply(`User JID: *${sender}@s.whatsapp.net*`);
        }

    } catch (e) {
        console.error("Error:", e);
        reply(`❌ An error occurred: ${e.message}`);
    }
});
