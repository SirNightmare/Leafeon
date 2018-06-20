const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    message.delete();
        if(message.content.bot) return;
    let apply = args.join(" ");
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(` | Apply by ${message.author.username}#${message.author.discriminator}`, bot.user.avatarURL)
    .addField("Reason", apply)
    .setFooter(`Staff please reply with L~accept (${message.author.id}) or L~decline (${message.author.id}).`)
    message.channel.send(embed)
}
module.exports.help = {
    name: "apply"
}