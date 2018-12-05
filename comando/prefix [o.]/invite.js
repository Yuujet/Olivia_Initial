const Discord = require("discord.js");

exports.run = (Olivia, message) => {

  let oicon = message.client.user.displayAvatarURL
  let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

  var invitembed = new Discord.RichEmbed()
  .setColor("#f7d200")
  .setThumbnail(oicon)
  .setDescription(`**${nomeeapelido}** \nQuer me adicionar ao seu servidor? \nPara me adicionar clique **[aqui](https://discordapp.com/oauth2/authorize?client_id=474795511233380353&scope=bot&permissions=66321471)**`);

  message.channel.send(invitembed);
}
