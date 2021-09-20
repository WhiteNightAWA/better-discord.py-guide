const { config } = require("vuepress-theme-hope");

module.exports = config({

// ======================================== HEAD ========================================
    title: "Better Discord.py Guide",
    description: "Better Discord.py Guide",
    base: "/better-discord.py-guide/",
    editLink: true,
    repo: "https://github.com/WhiteNightAWA/better-discord.py-guide",
    editLinkText: "Have a better idea or something to add?",
    head: [
        ["link", { rel: "shortcut icon", href: "/assets/images/discord_py_logo.ico"}],
    ],
    mdEnhance: {
        enableAll: true,
    },
// ======================================== THEME ========================================
    themeConfig: {
        darkmode: "auto-switch",
        themeColor: {
            blue: "#2196f3",
            red: "#f26d6d",
            orange: "#fb9b5f",
            yellow: "#ffe500",
        },
        fullscreen: false,
        search: true,
        searchMaxSuggestions: 10,
// ======================================== NAVBAR ========================================
        nav: [
            { text: "HOME", link: "/", icon: "home" },
            { text: "GUIDE", link: "/guide/", icon: "creative" },
            { text: "DOCS", link: "https://discordpy.readthedocs.io/en/stable/index.html", icon: "file" },
            { text: "GitHub", link: "https://github.com/WhiteNightAWA/better-discord.py-guide", icon: "github" }
        ],
// ======================================== SIDEBAR ========================================
        sidebar: "auto",
    },
});
