const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://lolfg.glitch.me/`);
}, 280000);


const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'members')) {
        var edited = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('❯ Members', `» Online \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | idle \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | Bot \`${message.guild.members.filter(r => r.user.bot).size}\`\n» DND \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | Offline \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | All \`${message.guild.memberCount}\``, true);
        message.channel.send(edited);
    }
});

client.on('message', msg => {
  if (msg.content === (prefix + "settings")) {
      const embed = new Discord.RichEmbed()
          .setAuthor('❆ Settings:', 'https://labs-public-dl.xda-cdn.com/images/af6aef8c-4d0a-41f4-8afb-5b8572aa3697.png')
          .addField(`❆ Values: `, `ㄨ  \`limitsban\`, \`limitskick\`, \`limitsroleD\`, \`limitsroleC\`, \`limitschannelD\`, \`limitstime\`, \`setMedia\`, \`infoMedia\`, \`toggleMedia\`, \`setwel\`, \`setrole\`, \`AntiFake\`, \`SetFake\`, \`SetSug\`, \`AntiBots\``)
          .addField(`❆ Commands: `, `ㄨ !settings [limitsban/limitschannelD/...] [vlaue]\nㄨ !settings [AntiFake/AntiFake/...] [On/Off]`)
      msg.channel.send(embed)

  };
});


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
      message.author.send(`**
❆ Informetion Commands | الأوامر التعريفية :


ㄨ \`!settings\` : رؤية ما يمكن إعدادة في البوت
ㄨ \`!ping\` : رؤية سرعة البوت
ㄨ \`!invite\` : لدعوة البوت**

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

`)


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`
** ❆ Public Commands | الأوامر العامة :


ㄨ \`!top\` : رؤية متصدرين نقاط التفاعل
ㄨ \`!colors\` : رؤية علبة الألوان
ㄨ \`!color [Number]\` : لإختيار لونك
ㄨ \`!text create\` : لإنشاء ملف 
ㄨ \`!text delete\` : لمسح ملف
ㄨ \`!user\` : معلومات عن الشخص 
ㄨ \`!npm\` : للحصول على بكج من (Npmjs.)
ㄨ \`!wiki\` : للبحث في موقع ويكيبيديا
ㄨ \`!urban\` : للبحث في موسوعه (urban)
ㄨ \`!avt\` : رؤية صورتك الشخصية + صورة شخص أخر
ㄨ \`!id\` : معلومات حسابك
ㄨ \`!members\` : لرؤية عدد الأعضاء مع فلتر خاص لكل شخص 
ㄨ \`!short\` : لاِختصار الروابط
ㄨ \`!docs\` : للعثور على أشياء من : (Discord.js Docs.)
ㄨ \`!server\` : معلومات عن السيرفر
ㄨ \`!roll\` : القرعة
ㄨ \`!donate\` : للتبرع للبوت
ㄨ \`!steam\` : معرفة تفاصيل عن لعبة في متجر ستيم
ㄨ \`!clock\` : لرؤية الساعة 
ㄨ \`!hypixel\` : لرؤية أحصائيآت في هآيبكسل **
         
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

`)
client.on("message", msg =>{    
if(msg.content.startsWith(`${prefix}topservers`)){
      const devs = ['id'];
      if (!devs.includes(msg.author.id)) return msg.channel.send(`** | You Can't Use this Command.**`);
     
  let noTop = msg.content.split(" ")[1];
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  if(!noTop) noTop = 10; //pixel Zine
  if(isNaN(noTop)) noTop = 10;
  if(noTop <= 0) noTop = 10;
  if(noTop > top.length) noTop = top.length;
  let serveremmbed = new Discord.RichEmbed();
  for(let i = 0; i < noTop; i++){
  serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
  }
  serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`);
  serveremmbed.setThumbnail(msg.author.displayAvatarURL);
  serveremmbed.setTimestamp();
  serveremmbed.setColor('#42A9C9')
  serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
  msg.channel.send(serveremmbed);
}});//zine pixel


  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`
** ❆ Staff Commands | الأوامر الإدارية :

ㄨ \`!reset voice\` : لتصفير النقاط الصوتية
ㄨ \`!reset text\` : لتصفير النقاط الكتابية
ㄨ \`!points\` : للنقاط | \`\`[مسابقآت|فعاليات]\`\`
ㄨ \`!delete\` : مسح عدد ما من الرسائل  
ㄨ \`!ban\` : إعطاء حظر
ㄨ \`!kick\` : إعطاء طرد
ㄨ \`!mmove\` : لنقل أحد من روم لأخر
ㄨ \`!moveall\` : لسحب جميع الأعضاء لرومك
ㄨ \`!vkick\` : لطرد عضو من روم محدد  **

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

                          `);


  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`
**❆ Profile & Games Commands | أوامر البروفايل والألعاب :
                                                  
                                      
ㄨ \`!credit\` : رؤية رصيدك
ㄨ \`!profile\` : رؤية بروفايلك
ㄨ \`!background [1-27]\` : لرؤية الخلفيات
ㄨ \`!rep\` : لإعطاء ريب 
ㄨ \`!daily\` : اخذ مكافئتك اليومية
ㄨ \`!fa\` : لعبة اسرع كتابة
ㄨ \`!le\` : لعبة فكك
ㄨ \`!ma\` : لعبة رياضيات**

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

                                      `);


  }
});


   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("**This Command is Just For Servers!**")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?bot_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
		   message.author.send({embed})
	   }
   });

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.channel.send(`** :information_source: | Help Menu in DM , رسالة المساعدة في الخاص .**`);


  }
});
var cooldown = new Set();
var points = {};
client.on('message', async message => {
	if(message.channel.type !== 'text') return;
	
	
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
	  const embed  = new RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:pencil2: ** !Points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:pencil2: ** !Points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:pencil2: ** !Points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:pencil2: ** !Points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:pencil2: ** !Points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
  const error  = new RichEmbed()
.setDescription(`
**:x: يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:pencil2: ** !Points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:pencil2: ** !Points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:pencil2: ** !Points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:pencil2: ** !Points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:pencil2: ** !Points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
if(command == prefix + 'points') {
	 
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!args[1]) {
			if(!points) return message.channel.send(embed);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(embed);
			var x = 1;
			let pointsTop = new RichEmbed()
			.setAuthor('Points:')
			.setColor('#FBFBFB')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:pencil2: ** <@${m.id}> \`${m.points}\``).join('\n'))
			.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
			message.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			let pointsReset = new RichEmbed()
			.setDescription('**reseted all Points. :white_check_mark:**')
			.setFooter('Requested by '+message.author.username, message.author.avatarURL)
			if(!message.member.hasPermission('MANAGE_GUILD')) return (message, "**You dont have Manage Server permission.**");
			if(!points) return message.channel.send(pointsReset);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(pointsReset);
			points = {};
			message.channel.send(pointsReset);
		}else if(userM) {
			if(!message.member.hasPermission('MANAGE_GUILD')) return (message, "**You dont have Manage Server permission.**");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return (message, `${userM.user.username} Not have any points.`);
				var userPoints = new RichEmbed()
				.setColor('#d3c325')
				.setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
				message.channel.send({
					embed: userPoints
				});
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				points[userM.user.id].points = 0;
				message.channel.send(`Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				let add = new RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(add);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
					let rem = new RichEmbed()
				.setDescription(`**:pencil: : ** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(rem);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if(points[userM.user.id].points == args[2]) return (message, `${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
					let set = new RichEmbed()
				.setDescription(`**:pencil:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(set);
			}
			}
			}
});



