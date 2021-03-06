const Discord = require("discord.js");
const settings = require("./settings.json");
const fs = require("fs");
const Music = require('discord.js-musicbot-addon');
let bot = new Discord.Client();
var prefix = 'L~';
const active = new Map();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL, bot);

dbl.on("posted", () => {
  console.log(`Posted ${bot.guilds.size} servers to the DBL api!`)
});


//class Bot extends Discord.Client {
  //constructor(options) {
  //  super(options);
  //  this.music = require('discord.js-musicbot-addon');
 //   this.config = require('./settings.json');
 // }
//}

/*const client = new Bot();
//Music.start(client, {
  //youtubeKey: "AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc",
   prefix: "L~", 
    helpCmd: "mhelp",
    global: false, 
    maxQueueSize: 50,
    playCmd: 'play',  
    playAlts: ["music", 'moosic'],
    volumeCmd: 'vol', 
    thumbnailType: 'high',
    leaveCmd: 'leave',
    anyoneCanSkip: true, 
    disableLoop: false,
    searchCmd: 'search',
    requesterName: true,
    inlineEmbeds: true,     
    queueCmd: 'queue',
    queueAlts: ['queue', 'queueue'],
    pauseCmd: 'pause',
    resumeCmd: 'resume',
    skipCmd: 'skip',
    skipAlts: ["skip", "skipp"],
    loopCmd: 'loop',
    enableQueueStat: true,
//});
*/

var google = `<@409751964662890508>`


bot.commands =  new Discord.Collection();





fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!")
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async () => {
    console.log("Bot Ready!");
    console.log("Settings:")
    console.log(`Name: ${bot.user.username}#${bot.user.discriminator}`);
    console.log("Token: " + settings.token);
    console.log("Prefix: " + settings.prefix);
    console.log(bot.commands);
    bot.user.setPresence({ game: { name: `My Sister Sylveon | L~help for help`, url: 'https://twitch.tv/monstercat', type: 1 } });
});

//bot.on("guildMemberAdd",  member => {
 // const wc = [
   // `Welcome ${member.user.username} to ${member.guild.name}. :tada:`,
  //  `Roses are Red Violets are Blue ${member.user.username} has come to play with you. :basketball_player:`,
    //`${member.user.username} has joined. Where all crazy here. :eyes:`,
   // `Is it a bird? Is it a Plane? NO! It\'s ${member.user.username}. :airplane:`,
  //  `Alright! ${member.user.username} has joined the party! :tada:`,
   // `${member.user.username} joined. We don\'t bite... Or do we. :eyes:`
 // ]  
 //var result = Math.floor((Math.random() * wc.length) + 0);
  //let cha = member.guild.channels.find(c => c.name == "welcome");
////let embed = new Discord.RichEmbed()
//.setAuthor(" | Welcome", bot.user.avatarURL)
//.setTitle(wc[result])
//.setColor("RANDOM")
////.setThumbnail(member.user.displayAvatarURL)
//cha.send(embed)
//});

bot.on("message", async message => {
  if(message.author.bot) return;
  let messsageArray = message.content.split(" ");
  let command = messsageArray[0];
  let args = messsageArray.slice(1);


  if(!command.startsWith(settings.prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);
      });
bot.login(process.env.BOT_TOKEN);
