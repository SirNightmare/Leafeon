const Discord = require("discord.js");
const prefix = "~"
let bot = new Discord.Client();
const snekfetch = require('snekfetch');
var math = require('mathjs');
module.exports.run = async (bot, message, args) => {
   // Lets define our array of guilds
   const guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }

module.exports.help = {
    name: "servers"
}