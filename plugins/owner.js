const { davlo } = require('../davlo');
const config = require('../config');

davlo({
  pattern: "owner",
  react: "🦋",
  desc: "Sends contact info of the bot owner.",
  category: "main",
  filename: __filename
},
async (dave, mek, m, { from, reply }) => {
  try {
    const ownerNumber = config.OWNER_NUMBER;
    const ownerName = config.OWNER_NAME;

    // Construct a professional vCard
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}
END:VCARD`;

    // Send vCard Contact
    await dave.sendMessage(from, {
      contacts: {
        displayName: ownerName,
        contacts: [{ vcard }]
      }
    }, { quoted: mek });

    // Send Image with Caption
    await dave.sendMessage(from, {
      image: { url: 'https://i.ibb.co/8gxpXvDk/temp-image.jpg' },
      caption: 
`╭━━〔 *𝐃𝐀𝐕𝐄-𝐗𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Owner Name:* ${ownerName}
┃◈┃• *Phone:* ${ownerNumber}
┃◈┃• *Bot Version:* 2.0.1
┃◈┃• *Team:*  DAVE-TECH
┃◈└───────────┈⊷
╰──────────────┈⊷
💚 _Reach out for support, updates, or collabs!_

> 💚 *Powered by DAVE-MD*`,
      contextInfo: {
        mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400480173280@newsletter',
          newsletterName: '𝐃𝐀𝐕𝐄-𝐗𝐌𝐃',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

    // Send Voice Note (PTT)
    await dave.sendMessage(from, {
      audio: {
        url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/contact.m4a'
      },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: mek });

  } catch (error) {
    console.error("[OWNER COMMAND ERROR]", error);
    reply(`❌ *An error occurred:* ${error.message}`);
  }
});