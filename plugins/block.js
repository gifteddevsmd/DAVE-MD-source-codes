const config = require('../config')
const { davlo, commands } = require('../davlo')
davlo({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (dave, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    if (!quoted) return reply("❌ Please reply to the user you want to block.");

    const user = quoted.sender;
    try {
        await dave.updateBlockStatus(user, 'block');
        reply('🚫💎 DAVE-MD 💎 User ' + user + ' blocked successfully.');
    } catch (error) {
        reply('❌ Error blocking user: ' + error.message);
    }
});
