const Canvas = require("canvas");
const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    //Const
    const member = message.author;
    const canvas = Canvas.createCanvas(1100,500);
    const ctx = canvas.getContext("2d");

    const background = await Canvas.loadImage("https://i.hizliresim.com/S9wYiT.png");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    //Text
    ctx.font = "32px Sans-serif";
    ctx.fillStyle = "#f0f0f0";
    ctx.textAlign = "center";
    ctx.fillText(member.tag + ` sunucuya giriş yaptı.`, 550, 350)

    //Text 2
    ctx.font = "32px Sans-serif";
    ctx.fillStyle = "#C0C0C0";
    ctx.textAlign = "center";
    ctx.fillText(client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `. kullanıcı.`, 550, 400)

    //Avatar Circle
    ctx.beginPath()
    ctx.arc(550, 200, 100, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    //Avatar
    const avatar = await Canvas.loadImage(member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    ctx.drawImage(avatar, 450, 100, 200, 200)

    //Send Message
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "https://i.hizliresim.com/S9wYiT.png")
    message.channel.send(`Hey ${member}, Aramıza Hoşgeldin! ✨`)
    message.channel.send(attachment)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ctest"]
};

exports.help = {
  name: 'canvastest',
  description: 'Canvas Text Command',
  usage: '!canvastest'
};