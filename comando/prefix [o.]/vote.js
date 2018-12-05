const Discord = require('discord.js');

exports.run = async (Olivia, message, args) => {
	
  let link = 'https://discordbots.org/bot/474795511233380353/vote'
  let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
  
  var vote = new Discord.RichEmbed()
  .setColor("#f7d200")
  .setThumbnail(message.client.user.displayAvatarURL)
  .setDescription(` **${nomeeapelido}** \nQuer me ajudar ? \nClique **[aqui](${link})** para dar o voto.`);

  message.channel.send(vote);
  
}