const {
    readFile,
    readFileSync
} = require('fs-nextra');

const cnvs = require("canvas");
const {
    
} = require('snekfetch');

let inv = JSON.parse(fs.readFileSync("./userD.json", "UTF8"))

const invs = JSON.parse(fs.readFileSync("./invites.json", "UTF8"))

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    wait(1000);

    client.guilds.forEach(g => {
        if (g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
            g.fetchInvites().then(guildInvites => {
                invs[g.id] = guildInvites;
            });
    });
});

client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invs[member.guild.id];
        invs[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        inv[member.user.id + member.guild.id].inviter = invite.inviter.id;
        fs.writeFile("./invites.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
    });
});

client.on('message', async message => {
    if (message.content.startsWith(prefix + "id")) {
        let mem = message.mentions.members.first() || message.member;
        let auth = message.mentions.users.first() || message.author;
        const imageUrlRegex = /\?size=2048$/g;
        const name = mem.displayName.length > 10 ? mem.displayName.substring(0, 11) + "..." : mem.displayName;

        const {
            body: ava
        } = await get(auth.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

        const img = await readFile("./id_1.png");
        const millis = new Date().getTime() - auth.createdAt.getTime();
        const now = new Date();
        const createdAt = millis / 1000 / 60 / 60 / 24;
        const millisj = new Date().getTime() - mem.joinedAt.getTime();
        const nowj = new Date();
        const joinedAt = millisj / 1000 / 60 / 60 / 24;

        if (!inv[mem.id + message.guild.id]) inv[mem.id + message.guild.id] = {
            inviter: "Not stored in database",
            totalSecs: 0
        }

        fs.writeFile("./userD.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
        // Invites
        const guildInvites = await message.guild.fetchInvites();
        let invites = 0;
        guildInvites.forEach(i => {
            if (i.inviter.id === auth.id) {
                invites += i.uses;
            }
        }) // اصلا البوت معاه انفايتات؟؟؟؟

        let inviter = client.users.get(inv[mem.id + message.guild.id].inviter);

        const {
            body: bot
        } = await get(message.guild.iconURL.replace(imageUrlRegex, "?size=128"));
        let cnvs = require("canvas-constructor");
        let canvas = new cnvs.Canvas(417, 181)
        canvas.addImage(img, 0, 0, 417, 181)
        canvas.addRoundImage(bot, 7, 1, 29, 29, 25)
        canvas.setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
        canvas.setShadowOffsetY(3) // Drop the shadow by 5 pixels.
        canvas.setShadowBlur(3) // Blur the shadow by 10.
        canvas.save()
            .addRoundImage(ava, 320, 55, 78, 78, 39)
            .setTextAlign("center")
            .setTextFont("8pt Cairo")
        canvas.setColor((mem.highestRole.hexColor === "#000000") ? "#ffffff" : mem.highestRole.hexColor)
        canvas.addText(name, 360, 162)
        canvas.setColor("#FFFFFF")
        canvas.addText(createdAt.toFixed(), 192, 77)
        canvas.addText((joinedAt.toFixed().length >= 3) ? joinedAt.toFixed() : joinedAt.toFixed() + " يوم", 257.5, 77)
        canvas.addText("0", 195, 130)
        canvas.addText("0", 258, 130)
        canvas.addText(`${inv[mem.id+message.guild.id].totalSecs} ثانية`, 205, 163)
        canvas.addText((invites === 1 || invites === 0) ? invites + " عضو" : invites + " أعضاء", 120, 128)
        canvas.addText((inviter) ? inviter.username : "لم يتم تحديدة", 110, 77)
        if (inviter) {
            const {
                body: buffer
            } = await get(inviter.avatarURL.replace(imageUrlRegex, "?size=128"))

            canvas.addRoundImage(buffer, 14, 59, 30, 30, 15)

        }

        //.addText("Joined at: ", 120, 100)
        message.channel.send({
            file: canvas.toBuffer()
        })
    }
})






client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ").slice(1);
    let command = message.content.split(" ")[0];
    let request = require('snekfetch');
    if (command === `!npm`) {
        // https://www.npmjs.com/package/snekfetch
        if (!args[0]) return message.channel.send(`**ㄨ | Specify an arg to search for in npmjs.com.**`);
        let url = args.includes(" ") ? args.replace(" ", "-") : args;
        url = `https://registry.npmjs.com/${url[0].toLowerCase()}`;
        request.get(url).then(r => {
                message.channel.send(new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png")
                    .setTitle(`❯ \`${args[0]}\`.`)
                    .setColor("#000")
                    .addField("ㄨ **Version**", `- ${r.body['dist-tags'].latest}`, true)
                    .addField("ㄨ **License**", `- ${r.body.license}`, true)
                    .addField("ㄨ **Homepage**", `- [\`Click Here\`](${r.body.homepage})`, true)
                    .addField("ㄨ **Description**", `- ${r.body.description || "- Without description."}`, true)
                    .addField("ㄨ **Contributors**", `- ${r.body.contributors ? r.body.contributors.map(r => r.name).join(', ') : "None"}`, true)
                    .addField("ㄨ **Keyboards**", `- ${r.body.keywords ? r.body.keywords.map(r => r).join(', ') : "None"}`, true));
            })
            .catch(e => {
                if (e) message.channel.send(`** |ㄨ  Couldn't find the package \`${args[0]}\` .**`);
                if (e) console.log(e.message);
            });
    }
});

