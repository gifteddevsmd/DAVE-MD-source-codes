const config = require('../config')
const { davlo, commands } = require('../davlo');
const {runtime} = require('../lib/functions')

// --- CONFIGURATION ---
const MENU_IMAGES = [
    'https://files.catbox.moe/og4tsk.jpg',
    'https://files.catbox.moe/95n1x6.jpg',
    'https://files.catbox.moe/0w7hqx.jpg',
    'https://files.catbox.moe/3hrxbh.jpg',
    'https://files.catbox.moe/etqc8k.jpg'
];

const quotedContact = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: " Menu-Frame | Verified ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:SCIFI\nORG:Shadow-Xtech BOT;\nTEL;type=CELL;type=VOICE;waid=254700000001:+254 700 000001\nEND:VCARD"
    }
  }
};

const LOADING_MESSAGES = [
    "Initializing connection...",
    "Establishing Bot commands...",
    "Verifying credentials...",
    "Connecting to WhatsApp API...",
    "Preparing menu...",
    "Redirecting to commands...",
    "Connecting to servers...",
    "Fetching command list...",
    "Authenticating user...",
    "Compiling menu...",
    "Displaying menu now...",
    "Waking up the bot...",
    "Brewing some coffee...",
    "Checking for updates...",
    "Loading all modules...",
    "Unleashing the menu...",
    "Accessing mainframe...",
    "Decrypting command protocols...",
    "Calibrating response time...",
    "Generating menu interface...",
    "Welcome, user..."
];

const MENU_AUDIO_URLS = [
    'https://files.catbox.moe/ddmjyy.mp3',
    'https://files.catbox.moe/mexjrq.mp3',
    'https://files.catbox.moe/4yqp5m.mp3',
    'https://files.catbox.moe/k41qij.mp3'
];

