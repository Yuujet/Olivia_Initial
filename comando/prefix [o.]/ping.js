const Discord = require('discord.js');

exports.run = (Olivia, message, args) => {

  var pingebed = new Discord.RichEmbed()
  .setColor('#f7d200')
  //.setDescription(`**Shards** **|** [${(Olivia.shard.id + 1)}/${(Olivia.shard.count)}] \n📡 **|** **${message.author.username}**, neste momento meu ping está em **${Math.round(Olivia.ping)}ms**`);
  .setDescription(`**${message.author.username}**, neste momento meu ping está em **${Math.round(Olivia.ping)}ms**`);

  var embed = new Discord.RichEmbed()
  .setColor('#f7d200')
  .setDescription('<a:carregando:488783607352131585>')

  message.channel.send(embed).then(ping => {
    setTimeout(function () {
      ping.edit(pingebed);
  }, 5000)});
}