const Enmap = require("enmap");
const notes = new Enmap();
// ❯ | \`$text create\` : لإنشاء ملف 
// ❯ | \`$text delete\` : لمسح ملف
client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
    let alias = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");

    if (notes.get(message.author.id) === undefined) {
        notes.set(message.author.id, []);
    }
    if (alias === 'text') {
        if (args[1] === 'create') {
            let data = notes.get(message.author.id);
            if (data.length >= 8) {
                return message.channel.send(`**:( | You can't make more than 8 texts, Use \`${prefix}text delete [Note]\` to delete a texts!**`);
            } else {
                let thisName;
                let thisContent;
                let thisRegex = /([a-z,0-9])/g;
                let x = await message.channel.send(`**:information_source: | Type the name of the text**`);
                let i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });
                if (!i.first().content.match(thisRegex)) return message.channel.send(`**:( | That name isn't valid the name must be like \`test\`**`);
                if (data.filter(r => r.name === i.first().content).length != 0) return message.channel.send(`**:( | That name is already used**`);
                thisName = i.first().content;

                x = await message.channel.send(`**:information_source: | Type the content of the text**`);
                i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                });
                thisContent = i.first().content;

                x = await message.channel.send(new Discord.RichEmbed()
                    .setColor("ORANGE")
                    .setDescription("**⏳ | Saving the text...**"));

                await notes.push(message.author.id, {
                    name: thisName,
                    content: thisContent
                });

                await x.delete().catch(e => {});
                await message.channel.send(new Discord.RichEmbed()
                    .setColor("GREEN")
                    .setDescription(`** | Saved the text!**`));
            }
        } else if (args[1] === 'delete') {
            if (!args[2]) return message.channel.send(`**:( | You must type the name**`);
            let data = notes.get(message.author.id);
            if (data.filter(r => r.name === args[2]).length === 0) return message.channel.send(`**:( | Couldn't get that name**`);
            let item = data.filter(r => r.name === args[2])[0];
            let x = await message.channel.send(new Discord.RichEmbed()
                .setColor("ORANGE")
                .setDescription("**⏳ | Deleting the text...**"));

            await notes.remove(message.author.id, item);

            await x.delete().catch(e => {});
            await message.channel.send(new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`**Done | Deleted the text!**`));
        } else {
            if (!args[1]) return message.channel.send(`**ㄨ | You must type the name**`);
            let data = notes.get(message.author.id);
            if (data.filter(r => r.name === args[1]).length === 0) return message.channel.send(`**ㄨ | Couldn't get that name**`);
            let item = data.filter(r => r.name === args[1])[0];

            let o = new Discord.RichEmbed();
            o.setColor("#36393e");
            o.setTitle(`**ㄨ Displaying information about: \`${item.name}\`**`);
            o.setDescription(`**→ ${item.content}**`);

            await message.channel.send(o);
        }
    }
});



