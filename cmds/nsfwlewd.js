const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
var prefix = "L~"

module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
  if (!message.channel.nsfw) return message.reply(`<@${message.author.id}> 🔞 Cannot display NSFW content in a SFW channel.`);
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Lewd")
    .setImage(body.neko)

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "lewd"
}