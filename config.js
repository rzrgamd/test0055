module.exports = {
  Admins: ["867264845682311170", ""], 
  DefaultPrefix: process.env.Prefix || "!",
  Token: process.env.Token || "OTE0OTI2OTEyNzA1NTMxOTc0.YaUKFg.ejIe8zhuE3pCB3NME99nuW7I-8c",
  CookieSecret: "rzr",
  "24/7": false, 
  ExpressServer: true, 
  Port: 3000, 
  SupportServer: "", 
  ClientID: process.env.Discord_ClientID || "914926912705531974", 
  ClientSecret: process.env.Discord_ClientSecret || "", 
  Scopes: ["identify", "guilds", "applications.commands"], 
  CallbackURL: "/api/callback", 
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", 
  Permissions: 2205280576, 
  Website: process.env.Website || "http://ssasasa", 

  
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
 
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", 
    ClientSecret: process.env.Spotify_ClientSecret || "", 
  },
};