client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`✅ Blue Bot join new server.`)
        .setDescription(`**
   ⇏ | Server name : \`${guild.name}\`
   ⇏ | Server id: \`${guild.id}\`
   ⇏ | Server owner: ${guild.owner}
   ⇏ | Member Count: \`${guild.memberCount}\`
   ⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("603303532581617733").send({
        embed
    });
});


 


client.on('ready', () => {
    console.log(`-------------------------------
    [Start] ${new Date()}`);
    console.log(`[INFO] [Bot Name : [ ${client.user.username}. ]`)
    console.log(`[INFO] [Users Size : [ ${client.users.size}. ]`)
    console.log(`[INFO] [Guild Size : [ ${client.guilds.size}. ]`)
    console.log(`[INFO] [File Do : Admin Commands]`)
    console.log(`[BOT] By : Blue Team
    -------------------------------`)
    client.user.setActivity(`!settings | !help`, {
        type: "WATCHING"
    })
});

client.on('message', message => {
    if (message.content.startsWith('!check-me')) {

        var activated_servers = ['603305972290682903'];

        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {

            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`** | أنت لست أونر في أي سيرفر البوت موجود فية**`)

            } else if (guildr >= 1) {
                if (message.guild.member(message.author).roles.find(x => x.name === `Г Users ¬`)) return message.channel.send(`** | ${message.author}, انت تملك الرتبة بالفعل**`);;
                message.channel.send(`** | لقد تم وجود سيرفر أنت أونر وأضفت أس بوت  فية , مبروك الرتبة**`)
                message.member.addRole(message.guild.roles.find(x => x.name === `Г Users ¬`));
            }
        } else {
            return;
        }

    }
});


client.on('message', message => {


    if (message.content.startsWith(prefix + "user")) {

        if (!message.channel.guild) return;

        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(message.author.id);
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            var args = message.content.split(" ").slice(1);
            let user = message.mentions.users.first();
            let roles = message.member.roles.map(r => r).slice(0, 3).toString() + '\n' + message.member.roles.map(r => r).slice(3, 6).toString();
            var men = message.mentions.users.first();
            var heg;
            if (men) {
                heg = men
            } else {
                heg = message.author
            }
            var mentionned = message.mentions.members.first();
            var h;
            if (mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            moment.locale('ar-TN');
            var id = new Discord.RichEmbed()

                .setColor("#0a0909")
                .setThumbnail(message.author.avatarURL)
                .addField(`ㄨ Username: `, `→ **${message.author.username} \`(${message.author.id})\`** `)
                .addField('ㄨ Times: ', ` → Created At:** \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')}\` **
                → Joined At: **\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}\`**`)
                .addField(`ㄨ Invites: `, `→ **${inviteCount}**`)
                .addField(`ㄨ Roles: `,`→ **${roles}**`)

                .setFooter(message.author.username, message.author.avatarURL)
            message.channel.sendEmbed(id);
        })
    }



});