// --- DAVLO COMMAND ---
davlo({
    pattern: "menu",
    alias: ["allmenu", "fullmenu"],
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, async (dave, mek, m, { from, reply }) => {
    try {
        await reply("📜 Fetching commands... Please wait!");

        const selectedImageUrl = MENU_IMAGES[Math.floor(Math.random() * MENU_IMAGES.length)];
        const randomLoadingMessage = LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
        const selectedAudioUrl = MENU_AUDIO_URLS[Math.floor(Math.random() * MENU_AUDIO_URLS.length)];

        const menuCaption = `╭──⭘💈 *${config.BOT_NAME}* 💈─·⭘
💚 Owner : *${config.OWNER_NAME}*
💚 Prefix : *[${config.PREFIX}]*
💚 Platform : *Heroku*
💚 Version : ${config.version}
💚 Runtime : *_${runtime(process.uptime())}_*
💚 Mode : *${config.MODE}*
💚 Dev : *Black-Tappy*
╰────────────────⊷
> ${randomLoadingMessage}

╭──·📥 *DOWNLOAD MENU* 📥
💚 facebook
💚 mediafire
💚 tiktok
💚 tiktokdl
💚 tt
💚 ttdl
💚 twitter
💚 insta
💚 ig
💚 instagram 
💚 apk
💚 img
💚 imgscan
💚 imagine
💚 imagine 2
💚 imagine 3
💚 flux
💚 flux-ai
💚 ad
💚 blur
💚 grey
💚 invert
💚 jail
💚 imgjoke
💚 nokia
💚 rmbg
💚 wanted
💚 ringtone 
💚 pins
💚 pindl
💚 pinterestdl
💚 spotify
💚 play
💚 song
💚 song 2
💚 video
💚 video 2
💚 mp4
💚 ytmp3
💚 ytmp4
💚 movie
💚 gdrive
💚 tourl
💚 tiny
💚 shazam
💚 news
💚 xstalk
💚 ytpost
💚 yts
💚 ytstalk
╰────────────────⊷

╭──·👥 *GROUP MENU* 👥
💚 antilink 
💚 adminevents
💚 admin
💚 antibadword
💚 antilink-kick
💚 deletelink
💚 online 
💚 couplepp
💚 requestlist 
💚 acceptall
💚 leave
💚 out
💚 poll
💚 endgc
💚 grouplink
💚 kickall
💚 kickall2
💚 kickall3
💚 add
💚 remove
💚 kick
💚 promote
💚 demote
💚 dismiss
💚 revoke
💚 setgoodbye
💚 setwelcome
💚 delete
💚 getpic
💚 ginfo
💚 disappear on
💚 disappear off
💚 disappear 7D,24H
💚 allreq
💚 updategname
💚 updategdesc
💚 joinrequests
💚 newgc
💚 nikal
💚 mute
💚 unmute
💚 lockgc
💚 unlockgc
💚 invite
💚 tagall
💚 tagadmins
╰────────────────⊷

╭──·🎭 *REACTION MENU* 🎭
💚 bully
💚 cuddle
💚 cry
💚 hug
💚 awoo
💚 kiss
💚 lick
💚 pat
💚 smug
💚 bonk
💚 yeet
💚 blush
💚 smile
💚 wave
💚 highfive
💚 handhold
💚 nom
💚 bite
💚 glomp
💚 slap
💚 kill
💚 happy
💚 wink
💚 poke
💚 dance
💚 cringe
╰────────────────⊷

╭──·🎨 *LOGO MAKER* 🎨
💚 neonlight
💚 blackpink
💚 dragonball
💚 deadpool
💚 cat
💚 thor
💚 angelwings
💚 3dcomic
💚 america
💚 naruto
💚 sadgirl
💚 clouds
💚 futuristic
💚 3dpaper
💚 eraser
💚 sunset
💚 leaf
💚 galaxy
💚 sans
💚 boom
💚 hacker
💚 devilwings
💚 nigeria
💚 bulb
💚 zodiac
💚 luxury
💚 paint
💚 tatoo
💚 valorant
💚 bear
💚 typography
💚 birthday
╰────────────────⊷

╭──·👑 *OWNER MENU* 👑
💚 owner
💚 menu
💚 allmenu
💚 fullmenu
💚 listcmd
💚 repo
💚 block
💚 unblock
💚 fullpp
💚 setpp
💚 restart
💚 shutdown
💚 updatecmd
💚 setprefix 
💚 mode
💚 alwaysonline 
💚 autotyping 
💚 autorecording 
💚 autostatusview 
💚 autostatusreact 
💚 autostatusreply
💚 autoreact
💚 autoread
💚 autovoice
💚 autoreply
💚 autosticker 
💚 antilink 
💚 antidelete 
💚 delete
💚 clearchats
💚 alive
💚 ping
💚 bible
╰────────────────⊷

╭──·🎉 *FUN MENU* 🎉
💚 happy
💚 angry
💚 hack
💚 ship
💚 boy
💚 girl
💚 marige
💚 heart
💚 sad
💚 anger
💚 shy
💚 emoji
💚 moon
💚 confused 
💚 hot
💚 compatibility 
💚 compliment 
💚 lovetest
💚 romance 
💚 motivate
💚 roast
💚 8ball
💚 aura
╰────────────────⊷

╭──·🔄 *CONVERT MENU* 🔄
💚 sticker2image 
💚 stickertoimage
💚 emojimix
💚 emix
💚 fancy
💚 take
💚 tomp3
💚 sss
💚 tts
💚 trt
💚 convert
💚 dbinary
💚 toptt
💚 tourl
💚 repeat
💚 topdf
💚 profile 
💚 support
╰────────────────⊷

╭──·🤖 *AI MENU* 🤖
💚 ai
💚 aivoice
💚 bot
💚 gpt
💚 seek-ai
💚 deep
💚 dj
💚 blacktappy
💚 define
💚 bing
💚 imagine
💚 imagine2
╰────────────────⊷

╭──·⚡ *MAIN MENU* ⚡
💚 ping
💚 version
💚 countryinfo
💚 alive
💚 runtime
💚 uptime
💚 repo
💚 owner
💚 menu
💚 listcmd
💚 convert
💚 setsudo
💚 dels
💚 clear
💚 help
💚 info
💚 donate
💚 bugreport
💚 feedback
╰────────────────⊷

> ${config.DESCRIPTION}`;

      // Send menu image
await dave.sendMessage(from, {
    image: { url: selectedImageUrl },
    caption: menuCaption,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400480173280@newsletter',
            newsletterName: config.BOT_NAME,
            serverMessageId: 143
        }
    }
}, { quoted: quotedContact });

// Send menu audio
await dave.sendMessage(from, {
    audio: { url: selectedAudioUrl },
    mimetype: 'audio/mp4',
    ptt: true
}, { quoted: quotedContact });

} catch (e) {
    console.error("Menu Command Error:", e);
    reply(`❌ An error occurred while displaying the menu. Please try again later.`);
}