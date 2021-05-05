const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if(!message.member.roles.cache.has('610631502232813578')){
        const embed = new Discord.MessageEmbed()
            .setColor('#fffa00')
            .setTitle('**HATA**')
            .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
            .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
            .setFooter('Kedi Bot • Mod Log System • Shymoix')
            .setTimestamp()
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
            .setFooter('Kedi Bot • Mod Log System • Shymoix')
            .setTimestamp()
        message.channel.send(embed2)
        return
    } 
    else {
        await db.set(`msjlog_${message.guild.id}`, kanal.id);
        const embed3 = new Discord.MessageEmbed()
        .setColor('#66ff00')
        .setTitle('**MESAJ LOG KANALI AYARLANDI!**')
        .setThumbnail('https://i.hizliresim.com/5QFCOh.png')
        .setDescription(`**Mesaj Log kanalı başarıyla ${kanal} olarak ayarlandı!**`)
        .setFooter('Kedi Bot • Mesaj Log System • Shymoix')
        .setTimestamp()
    message.channel.send(embed3)
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["msjlkanal"]
};

exports.help = {
  name: 'mesajlogkanal',
  description: 'Mesaj Log için kanal ayarlar.',
  usage: '!mesajlogkanal #kanal'
};