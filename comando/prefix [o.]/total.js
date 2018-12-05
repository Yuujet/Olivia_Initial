const Discord = require('discord.js');

exports.run = async (Olivia, message, args) => {

  let users = Olivia.users.size
  //Olivia.guilds.map(g => users += g.memberCount);
  let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

  let canais = Olivia.channels.size
  let servers = Olivia.guilds.size
  let emote = Olivia.emojis.size
  let enviar = '**' + nomeeapelido + '**, Estou com : \n``' + users.toLocaleString() + '`` Usuários. \n``' + canais.toLocaleString() + '`` Canais.\n``' + servers.toLocaleString() + '`` Servidores.\n``' + emote + '`` Emojis.'

  message.channel.send(enviar);
}