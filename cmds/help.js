const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
let client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
  if(message.author.bot) return;
  message.reply(`Check you DM's :inbox_tray:`)
var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Fun!")
.addField(`L~calculate (equasion)`, `Solves the equasion!`)
.addField(`L~gif (gif name)`, `Searches and sends the gif!!`)
.addField(`L~ping`, `Sends the response time of Leafeon!`)
.addField(`L~npm (NPM package)`, `Sends infomation on the NPM package!`)
.addField(`L~fortnite (Username) (Platform | pc, xb1, psn)`, "Sends you the Fortnite stats for the user you gave.")
.addField(`L~overwatch (BattleTag) (Region | us, eu, kr, cn, global)`, "Sends you the pc (PC Onlysupported) Overwatch stats for the user you gave. Notice! If you use a pc BattleTag you will have to add the #number but change the # to a - eg Calvin-1337.")
.setColor("RANDOM")
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setColor("RANDOM")
.setTitle("Music!")
.addField(`L~add (Video name)`, `Adds a song to queue!`)
.addField(`L~search (Video name)`, `Adds a song to queue higher accuracy on getting right video!`)
.addField(`L~play`, `Plays the songs you added to the queue!`)
.addField(`L~skip`, `Skips a song`)
.addField(`L~pause`, `Pauses playing song!`)
.addField(`L~resume`, `Resumes the playing song!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("NSFW!")
.setColor("RANDOM")
.addField(`L~hentai`, `Sends a Hentai gif!`)
.addField(`L~4k`, `Sends a 4k NSFW Photo!`)
.addField(`L~fuck`, `Fuck Gif!`)
.addField(`L~lewd`, `Sends a lewd NSFW Photo!`)
.addField(`L~nsfw (Type) (Tag)`, `Searches for a NSFW picture of the Type of NSFW and the Tags you gave!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("MrNightmare_'s commands!")
.setColor("RANDOM")
.addField(`L~eval`, `Evaluates JavaScript Code`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Utility")
.setColor("RANDOM")
.addField(`L~weather (location)`, `Sends weather infomation on the location!`)
.addField(`L~translate (language) (word/phrase/sentence)`, `Translates the thext to the selected language!`)
.addField(`L~servers`, `All servers Leafeon is in!`)
.addField(`L~serverinfo`, `Server info about the server!`)
.addField(`L~support (Problem)`, `Gets you a support ticket that gets sent to a staff channel for the staff to sort out (Need a channel named staff_support_requests)`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Pokemon!")
.setColor("RANDOM")
.addField(`L~dex (pokemon)`, `Sends Pokedex info about the selected Pokemon!`)
.addField(`L~ability (Pokemon Ability)`, `Sends you info about the selected pokemon ability!`)
.addField(`L~type (Pokemon Type)`, `Sends you info on the given type!`)
.addField(`L~move (Pokemon Move)`, `Sends you info on the given move!`)
.addField(`L~pokemon (Pokemon Name)`, `Sends you info on the given move!`)
message.author.send(embed)

var embed = new Discord.RichEmbed()
.setAuthor(` | Commands`, `${bot.user.avatarURL}`)
.setTitle("Moderation")
.setColor("RANDOM")
.addField(`L~ban (@mention) (Reason)`, `Manage Members permission needed also an incidents channel!`)
.addField(`L~mute (@mention || User ID)`, `Mute Members permission needed!`)
.addField(`L~unmute (@mention)`, `Mute Members permission needed!`)
.addField(`	L~kick (@mention) (Reason)`, `Manage Members permission needed!`)
message.author.send(embed)
  }

module.exports.help = {
    name: "help"
}
