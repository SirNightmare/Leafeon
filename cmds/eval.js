const Discord = require("discord.js");
const prefix = "L~"
const fs = require("fs");
let bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    let botmessage = args.join(" ");
        if(message.author.id !== "360908660727087107") return;
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled)
        let question = args.slice(0).join(" ").replace((/`/g,'\`')) + (" ");
        var embed = new Discord.RichEmbed()
         .setAuthor(" | Evaluated", bot.user.avatarURL)
         .setColor("GREEN")
         .addField("Input :inbox_tray: :", `\`\`\`\`${question}\`\`\``)
         .addField("Output :outbox_tray: :", `\`\`\`\`${("x1", clean(evaled))}\`\`\``)
         message.channel.send(embed)
    } catch(err) {
        message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
        if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
      }
module.exports.help = {
    name: "eval"
}