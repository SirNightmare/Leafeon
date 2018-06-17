const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
const pokemonGif = require('pokemon-gif');

module.exports.run = async (bot, message, args) => {
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setImage(pokemonGif(args[0]))
message.channel.send(embed)
  }

module.exports.help = {
    name: "pokemon"
}