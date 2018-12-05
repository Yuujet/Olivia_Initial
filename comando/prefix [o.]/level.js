const Discord = require('discord.js');
var database = require("../../database.js");

exports.run = (Olivia, message, args) => {

  let user = message.mentions.users.first()
  let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username



  if (message.mentions.users.size < 1) {


  database.Users.findOne({
    "_id": message.author.id
}, function(erro, documento) {

  if (documento) {

    var unbug = 370 * documento.level + 1

    message.channel.send(`**${nomeeapelido}**, Você está no nivel **${documento.level}**. \nE tem **${documento.xp}/${unbug}** de xp.`)

    /*let levelembed = new Discord.RichEmbed()
    .setColor('#f7d200')
    .setThumbnail(message.author.displayAvatarURL)
    .setAuthor(`Nivel de: ${message.author.username}`, message.author.displayAvatarURL)
    .addField("Nivel", '```' + documento.level + '```', true)
    .addField("XP", '```' + documento.xp + "/" + unbug + '```', true)

    message.channel.send(levelembed);*/

  } else {


    var pessoa = new database.Users({
      _id: message.author.id,
      level: 0,
      xp: 0,
      coins: 0
  })

  pessoa.save()

  }

})
  } else {
    database.Users.findOne({
      "_id": message.mentions.users.first().id
  }, function(erro, documento) {

    //if (!message.mentions.users.first().bot) return message.channel.send(`**${nomeeapelido}**, Não é permitido executar está ação.`)
      if (documento) {

        var unbug = 370 * documento.level + 1

        let nomeeapelido = message.author.username;
        let nomeeapelido2 = message.mentions.users.first().username;
        if (message.mentions.users.first().bot) return message.channel.send(`**${nomeeapelido}**, Não é permitido executar está ação.`)
        message.channel.send(`**${nomeeapelido}**, o(a) **${nomeeapelido2}** está no nivel **${documento.level}**. \nE tem **${documento.xp}/${unbug}** de xp.`)

        /*let levelembed2 = new Discord.RichEmbed()
        .setColor('#f7d200')
        .setThumbnail(message.mentions.users.first().displayAvatarURL)
        .setAuthor(`Nivel de: ${message.mentions.users.first().username}`, message.mentions.users.first().displayAvatarURL)
        .addField("Nivel", '```' + documento.level + '```', true)
        .addField("XP", '```' + documento.xp + "/" + unbug + '```', true)

        message.channel.send(levelembed2)*/

      } else {

          var pessoa = new database.Users({
              _id: message.mentions.users.first().id,
              level: 0,
              xp: 0,
              coins: 0
          })

          pessoa.save()

      }

  })
  }
}
