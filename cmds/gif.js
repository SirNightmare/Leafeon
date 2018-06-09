const Discord = require("discord.js");
const prefix = "¬"
let bot = new Discord.Client();
var math = require('mathjs');
const gifSearch = require("gif-search");
module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
  
      if (!args[0]) return message.channel.send("`"+PREFIX+"gif <gname>`");
  
      gifSearch.random(args[0]).then(
          gifUrl => {
  
          let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
          var embed = new Discord.RichEmbed()
              .setColor(`#${randomcolor}`)
              .setImage(gifUrl)
          message.author.send(embed);
      });
  
      message.channel.send(`<@${message.author.id}> **sent you a DM!** :postbox:`);
  
  }

module.exports.help = {
    name: "gif"
}