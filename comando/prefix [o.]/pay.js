var database = require("../../database.js")

exports.run = (client, message, args) => {

    let user = message.mentions.users.first();
    let razaod = args.slice(1).join(' ');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.channel.send(`**${nomeeapelido}**, mencione alguem para doar crédito.`);
            if (message.mentions.users.first().id == message.author.id) return message.channel.send(`**${nomeeapelido}**, você não pode doar para você mesmo.`);
            if (message.mentions.users.first().bot) return message.channel.send(`**${nomeeapelido}**, Você não pode doar para um bot.`);
            if (!razaod.length < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.coins) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            setTimeout(() => {
                            docs.coins += parseInt(args[1])
                            docs.save();
                            }, 5000);
                            documento.coins -= parseInt(args[1])
                            documento.save();
                            message.channel.send(`**${nomeeapelido}**, créditos doado com sucesso!`);

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

                } else {
                    message.channel.send(`**${nomeeapelido}**, créditos insuficientes.`);
                }
            } else {
                message.channel.send(`**${nomeeapelido}**, o valor precisa ser maior que **0**!`);
            }
            } else {
                message.channel.send(`**${nomeeapelido}**, faltou a quantidade.`);
            }

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

}
