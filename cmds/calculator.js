const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
var math = require('mathjs');
module.exports.run = async (bot, message, args) => {
    let input = args.join(" ");
    if (!input) {
        message.reply('Please provide a Math equasion for the calculator to solve!');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Invalid math equation:** ${err}`);
    }

    const embed = new Discord.RichEmbed()
        .setThumbnail("https://i.imgur.com/4kXujAW.png")
        .setColor('RANDOM')
        .addField("**Question:**", question, true)
        .addField("**Answer:**", answer)
        .setFooter(`Image made my MatthewJ217#3287`)

    message.channel.send({
        embed
    })
  }

module.exports.help = {
    name: "calculate"
}