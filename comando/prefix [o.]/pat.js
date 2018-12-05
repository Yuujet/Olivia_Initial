const Discord = require('discord.js');
const superagent = require("superagent");

exports.run = async (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let user = message.mentions.users.first()

    if(!user) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    let user2 = message.mentions.users.first()
    let nomeeapelido2 = message.guild.member(user2).nickname || message.mentions.users.first().username;

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

    var embed = new Discord.RichEmbed()
    .setColor('#f7d200')
    .setDescription(`**${nomeeapelido}** fez carinho em **${nomeeapelido2}**`)
    .setImage(body.url)

    message.channel.send(embed)
}