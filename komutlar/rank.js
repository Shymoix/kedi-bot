const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const db = require('quick.db');

exports.run = (client, message, args) => {
    var user = message.mentions.users.first() || message.author
    let every = db
        .all()
        .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
        .sort((a, b) => b.data - a.data)
    var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${user.id}`) + 1
    message.channel.send(rank)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rnk"]
};

exports.help = {
  name: 'rrank',
  description: 'rrank',
  usage: 'k.rrank'
};