var database = require("../../database.js")

exports.run = (Olivia, message, args) => {

    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1) {

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            if (documento) {
              let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username
              let a = documento.coins.toLocaleString()
              message.channel.send(`**${nomeeapelido}**, você tem **${a}** de créditos.`);

            } else {


              var pessoa = new database.Users({
                  _id: message.author.id,
                  level: 0,
                  xp: 0,
                  coins: 0,
                  mensagens: 0,
                  msglevel: 0,
                  rep: 0
              })

                pessoa.save()

            }

        })

    } else {

        database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function(erro, documento) {

            if (documento) {

              let nomeeapelido = message.author.username;
              let nomeeapelido2 = message.mentions.users.first().username;
              let b = documento.coins.toLocaleString()
              if (message.mentions.users.first().bot) return message.channel.send(`**${nomeeapelido}**, Não é permitido executar está ação.`)
              message.channel.send(`**${nomeeapelido}**, o(a) **${nomeeapelido2}** tem **${b}** de créditos.`)


            } else {
                var pessoa = new database.Users({
                    _id: message.mentions.users.first().id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    mensagens: 0,
                    msglevel: 0,
                    rep: 0
                })

                pessoa.save()

            }

        })
    }
}
