const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
var math = require('mathjs');
module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    const newemb = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('```Latency: ```', new Date().getTime() - message.createdTimestamp + " ms ")
    message.channel.send({embed: newemb})
  }

module.exports.help = {
    name: "ping"
}