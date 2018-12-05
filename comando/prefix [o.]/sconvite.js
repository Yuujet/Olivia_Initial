const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send(`**${message.author.username}**, eu não tenho permissão para ver os convites deste server!`);
    });

    //invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites){
        possibleinvites.push(`**Criador do Convite:** ${invites.inviter.username}\n**Uso:** ${invites.uses}\n**[[Codigo](https://discord.gg/${invites.code})]**`)
    })

   // let a = possibleinvites.map(a=> a)

    const embed = new Discord.RichEmbed()
		.setAuthor(`Convites do servidor - ${message.guild.name}`, message.guild.iconURL)        
		.setThumbnail(`${message.guild.iconURL}?size=2048`)
        .setColor('#f7d200')
        .setDescription(`${possibleinvites.join('\n\n')}`)        
    message.channel.send(embed);
}