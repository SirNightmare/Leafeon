const Discord = require("discord.js");
const prefix = "L~"
let bot = new Discord.Client();
const gifs = [
    "https://78.media.tumblr.com/c00ff8a0133b7fde4eff040926bf34fe/tumblr_n2w17efsGS1shqtxvo1_500.gif",
    "https://www.yourtango.com/sites/default/files/image_list/fifty%20shades%20of%20grey.gif",
    "https://78.media.tumblr.com/d3ea8f59b4e21162c28cd5923489a67f/tumblr_mo3ecoSv841sqsp13o1_500.gif",
    "http://www.apparel-bc.org/img/erotic-sex-gifs-3.gif",
    "https://steemitimages.com/0x0/https://images.sex.com/images/pinporn/2017/09/19/620/18383544.gif",
    "https://78.media.tumblr.com/d6dca3e5bc302ef7daa31c3c1d2e3fb7/tumblr_mvj55jjYuJ1shqtxvo1_r1_500.gif",
    "https://78.media.tumblr.com/04165409d014d70566516f8819c33f47/tumblr_mtsk5o0ay41sjt0kio1_500.gif",
    "http://tse4.mm.bing.net/th?id=OGC.77a1895a2e4543ea3ff1c57a02748214&pid=1.7&rurl=https://i0.wp.com/porngifxx.com/wp-content/uploads/2017/06/sex-gifs.gif?resize=500%2C260&ehk=6kr5APWCUhAhliEwLvjBAw",
    "https://78.media.tumblr.com/tumblr_mbmuzc9o2l1rf44n9o1_500.gif",
    "http://tse2.mm.bing.net/th?id=OGC.537eec67c00812e7a0807e90f07d13f0&pid=1.7&rurl=http://teen-sex-photos.eu/wp-content/uploads/2014/03/tumblr_muqgaqhjDp1qg7xwvo1_500.gif&ehk=OZ2UzFxmm7yrBs18CEcshg",
    "https://media1.tenor.com/images/39e36e6eb452cc75fd93d277001a1f9a/tenor.gif?itemid=4624533"
    
]
let random = gifs[Math.floor(Math.random() * gifs.length)];
module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
    if(message.content.bot) return;
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`| ${message.author.username} fucked ${bot.user.username}`, bot.user.avatarURL)
    .setImage(random)
    message.channel.send(embed)
  }

module.exports.help = {
    name: "fuck"
}