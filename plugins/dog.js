const axios = require('axios');
const { davlo, commands } = require('../davlo');

davlo({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (dave, mek, m, { from, quoted, body, isCmd, davlo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await dave.sendMessage(from, { image: { url: data.message }, caption: '> *© 𝕊𝕚𝕝𝕧𝕒 𝕊𝕡𝕒𝕣𝕜 𝕄𝔻 ' }, { quoted: mek });
    } catch (e) {
        console.log(e); // ❯❯ 𝕊𝕚𝕝𝕧𝕒 𝕊𝕡𝕒𝕣𝕜 𝕄𝔻
        reply(`єяяσя ƒєт¢нιηg ∂σg ιмαgє: ${e.message}`);
    }
});
