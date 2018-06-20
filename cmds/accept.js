const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    message.delete();
        if(message.content.bot) return;
    let apply = args.join(" ");
    message.channel.send(`Application by <@${apply}> has been accepted by <@${message.author.id}>.`)
}
module.exports.help = {
    name: "accept"
}