let antijoin = JSON.parse(fs.readFileSync('./antijoin.json', 'utf8'));
client.on('message', message => {
    if (message.content.startsWith(prefix + "settings AntiFake On")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**ㄨ | Don\'t have perms.**`);
        antijoin[message.guild.id] = {
            onoff: 'On',
        }
        message.channel.send(`** → | \`ON\`**`)
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
                .catch(err => {
                    console.error(err);
                });
        });
    }

})

client.on('message', message => {
    if (message.content.startsWith(prefix + "settings AntiFake Off")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**ㄨ | Don\'t have perms.**`);
        antijoin[message.guild.id] = {
            onoff: 'Off',
        }
        message.channel.send(`**ㄨ | \`OFF\`**`)
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
                .catch(err => {
                    console.error(err);
                });
        });
    }

})

client.on('message', message => {
    if (!message.channel.guild) return;
    // ❯  , →
    if (message.content.startsWith(prefix + "settings SetFake")) {
        let time = message.content.split(" ").slice(2).join(" ");
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** | Don\'t have perms.**`);
        if (!time) return message.channel.send(`** Please type the time of create accounts \`DaysOnly\`**`);
        let embed = new Discord.RichEmbed()
            .addField(`ㄨ Account Create Time:`, `→ \`${time}\`.`)
            .addField('ㄨ Requested By:', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        antijoin[message.guild.id] = {
            created: time,
            onoff: 'On',
        }
        fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) console.error(err)
        })
    }
})

client.on("guildMemberAdd", async member => {
    if (!antijoin[member.guild.id]) antijoin[member.guild.id] = {
        onoff: 'Off'
    }
    if (antijoin[member.guild.id].onoff === 'Off') return;
    if (!member.user.bot) return;
    let accounttime = `${antijoin[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        date = moment.duration(new Date() - member.user.createdAt).format("d");

    if (date < accounttime) {
        member.ban(`Member account age is lower than ${antijoin[member.guild.id].created} days.`)
    }
});

const sug = JSON.parse(fs.readFileSync('./sug.json', 'utf8'));
// ❯  , →
client.on('message', message => {
    if (!message.channel.guild) return;
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find(x => x.name === `${room}`)
    if (message.content.startsWith(prefix + "settings SetSug")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** Don\'t have perms.**`);
        if (!room) return message.channel.send(`**  Please type the channel name.**`)
        if (!findroom) return message.channel.send(`** Can\'t found this channel.**`)
        let embed = new Discord.RichEmbed()
            .addField(`ㄨ Channel:`, `→ \`${room}\`.`)
            .addField(`ㄨ Requested By:`, `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        sug[message.guild.id] = {
            channel: room,
        }
        fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
            if (err) console.error(err)
        })
        client.on('message', message => {
            // ❯  , →
            if (message.content.startsWith(`!sug`)) {
                if (!message.channel.guild) return;
                let suggest = message.content.split(" ").slice(1);
                if (!suggest) return message.reply(`** Please type the suggest.**`)
                let findchannel = (message.guild.channels.find(x => x.name === `${sug[message.guild.id].channel}`))
                if (!findchannel) return message.channel.send(`** Error: \`Can\'t find the suggestions room.**`)
                message.channel.send(`** Thanks for your suggest.**`)
                let sugembed = new Discord.RichEmbed()
                    .setTitle('ㄨ New suggest:')
                    .addField('ㄨ Suggest By:', `→ \`${message.author}\``)
                    .addField('ㄨ Suggest:', `→ \`${suggest}\``)
                    .setFooter(client.user.username)
                findchannel.sendEmbed(sugembed)
                    .then(function (message) {
                        message.react('✅')
                        message.react('❌')
                    })
                    .catch(err => {
                        message.reply(`**  Error: \`Can\'t find the suggestions room.**`)
                        console.error(err);
                    });
            }
        })
    }
})

