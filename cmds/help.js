const Discord = require("discord.js");
const prefix = "¬"
let bot = new Discord.Client();
let client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Fun!")
.addField(`¬calculate (equasion)`, `Solves the equasion!`)
.addField(`¬gif (gif name)`, `Searches and sends the gif!!`)
.addField(`¬ping`, `Sends the response time of Leafeon!`)
.addField(`¬npm (NPM package)`, `Sends infomation on the NPM package!`)
.setColor("RANDOM")
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setColor("RANDOM")
.setTitle("Music!")
.addField(`¬mhelp`, `Music commands!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("NSFW!")
.setColor("RANDOM")
.addField(`¬hentai`, `Sends a Hentai gif!`)
.addField(`¬4k`, `Sends a 4k NSFW Photo!`)
.addField(`¬lewd`, `Sends a lewd NSFW Photo!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("MrNightmare_'s commands!")
.setColor("RANDOM")
.addField(`¬eval`, `Evaluates JavaScript Code`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Utility")
.setColor("RANDOM")
.addField(`¬weather (location)`, `Sends weather infomation on the location!`)
.addField(`¬translate (language) (word/phrase/sentence)`, `Translates the thext to the selected language!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Pokemon!")
.setColor("RANDOM")
.addField(`¬dex (pokemon)`, `Sends Pokedex info about the selected Pokemon!`)
.addField(`¬ability (Pokemon Ability)`, `Sends you info about the selected pokemon ability!`)
.addField(`¬type (Pokemon Type)`, `Sends you info on the given type!`)
.addField(`¬move (Pokemon Move)`, `Sends you info on the given move!`)
message.author.send(embed)



  }

module.exports.help = {
    name: "help"
}