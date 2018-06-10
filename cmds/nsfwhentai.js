const Discord = require("discord.js");
const prefix = "~"
let bot = new Discord.Client();
let client = new Discord.Client();
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
       
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai.")
    .setImage(body.url)
    .setColor("RANDOM")

    message.channel.send(hentaiEmbed);
  }

module.exports.help = {
    name: "hentai"
}