client.on('message', async message => {
    if (message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    let cmd = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");
    if (cmd === 'hypixel') {
        if (!args[1]) return;
        let HypixelAPI = require("hypixel-api");
        let client = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let o = await message.channel.send(`**• Collecting data.. please wait.**`);
        client.getPlayer(x => x.name === args[1])
            .then(async player => {
                let stats = player.player.achievements;
                let overall = player;
                const getDays = (createdAt) => {
                    let date = Date.now() - createdAt;
                    // return `${Math.round(date / 1000 / 60 / 60 / 24)} Days ago`;
                    return pretty(date);
                };
                i.setDescription(`**ㄨ The player \`${overall.player.displayname}\`'s data**`);
                i.setThumbnail(`https://minotar.net/helm/${args[1]}`);
                i.addField('• Rank', (player.rank || player.packageRank || player.newPackageRank || 'undefined').toString().replace(/_/g, ' '), true)
                i.addField('• Client Version', player.mcVersionRp || 'undefined', true)
                i.addField('• Karma', player.karma || 'undefined', true)
                i.addField('• Hypixel Level', player.networkLevel || 'undefined', true)
                i.addField('• SkyWars Kills', `→ Kills Team: \`${stats["skywars_kills_team"]}\`\n→ Kills Solo: 
    \`${stats["skywars_kills_solo"]}\`\n→ Kills Mega: \`${stats["skywars_kills_mega"]}\``, true);
                i.addField('• SkyWars Wins', `→ Wins Team: \`${stats["skywars_wins_team"]}\`\n→ Wins Solo: \`${stats["skywars_wins_solo"]}\`\n→ Wins Mega: \`${stats["skywars_wins_mega"]}\``, true);
                i.addField('• BedWars Stats', `→ Broken Beds: \`${stats["bedwars_beds"] || 0}\`\n→ BedWars Wins: \`${stats["bedwars_wins"] || 0}\`\n→ BedWars Level: \`${stats["bedwars_level"]}\``, true);
                i.addField('• Other Stats', `→ Recent Game: \`${overall.player.mostRecentGameType || "None"}\`\n→ First Joined: \`${getDays(overall.player.firstLogin)}\`\n→ Last Joined: \`${getDays(overall.player.lastLogin)}\``, true);
                i.setFooter('Hypixel Stats | BlueBot.', 'https://hypixel.net/styles/hypixel-uix/xenforo/og-icon.png');
                await message.channel.send(i);
                await o.delete().catch(e => {});
            })
            .catch(async e => {
                console.log(e.stack);
                await o.delete().catch(e => {});
                return message.channel.send(`**:information_source: | Can\'t found any player with name : \`${args[1]}\` .**`);
            });
    }
});




client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + "steam")) {
        let args = message.content.split(" ");
        if (!args[1]) return;
        let i = new Discord.RichEmbed();
        i.setColor("#36393e");
        let o = await message.channel.send(`**• Collecting data.. please wait.**`);
        require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
            if (data !== "no") {
                i.setThumbnail(data.image);
                i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
                i.setFooter("Steam | BlueBot.", "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");

                await o.delete().catch(e => {});
                await message.channel.send(i);
            } else {
                await o.delete().catch(e => {});
                return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
            }
        })
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send(`**| MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\n | DiscordAPi: \`${Math.round(client.ping)}\`ms\n | Average: \`${Math.round(client.pings[0])}\`ms.** `)
    }
});


client.on('message', message => {
    var user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("!avt")) {
        message.channel.send(`**:frame_photo: | Avatar link, ${user} :** ${user.avatarURL}`);
    }
});

const fetch = require('node-fetch');

const qs = require('querystring');
client.on('message', async message => {
    let alias = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ").slice(1);

    if (alias == 'docs') {
        if (!args[0]) return;
        const query = args.join(" ");
        const queryString = qs.stringify({
            q: query
        });
        const queryLink = `https://djsdocs.sorta.moe/main/stable/embed?${queryString}`;

        fetch(queryLink)
            .then(res => res.json())
            .then(async res => {
                try {
                    let i = new Discord.RichEmbed();
                    let fields = res.fields;
                    let properties = fields.filter(r => r.name == 'Properties');
                    let methods = fields.filter(r => r.name == 'Methods');
                    let events = fields.filter(r => r.name == 'Events');
                    let params = fields.filter(r => r.name == 'Params');
                    let returns = fields.filter(r => r.name == 'Returns');
                    let examples = fields.filter(r => r.name == 'Examples');
                    i.setColor(res.color);
                    i.setTitle(res.author.name);
                    i.setURL(res.url);
                    i.setDescription(res.description);
                    i.setThumbnail(res.author.icon_url);
                    if (properties.length != 0) {
                        i.addField('- Properties', properties[0].value);
                    }
                    if (methods.length != 0) {
                        i.addField('- Methods', methods[0].value);
                    }
                    if (events.length != 0) {
                        i.addField('- Events', events[0].value);
                    }
                    if (params.length != 0) {
                        i.addField('- Params', params[0].value);
                    }
                    if (returns.length != 0) {
                        i.addField('- Returns', returns[0].value);
                    }
                    if (examples.length != 0) {
                        i.addField('- Examples', examples[0].value);
                    }
                    await message.channel.send(i);
                } catch (e) {}
            });
    }
});

client.on('message', message => {
    if (message.content.split(" ")[0].toLowerCase() === prefix + "delete") {
        const word = message.content;
        const number = word.slice(7, word.length);
        const int = Number(number);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`** I don\'t have perms.**`);
        }
        if (int >= 101) {
            return message.channel.send("**:wastebasket: | Only: `100`**");
        }
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return;
        }
        if (int == "") {
            return message.channel.send("**:wastebasket: | Choose number.**");
        } else if (isNaN(int)) {
            return message.reply(`** | only numbers.**`)
        }
        message.channel.bulkDelete(int).then(() => {
            return message.channel.send(`** Deleted ${int} messages.**`).then(m => m.delete(5000))
        });
    }
})

