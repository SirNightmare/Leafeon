const Discord = require("discord.js");
const prefix = "~"
let bot = new Discord.Client();
var math = require('mathjs');
const randomPuppy = require('random-puppy');
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
    
        var subreddits = [
            'NSFW_Wallpapers',
            'SexyWallpapers',
            'HighResNSFW',
            'nsfw_hd',
            'UHDnsfw'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setAuthor(" | 4k", bot.user.avatarURL)
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
  }

module.exports.help = {
    name: "4k"
}