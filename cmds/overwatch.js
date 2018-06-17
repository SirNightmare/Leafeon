const Discord = require("discord.js");
const settings = require("../settings.json");
const prefix = "L~"
const fs = require("fs");
const overwatch = require('overwatch-api');
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if(message.content.bot) return;
    const tag = args[0];
    const platform = 'pc';
    const region = args[1];
    if(!tag) return message.reply("Sorry! You must provide a username / battletag.");
    if(!region) return message.reply("Sorry! You must provide a region. us, eu, kr, cn, global.")
    overwatch.getProfile(platform, region, tag, (json) => {
        let lvl = json.level;
        let games = json.games;
        let sr = json.competitive;
        let portrait = json.portrait;
        let username = json.username;
        let quickplay = games.quickplay;
        let competitive = games.competitive;
        let rank = json.competitive;
        let comprank = sr.rank;
        let playtime = json.playtime;
        let comptime = playtime['competitive']
        let quicktime = playtime['quickplay']
        let quickwins = quickplay['won']
        let compwins = competitive['won']
        let complost = competitive['lost']
        let compdraw = competitive['draw']
        let compplayed = competitive['played']
        let rankimg = rank['rank_img']
        let embed = new Discord.RichEmbed()
        .setThumbnail(rankimg)
        .setImage(portrait)
        .setColor("RANDOM")
        .setTitle(`Overwatch stats for ${username}`)
        .addField('Level', lvl, true)
        .addField('Competitive Playtime', comptime, true)
        .addField('QuickPlay Playtime', quicktime, true)
        .addField('Competitive Wins', compwins, true)
        .addField('QuickPlay Wins', quickwins, true)
        .addField('Competitive Losts', complost, true)
        .addField('Competitive Draws', compdraw, true)
        .addField('Competitive Played', compplayed, true)
        .addField('Competitive Rank', `${comprank} SR`, true)
        message.channel.send(embed)
      });
      }
module.exports.help = {
    name: "overwatch"
}