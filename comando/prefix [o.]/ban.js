const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');

exports.run = (Olivia, message, args) => {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first();
    if(!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não tem permissão para usar este comando. :confused:`)
    if(!membro) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    if(!message.guild.member(membro).bannable) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, não tenho permissão para **banir** esta pessoa.`)
    if(razao.length < 1) return message.channel.send(`**${message.author.username}**, esta faltando colocar o motido!`)
    let banchannel = message.guild.channels.find(`name`, "logs");
    if(!banchannel) return message.channel.send(`O servidor não tem o canal **logs**, para receber as mensagens de ban.`);
    membro.ban()


    let banEmbed = new Discord.RichEmbed()
    .setAuthor("~ Bans ~", Olivia.user.displayAvatarURL)
    .setColor("#ed1c54")
    .addField(":bow: Usuario Banido(a)", `${membro}`, true)
    .addField(":cop: Banido(a) por", `<@${message.author.id}>`, true)
    .addField(":speech_balloon: Canal do Ban", message.channel, true)
    .addBlankField()
    .addField(":calendar: Data do Ban", moment(message.createdAt).format("lll"), true)
    .addField(":pencil: Motivo do Ban", razao, true);



    message.guild.member(membro).ban(razao);
    banchannel.send(banEmbed);
}
