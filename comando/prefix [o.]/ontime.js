const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = (Olivia, message, args, ops) => {
    let duration = moment.duration(Olivia.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    const onembed = new Discord.RichEmbed()
    .setColor('#f7d200')
    .setDescription(`**${nomeeapelido}**, estou online à: **${duration}**`);

    message.channel.send(onembed);
}