const pics = JSON.parse(fs.readFileSync('./pics.json', 'utf8'));
client.on('message', message => {
    if (!message.channel.guild) return;
    // ❯  , →
    let room = message.content.split(" ").slice(2);
    let findroom = message.guild.channels.find(r => r.name === `${room}`)
    if (message.content.startsWith(prefix + "settings setMedia")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (!room) return message.channel.send(`** Type name of room.**`)
        if (!findroom) return message.channel.send(`** name is incorrect or includes : \`#\`.**`)
        let embed = new Discord.RichEmbed()
            .setTitle(`**ㄨ media command is open.**`)
            .addField('ㄨ Room:', `→ \`${room}\`.`)
            .addField('ㄨ By: ', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        pics[message.guild.id] = {
                channel: room,
                onoff: 'On'
            },
            fs.writeFile("./pics.json", JSON.stringify(pics, null, 2), (err) => {
                if (err) console.error(err)

            })
    }
})

client.on('message', message => {
    if (message.content.startsWith(prefix + "settings toggleMedia")) {
        if (!message.channel.guild) return;

        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (!pics[message.guild.id]) pics[message.guild.id] = {
            onoff: 'Off'
        }
        if (pics[message.guild.id].onoff === 'Off') return [message.channel.send(`** → | \`ON\`.**`), pics[message.guild.id].onoff = 'On']
        if (pics[message.guild.id].onoff === 'On') return [message.channel.send(`** ㄨ | \`OFF\`.**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics, null, 2), (err) => {
            if (err) console.error(err)

        })
    }

})

client.on('message', message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;

    if (!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
    }
    if (pics[message.guild.id].onoff === 'Off') return;

    if (message.channel.name !== `${pics[message.guild.id].channel}`) return;

    let types = [
        'jpg',
        'jpeg',
        'gif',
        'png'
    ]
    if (message.attachments.size <= 0) {
        message.delete();
        message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
            .then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 5000)
            })
        return;
    }
    if (message.attachments.size >= 1) {
        let filename = message.attachments.first().filename
        console.log(filename);
        if (!types.some(type => filename.endsWith(type))) {
            message.delete();
            message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
                .then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 5000)
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
})
client.on('message', message => {
    // ❯  , →
    if (message.content.startsWith(prefix + "settings infoMedia")) {
        let embed = new Discord.RichEmbed()
            .addField('ㄨ Info:', `→ \`${pics[message.guild.id].onoff}\``)
            .addField('ㄨ Room: ', `→ \`${pics[message.guild.id].channel}\``)
            .addField('ㄨ By: ', `→ \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
    }
})

client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let emoji = {
    }
    if (args[0].toLowerCase() === `${prefix}server`) {
        if (!message.member.hasPermission("MANAGE_GUILD")) return;
        let guildCreation = new Date(moment(message.guild.createdAt).format('MMMM DD, YYYY h:mm:ss')).getTime();
        let embedInfo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.guild.iconURL)
            .setColor("#343A40")
            .setThumbnail(message.author.avatarURL || message.guild.iconURL || client.user.avatarURL)
            .addField('ㄨ Owner', `» ${message.guild.owner}`, true)
            .addField('ㄨ Creation', `» ${message.guild.createdAt.toLocaleString()}, **( \`${pretty(Date.now() - guildCreation)}\` )**`, true)
            .addField('ㄨ Roles', `» Administrator .: \`${message.guild.roles.filter(r => r.hasPermission("ADMINISTRATOR")).size}\`\n» Size .: \`${message.guild.roles.size}\``, true)
            .addField('ㄨ Channels', `» \`${message.guild.channels.filter(r => r.type === 'text').size} 💬\`\n» \`${message.guild.channels.filter(r => r.type === 'voice').size} 🔊\``, true)
            .addField('ㄨ Members', `» online \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | idle \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | Bot \`${message.guild.members.filter(r => r.user.bot).size}\`\n» DND \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | offline \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | All \`${message.guild.memberCount}\``, true);
        message.channel.send(embedInfo);
        // ❯ , »
    }
});

client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ Blue Bot leave from server.`)
        .setDescription(`**
⇏ | Server name : \`${guild.name}\`
⇏ | Server id: \`${guild.id}\`
⇏ | Server owner: ${guild.owner}
⇏ | Member Count: \`${guild.memberCount}\`
⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("603303532581617733").send({
        embed
    });
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send(`** أختر رقم **`);
            return;
        }
        message.channel.send(Math.floor(Math.random() * args.join(' ')));
        if (!args[0]) {
            message.edit('1')
            return;
        }
    }
});

client.on('message', async message => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (message.content.split(" ")[0] === `${prefix}emojis`) {
        message.channel.send(new Discord.RichEmbed()
            .setColor("36393e")
            .addField(`- Server Emojis:`, message.guild.emojis.map(r => r).join("  ")));
    }
});

client.on('message', message => {
    if (message.content === prefix + "donate") {
        message.channel.send(`** للتبرع قم بالتحويل للرابط التالي : \n - http://paypal.me .**`)
    }
});



