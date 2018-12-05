const Discord = require("discord.js");

exports.run = async(Olivia, message, args) => {
if (message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
  let limparArgs = parseInt(args[0],10);
  if(!limparArgs || limparArgs < 2 || limparArgs > 1000) return message.channel.send(`**${message.author.username}**, Para limpar o chat use **o.limpar [quantidade]** \nLembresse, você precisa colocar um número entre **2** e **1000**.`);

  else{
  let mensagens = await message.channel.fetchMessages({limit: limparArgs});
  message.channel.bulkDelete(mensagens);
  message.channel.send(`:wastebasket: **| ${message.author.username}**, Deletou **${args[0]}** mensagens.`);
}
} else {
  message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando. :confused:`)
}
}
