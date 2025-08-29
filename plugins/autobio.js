/*let handler = m => m;

handler.all = async function (m) {
    let setting = global.db.data.settings[this.user.jid] || {};

    if (setting.autoBio) {
        let _muptime;
        if (process.send) {
            process.send('uptime');
            _muptime = await new Promise(resolve => {
                process.once('message', resolve);
                setTimeout(resolve, 1000);
            }) * 1000;
        }

        let muptime = clockString(_muptime);
        let bio = `⌚ Active for: ${muptime}\n\n🛡️ 𝐃𝐀𝐕𝐄-𝐌𝐃 🛡️`;
        await this.updateProfileStatus(bio).catch(_ => _);

        // Update last status timestamp
        setting.status = Date.now();
    }
};

export default handler;

function clockString(ms) {
    if (isNaN(ms)) return '-- Day(s) -- Hour(s) -- Minute(s)';

    let d = Math.floor(ms / 86400000);
    let h = Math.floor(ms / 3600000) % 24;
    let m = Math.floor(ms / 60000) % 60;

    return `${d} Day(s) ${h} Hour(s) ${m} Minute(s)`;
}*/

