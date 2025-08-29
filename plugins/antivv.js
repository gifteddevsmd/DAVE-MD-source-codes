const { davlo } = require("../davlo");

davlo({
    pattern: "vv2",
    alias: ["wah", "ohh", "oho", "🙂", "nice", "ok"],
    desc: "Owner Only – Retrieve view-once media from a quoted message",
    category: "owner",
    react: "📥",
    filename: __filename
},
async (dave, mek, m, { isOwner }) => {
    try {
        if (!isOwner) return; // silent fail for non-owner

        if (!m.quoted || !m.quoted.download) {
            return await dave.sendMessage(m.from, {
                text: "🍁 *Reply to a view-once media message!*"
            }, { quoted: mek });
        }

        const buffer = await m.quoted.download();
        const mtype = m.quoted.mtype;
        const caption = m.quoted.text || '';
        const options = { quoted: mek };

        let content = {};
        switch (mtype) {
            case "imageMessage":
                content = {
                    image: buffer,
                    caption,
                    mimetype: m.quoted.mimetype || "image/jpeg"
                };
                break;
            case "videoMessage":
                content = {
                    video: buffer,
                    caption,
                    mimetype: m.quoted.mimetype || "video/mp4"
                };
                break;
            case "audioMessage":
                content = {
                    audio: buffer,
                    mimetype: "audio/mp4",
                    ptt: !!m.quoted.ptt
                };
                break;
            default:
                return await dave.sendMessage(m.from, {
                    text: "❌ *Only image, video, or audio messages are supported.*"
                }, options);
        }

        // Forward content back to the user who issued the command
        await dave.sendMessage(m.sender, content, options);

    } catch (err) {
        console.error("❌ VV2 Error:", err);
        await dave.sendMessage(m.from, {
            text: "❌ *An error occurred while retrieving the message:*\n" + err.message
        }, { quoted: mek });
    }
});