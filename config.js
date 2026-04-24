// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  // Your Valentine's name that will appear in the title
  // Example: "Jade", "Sarah", "Mike"
  valentineName: "Raghad",

  // The title that appears in the browser tab
  // You can use emojis! 💝 💖 💗 💓 💞 💕
  pageTitle: "Do You Love Me, Raghad? 💝",

  // Floating emojis that appear in the background
  // Find more emojis at: https://emojipedia.org
  floatingEmojis: {
    hearts: [
      '❤️', '💖', '💝', '💗', '💓'
    ], // Heart emojis
    bears: [
      '🧸', '🐻'
    ] // Cute bear emojis
  },

  // Questions and answers
  // Customize each question and its possible responses
  questions: {
    first: {
      text: "Do you love me?", // First interaction
      yesBtn: "Yes", // Text for "Yes" button
      noBtn: "No", // Text for "No" button
      secretAnswer: "I knew it! ❤️" // Secret hover message
    },
    second: {
      text: "How much do you love me?", // For the love meter
      startText: "This much!", // Text before the percentage
      nextBtn: "Next ❤️" // Text for the next button
    },
    third: {
            text: "So.. you won't leave me, right? 💝", // The big question!
                  yesBtn: "Right", // Text for "Yes" button
            noBtn: "Sorry, I will" // Text for "No" button
    }
  },

  // Love meter messages
  // They show up depending on how far they slide the meter
  loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝", // Shows when they go past 5000%
    high: "To infinity and beyond! 🚀💝", // Shows when they go past 1000%
    normal: "And beyond! 🥰" // Shows when they go past 100%
  },

  // Messages that appear after they say "Yes!"
  celebration: {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Now come get your gift, a big warm hug and a huge kiss!",
    emojis: "🎁💖🤗💝💋❤️💕" // These will bounce around
  },

  // Color scheme for the website
  // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
  colors: {
    backgroundStart: "#ffafbd", // Gradient start (try pastel colors for a soft look)
    backgroundEnd: "#ffc3a0", // Gradient end (should complement backgroundStart)
  }
};
