const config = require('../config')
const { davlo, commands } = require('../davlo')

davlo({
    pattern: "vv",
    alias: ["viewonce", "vv2"],
    desc: "Owner Only – Retrieve quoted view-once media to DM",
    category: "owner",
    react: "📥",
    filename: __filename
},
async (dave, mek, m, { isOwner, q }) => {
    try {
        if (!isOwner) return;

        if (!m.quoted || !m.quoted.download) return;

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
                return;
        }

        await dave.sendMessage(m.sender, content, options);
    } catch (error) {
        console.error("❌ VV Error:", error);
    }
});