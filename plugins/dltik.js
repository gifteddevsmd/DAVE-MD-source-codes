const fetch = require("node-fetch");
const { davlo } = require("../davlo");

davlo({
  pattern: "tiktok2",
  alias: ["tt2", "tiktokdl2", "ttdown2", "tiktokvid2", "ttdl"],
  desc: "Download videos or images from TikTok.",
  react: '✅',
  category: 'tools',
  filename: __filename
}, async (dave, message, match, { from, args, reply }) => {
  try {
    const tiktokUrl = args[0];
    if (!tiktokUrl || !tiktokUrl.startsWith("http")) {
      return reply("Please provide a valid TikTok link.\n\n*Usage Example:*\n\n.tt2 <TikTok video URL>");
    }

    const response = await fetch('https://api.yanzbotz.live/api/downloader/tiktok?url=' + encodeURIComponent(tiktokUrl) + '&apiKey=yanzdev');
    const data = await response.json();

    if (!data || !data.result) {
      return reply("Sorry, I couldn't fetch the TikTok content. Please check the link and try again.");
    }

    const result = data.result;
    const captionText = "*𝐃𝐀𝐕𝐄-𝐌𝐃* ⊷\n┃๏ *TIKTOK DOWNLOADER*\n···๏\n⊷\n*Post Details* ⊷\n*Type:* " + (result.type || "N/A") + "\n*Name:* " + (result.name || "N/A") + "\n*Username:* " + (result.username || 'N/A') + "\n*Views:* " + (result.views || 0) + "\n*Likes:* " + (result.likes || 0) + "\n*Comments:* " + (result.comments || 0) + "\n*Favorites:* " + (result.favorite || 0) + "\n┇๏ *Shares:* " + (result.shares || 0) + "    \n┇๏ *Description:* " + (result.description || "N/A") + "    \n╰━━━━━━━━━━━━──┈⊷\n> ©𝐃𝐀𝐕𝐄-𝐌𝐃";

    if (result.type === 'video') {
      await dave.sendMessage(from, {
        video: { url: result.video["no-watermark"] },
        caption: captionText
      }, { quoted: message });
    } else if (result.type === "image") {
      for (const [index, imgUrl] of (result.image || []).entries()) {
        await dave.sendMessage(from, {
          image: { url: imgUrl },
          caption: "*💜 Image:* " + (index + 1) + "\n\n" + captionText
        }, { quoted: message });
      }
    } else {
      return reply("Sorry, I couldn't process this type of TikTok content.");
    }
  } catch (error) {
    console.error("𝐃𝐀𝐕𝐄-𝐌𝐃 Error in TikTok davlo:", error);
    reply("𝐃𝐀𝐕𝐄-𝐌𝐃 An error occurred while processing your request. Please try again later.");
  }
});