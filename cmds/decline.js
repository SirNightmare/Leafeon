const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    message.delete();
        if(message.author.bot) return;
    let apply = args.join(" ");
    message.channel.send(`Application by <@${apply}> has been declined.`)
}
module.exports.help = {
    name: "decline"
}