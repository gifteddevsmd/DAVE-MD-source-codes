const config = require('../config');
const { davlo, commands } = require('../davlo');
const wiki = require('wikipedia');

// Define the Wikipedia search davlo
davlo({
    pattern: "wiki",
    desc: "Search Wikipedia for information",
    category: "main",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if a query was provided
        if (!q) {
            return reply('Please provide a search query.');
        }

        // Fetch summary from Wikipedia
        const summary = await wiki.summary(q);
        
        // Format the reply
        let replyText = `
*📚 Wikipedia Summary 📚*

🔍 *Query*: _${q}_

💬 *Title*: _${summary.title}_

📝 *Summary*: _${summary.extract}_

🔗 *URL*: ${summary.content_urls.desktop.page}

> @ Powdered By DAVE-MD `;

        // Send the reply with the thumbnail image
        await dave.sendMessage(from, { image: { url: summary.originalimage.source }, caption: replyText }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
