const Discord = require('discord.js');
const db = require('quick.db');
const Canvas = require("canvas");

exports.run = async(client, message, args) => {

    if(!message.member.roles.cache.has('610631502232813578')){
        const embed = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('Kedi Bot • Level System • Shymoix')
            .setTimestamp()
        message.channel.send(embed)
        return
    }

    let kanal = message.mentions.channels.first();
    if(!kanal){
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Level kanalını ayarlamam için bir kanal etiketlemeniz gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('Kedi Bot • Level System • Shymoix')
            .setTimestamp()
        message.channel.send(embed2)
        return
    } 
    else {
        await db.set(`levelch_${message.guild.id}`, kanal.id);
        const embed3 = new Discord.MessageEmbed()
        .setColor('#66ff00')
        .setTitle('**LEVEL KANALI AYARLANDI!**')
        .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
        .setDescription(`**Level kanalı başarıyla ${kanal} olarak ayarlandı!**`)
        .setFooter('Kedi Bot • Level System • Shymoix')
        .setTimestamp()
    message.channel.send(embed3)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lvlch"]
};

exports.help = {
  name: 'levelchannel',
  description: 'Level için kanal ayarlar.',
  usage: '!levelch #kanal'
};