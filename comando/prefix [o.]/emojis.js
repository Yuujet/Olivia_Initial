const Discord = require('discord.js');

exports.run = async (Olivia, message, args, play, ops) => {
  let nomeeapelido = message.author.username
  let snome = message.guild.name
  let sicone = message.guild.iconURL
  let cor = '#f7d200'

  let emojis = message.guild.emojis.map(e => e)
  let e = emojis.length
  if (e == 0) return message.channel.send(`**${nomeeapelido}**, O servidor **${snome}** não tem emojis personalizados.`)
  if (e > 51 ) {
    message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, o servidor **${snome}** tem muito emoji para poder ser listado.`)
  } else {
    const eembed = new Discord.RichEmbed()
    .setColor(cor)
    .setThumbnail(sicone)
    .setAuthor(`Emojis do Servidor - ${snome}`, sicone)
    .setDescription(`${emojis}`)
    message.channel.send(eembed);
  }
}
