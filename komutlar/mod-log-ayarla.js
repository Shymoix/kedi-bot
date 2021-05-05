const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if(!message.member.roles.cache.has('610631502232813578')){
        const embed = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('Kedi Bot | Mod Log System | Shymoix')
        message.channel.send(embed)
        return
    }

    let kanal = message.mentions.channels.first();
    if(!kanal){
        const embed2 = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Mod Log kanalını ayarlamam için bir kanal etiketlemeniz gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('Kedi Bot | Mod Log System | Shymoix')
        message.channel.send(embed2)
        return
    } 
    else {
        await db.set(`modlog_${message.guild.id}`, kanal.id);
        const embed3 = new Discord.MessageEmbed()
        .setColor('#66ff00')
        .setTitle('**MOD LOG KANALI AYARLANDI!**')
        .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
        .setDescription(`**Mod Log kanalı başarıyla ${kanal} olarak ayarlandı!**`)
        .setFooter('Kedi Bot | Mod Log System | Shymoix')
    message.channel.send(embed3)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mlkanal"]
};

exports.help = {
  name: 'modlogkanal',
  description: 'Mod Log için kanal ayarlar.',
  usage: '!modlogkanal #kanal'
};