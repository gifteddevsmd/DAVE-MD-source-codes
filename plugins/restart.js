const { davlo } = require('../davlo');
const { sleep } = require('../lib/functions');

davlo({
    pattern: "restart",
    desc: "Restart the bot KHAN-AI",
    category: "owner",
    filename: __filename
},
async (dave, mek, m, {
    from, quoted, body, isCmd, davlo, args, q, isGroup, senderNumber, reply
}) => {
    try {
        // Get the bot owner's number dynamically from dave.user.id
        const botOwner = dave.user.id.split(":")[0]; // Extract the bot owner's number
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this davlo.");
        }

        const { exec } = require("child_process");
        reply("Restarting...");
        await sleep(1500);
        exec("pm2 restart all");
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});