client.on('message', edited => {
    let args = edited.content.split(" ").slice(1).join(" ")
    if (edited.content.startsWith(prefix + 'create-colors')) {
        if (!args) return edited.channel.send('**:information_source: |  أكتب عدد الألوان التي تريدها مع الأمر**');
        if (!edited.member.hasPermission('MANAGE_ROLES')) return;
        edited.channel.send(`**| تم صنع :  \`${args}\` لون**`);
        setInterval(function () {})
        let count = 0;
        let ecount = 0;
        for (let x = 1; x < `${parseInt(args)+1}`; x++) {
            edited.guild.createRole({
                name: x,
                color: 'RANDOM'
            })
        }
    }
});



client.on('message', message => {
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mmove')) {
        if (message.member.hasPermission("MOVE_MEMBERS")) {
            if (message.mentions.users.size === 0) {
                return message.channel.send("** :x: أستعمل : \`$move [MEMBERNAME]\` **")
            }
            if (message.member.voiceChannel != null) {
                if (message.mentions.members.first().voiceChannel != null) {
                    var authorchannel = message.member.voiceChannelID;
                    var usermentioned = message.mentions.members.first().id;
                    var embed = new Discord.RichEmbed()
                        .setTitle("Succes!")
                        .setColor("#000000")
                        .setDescription(`** | تم نقل : <@${usermentioned}> لرومك**`)
                    var embed = new Discord.RichEmbed()
                        .setTitle(`**$| تم نقلك في  سيرفر : ${message.guild.name}**`)
                        .setColor("RANDOM")
                        .setDescription(`** ✅ | <@${message.author.id}> قام بنقلك لرومة \nداخل سيرفر : ${message.guild.name}**`)
                    message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                    message.guild.members.get(usermentioned).send(embed)
                } else {
                    message.channel.send(`** | لا يمكنك نقل : " + message.mentions.members.first() + " يجب أن يكون في روم صوتي لنقلة **`)
                }
            } else {
                message.channel.send(`** | يجب أن تكون في روم لنقل أحد**`)
            }
        } else {
            message.react("❌")
        }
    }
});



const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
client.on('message', msg => {
    if (msg.content.startsWith(prefix + 'أحسب')) {
        let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
        if (args.length < 1) {
            msg.reply('**:information_source: | قم بوضع مسئلة حسابية **');
        } else {
            let answer;
            try {
                answer = math.eval(question);
            } catch (err) {
                msg.reply(`** :x: خطأ **`);
            }

            const embed = new Discord.RichEmbed()
                .addField("**:arrow_right: | السؤال : **: ", `**\`\`\`${question}\`\`\`**`, true)
                .addField("**:arrow_right: | الاِجابة : **: ", `**\`\`\`${answer}\`\`\`**`, true)
            msg.channel.send(embed)
        }
    };
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'moveall')) {
        if (!message.member.hasPermission("MOVE_MEMBERS")) return;
        if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
        if (message.member.voiceChannel == null) return message.channel.send(`**| عليك أن تكون في روم صوتي**`)
        var author = message.member.voiceChannelID;
        var m = message.guild.members.filter(m => m.voiceChannel)
        message.guild.members.filter(m => m.voiceChannel).forEach(m => {
            m.setVoiceChannel(author)
        })
        message.channel.send(`** | تم نقل جميع الأعضاء لرومك**`)


    }
});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).kick();
 
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', async(message) => {
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}bc`){
        if(!message.member.hasPermission('MANAGE_GUILD')) return;
        if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
        message.guild.members.map((m) => {
            setTimeout(() => {
                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
            }, 550);
        });
    }
}); 

   client.on('message', message => {
     if (message.content === "!support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/eFSST7u**")
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});



client.on("message", message => {
    const command = message.content.split(" ")[0];

    if(command == prefix+"vkick"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});


client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**You Should Create A Rank Name `Muted`**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You Have To Mention SomeOne**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: This User In Not Muted")

  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: Succes Has Been Unmuted The User");

  return;

  }

});
 
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});


let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})

client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
});

client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("✅ `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});
