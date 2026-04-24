// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Raghad",
    pageTitle: "Do You Love Me, Raghad? 💝",
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },
    questions: {
        first: {
            text: "Do you love me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I knew it! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "So.. you won't leave me, right? 💝",
            yesBtn: "Right",
            noBtn: "Sorry, I will"
        }
    },
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },
    celebration: {
        title: "Yay! 🎉💝",
        message: "Thank you so much <3",
        emojis: "🎁💖🤗💝💋❤️💕"
    },
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },
    music: {
        enabled: false,
        autoplay: false,
        musicUrl: "",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
