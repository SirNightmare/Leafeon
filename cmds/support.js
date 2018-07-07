const Discord = require('discord.js');
const prefix = ("L~");
const cooldown = new Set();
const moment = require('moment');
let client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
    if(message.author.bot) return;
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Sending tickets has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return message.channel.send(`You must give me something to report first ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    message.channel.send(`Hey, ${message.author}, we got your report! We will reply soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Tickets's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor("RANDOM");
    message.channel.send(embed2);
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("RANDOM");
        bot.channels.find('name','staff_support_requests').send(embed)
        .catch(e => logger.error(e))
}

module.exports.help = {
  name: "support"
}