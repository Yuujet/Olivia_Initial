const Discord = require("discord.js");

exports.run = (Olivia, message, args) => {	

	let reason = args.slice(0).join(' ')
	if (reason.length < 2){
		let member = message.mentions.users.first() || Olivia.users.get(args[0]) ||  message.author;

		let avatar = member.displayAvatarURL;
   
		if(avatar.endsWith(".gif")) {
		   avatar = `${member.displayAvatarURL}?size=2048`
		}
   
   
		 var embed = new Discord.RichEmbed()
	   .setDescription(`**Avatar de: [${member.username}](${avatar})**`)
	   .setImage(avatar)
	   .setColor('#f7d200')
	   message.channel.send(embed);
	} else if(args[0] === 'bot') {
	   	let avatarBot = message.client.user.displayAvatarURL
		let memberBot = message.client.user.username

		var embed = new Discord.RichEmbed()
		.setDescription(`**Avatar de: [${memberBot}](${avatarBot})**`)
		.setImage(avatarBot)
		.setColor('#f7d200')
		message.channel.send(embed);
   }
}
