const Discord = require("discord.js");
const moment = require('moment');
require("moment-duration-format");
moment.locale('pt-BR');

exports.run = (Olivia, message, args) => {
  if (message.channel.permissionsFor(message.author).has("KICK_MEMBERS")) {
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`);
    let kReason = args.join(" ").slice(22);
    var membro = message.mentions.members.first();
    if(!membro) return message.channel.send(`**${nomeeapelido}**, está faltando mencionar alguem !`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, você não tem permissão para usar este comando. :confused:`);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(`<:no:471419279955197972> | **${nomeeapelido}**, não tenho permissão para **kickar** esta pessoa.`);

    let kickEmbed = new Discord.RichEmbed()
    .setAuthor("~ Kicks ~", Olivia.user.displayAvatarURL)
    .setColor("#ed1c54")
    .addField(":bow: Usuario Kickado", `${kUser}`, true)
    .addField(":cop: Kickado por", `<@${message.author.id}>`, true)
    .addField(":speech_balloon: Canal do Kick", message.channel, true)
    .setThumbnail(Olivia.user.avatarURL)
    .addBlankField()
    .addField(":calendar: Data do Kick", moment(message.createdAt).format("lll"), true)
    .addField(":pencil: Motivo do Kick", kReason, true);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Me desculpe, mas o servidor não tem o canal `logs` para poder receber as mensagens dos kicks, nyan. :crying_cat_face:");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
  } else {
    message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando. :confused:`)
  }

}
