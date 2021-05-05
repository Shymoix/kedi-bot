const Discord = require('discord.js');
const snekfetch = require('snekfetch');

exports.run = (client, msg, args) => {
    let target = msg.mentions.users.first() || msg.author;
    const embed = new Discord.MessageEmbed()
        .setTitle('Shymoix Twitch')
        .setDescription("Shymoix Twitch Kanalına Gitmek için 'Shymoix Twitch' yazısına tıklayınız.")
        .setThumbnail('https://i.hizliresim.com/G0Dmw9.png')
        .setFooter("Efsomoix | Shymoix Twitch")
        .setURL('https://www.twitch.tv/shymoix')
    msg.channel.send({embed})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tw"]
};

exports.help = {
  name: 'twitch',
  description: 'Twitch',
  usage: '!twitch'
};