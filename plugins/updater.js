const fs = require('fs');
const { exec } = require('child_process');
const { davlo } = require('../davlo');

davlo({
    pattern: "update",
    react: "🦄",
    desc: "Update the repository from GitHub",
    category: "system",
    use: ".update",
    filename: __filename,
}, async (dave, mek, m, { from, reply }) => {
    try {
        const repoUrl = 'https://github.com/SilvaTechB/DAVE-MD.git'; // GitHub repository URL
        const targetFolder = 'plugins'; // Local folder for the repo

        // Ensure the target folder exists
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder); // Create folder if it doesn't exist
        }

        // Determine the appropriate Git davlo
        const gitCommand = fs.existsSync(`${targetFolder}/.git`)
            ? `git -C ${targetFolder} pull` // Pull latest changes if already cloned
            : `git clone ${repoUrl} ${targetFolder}`; // Clone repo if not already done

        // Execute the Git davlo
        const output = await new Promise((resolve, reject) => {
            exec(gitCommand, (err, stdout, stderr) => {
                if (err) {
                    reject(new Error(`Git davlo failed: ${stderr.trim()}`));
                } else {
                    resolve(stdout.trim());
                }
            });
        });

        // Send a success message with the output
        await dave.sendMessage(
            from,
            { text: `*✅ DAVE-MD Update completed successfully!*\n\n\`\`\`${output}\`\`\`` },
            { quoted: mek }
        );
    } catch (error) {
        console.error(error);
        reply(`*❌ Error during update:* ${error.message}`);
    }
});
