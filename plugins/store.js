const { davlo } = require("../davlo");

// Helper function for animated messages
async function sendAnimatedMessage(m, sock, { 
  initialText, 
  frames, 
  frameDelay = 1000, 
  reactEmoji = '✨'
}) {
  try {
    // Add reaction to show davlo was received
    if (reactEmoji) await m.react(reactEmoji);

    // Send initial message
    const sentMsg = await sock.sendMessage(m.from, { text: initialText });
    if (!sentMsg?.key) {
      return m.reply("❌ Failed to send initial message");
    }

    // Send each frame with delay
    for (const frame of frames) {
      await new Promise(resolve => setTimeout(resolve, frameDelay));
      await sock.sendMessage(m.from, {
        text: frame,
        edit: sentMsg.key
      }).catch(e => console.error("Frame error:", e.message));
    }

  } catch (error) {
    console.error("Animation error:", error);
    m.reply(`❌ Error: ${error.message}`);
  }
}

// Hand Animation Command
davlo({
  pattern: "hand",
  desc: "Hand animation (NSFW)",
  category: "fun",
  react: '✊'
}, async (m, sock) => {
  const frames = [
    '8✊️===D', "8=✊️==D", "8==✊️=D", "8===✊️D", 
    "8==✊️=D", "8=✊️==D", "8✊️===D", "8=✊️==D", 
    "8==✊️=D", '8===✊️D', "8==✊️=D", "8=✊️==D", 
    '8✊️===D', "8=✊️==D", "8==✊️=D", "8===✊️D", 
    "8==✊️=D", '8=✊️==D', "8✊️===D", '8=✊️==D', 
    "8==✊️=D", "8===✊️D 💦", "8==✊️=D💦 💦", "8=✊️==D 💦💦 💦"
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "✊🏻 STARTED... 💦",
    frames,
    frameDelay: 800,
    reactEmoji: '✊'
  });
});

// Happy Animation Command
davlo({
  pattern: "hpy",
  desc: "Happy faces animation",
  category: "fun",
  react: '😁'
}, async (m, sock) => {
  const frames = [
    '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', 
    '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', 
    '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '😂',
    frames,
    frameDelay: 300
  });
});

// Heart Animation Command
davlo({
  pattern: "hrt",
  desc: "Heart animation",
  category: "fun",
  react: '🫀'
}, async (m, sock) => {
  const frames = [
    '💖', '💗', '💕', '❤️', '💛', '💚', '🫀', '💙', 
    '💜', '🖤', '♥️', '🤍', '🤎', '💗', '💞', '💓', 
    '💘', '💝', '♥️', '💟', '🫀', '❤️'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '❤️',
    frames,
    frameDelay: 250
  });
});

// Anger Animation Command
davlo({
  pattern: "anger",
  desc: "Angry faces animation",
  category: "fun",
  react: '🤡'
}, async (m, sock) => {
  const frames = [
    '😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🤡',
    frames,
    frameDelay: 800
  });
});

// Sad Animation Command
davlo({
  pattern: "sad",
  desc: "Sad faces animation",
  category: "fun",
  react: '😫'
}, async (m, sock) => {
  const frames = [
    '🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', 
    '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '😭',
    frames,
    frameDelay: 800
  });
});

// Shy Animation Command
davlo({
  pattern: "shy",
  desc: "Shy faces animation",
  category: "fun",
  react: '😳'
}, async (m, sock) => {
  const frames = [
    '😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "> dev",
    frames,
    frameDelay: 800
  });
});

// Moon Animation Command
davlo({
  pattern: "mon",
  desc: "Moon phases animation",
  category: "fun",
  react: '🌙'
}, async (m, sock) => {
  const frames = [
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', "🌚🌝"
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🌙',
    frames,
    frameDelay: 800
  });
});

// Confused Animation Command
davlo({
  pattern: "confused",
  desc: "Confused faces animation",
  category: "fun",
  react: '🙀'
}, async (m, sock) => {
  const frames = [
    '😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', 
    "🤷‍♂️", '🤷‍♀️'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🙀',
    frames,
    frameDelay: 800
  });
});

// Kiss Animation Command
davlo({
  pattern: "kiss",
  desc: "Kissy faces animation",
  category: "fun",
  react: '♥️'
}, async (m, sock) => {
  const frames = [
    '🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', 
    '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '♥️',
    frames,
    frameDelay: 800
  });
});

// "Nikal" Animation Command (ASCII Art)
davlo({
  pattern: "nikal",
  desc: "Funny ASCII art animation",
  category: "fun",
  react: '🗿'
}, async (m, sock) => {
  const frames = [
    `⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
 ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷
⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇
⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇
 ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇
  ⠙⢿⣯⠄⠀⠀⠀⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼
⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀
⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`,
    // Other ASCII frames...
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "DAVE-MD🗿",
    frames,
    frameDelay: 1500
  });
});