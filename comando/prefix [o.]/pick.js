const Discord = require('discord.js')
var database = require("../../database.js")

exports.run = (Olivia, message, args) => {
  let boticone = message.client.user.displayAvatarURL;
  let cor = "#f7d200";
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (erro, documento) {

        if(documento) {

            if(documento.caixa) {
                database.Users.findOne({
                    "_id": message.author.id
                }, function (uerro, udocumento) {
                    if(udocumento) {

                        if(documento.caixatipo == "Comum") {
                            documento.caixa = false
                            documento.save()
                            udocumento.comum += 1
                            udocumento.save()
                            message.channel.send(`🎁 **| ${message.author.username}**, você acabou de pegar uma caixa **Comum**.`);
                        } else if(documento.caixatipo == "Raro") {
                            documento.caixa = false
                            documento.save()
                            udocumento.raro += 1
                            udocumento.save()
                            message.channel.send(`🎁 **| ${message.author.username}**, você acabou de pegar uma caixa **Rara**.`);
                        } else if(documento.caixatipo == "Epico") {
                            documento.caixa = false
                            documento.save()
                            udocumento.epico += 1
                            udocumento.save()
                            message.channel.send(`🎁 **| ${message.author.username}**, você acabou de pegar uma caixa **Épica**.`);
                        } else if(documento.caixatipo == "Lendario") {
                            documento.caixa = false
                            documento.save()
                            udocumento.lendario += 1
                            udocumento.save()
                            message.channel.send(`🎁 **| ${message.author.username}**, você acabou de pegar uma caixa **Lendaria**.`);
                        }

                    } else {
                        var pessoa = new database.Users({
                            _id: message.author.id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            rep: 0,
                            comum: 0,
                            raro: 0,
                            epico: 0,
                            lendario: 0,
                            background: "https://i.imgur.com/PBv5FMm.jpg",
                            ban: false,
                            frase: "Nenhuma"
                        })

                        pessoa.save()
                        var embedresult2 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setDescription(`**${message.author.username}**, Use o comando novamente!`)
                        message.reply(embedresult2);
                    }
                })
            } else {
              message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, Nenhuma caixa foi dropada no momento.`);
            }

        } else {
            var servidor = new database.Guilds({
                _id: message.guild.id,
                welcome: false,
                welcomechannel: "Nenhum",
                welcomemsg: "Nenhuma",
                byebye: false,
                byebyechannel: "Nenhum",
                byebyemsg: "Nenhuma",
                autorole: false,
                autoroleid: "Nenhum",
                leveis: true,
                coins: true,
                box: true,
                caixa: false,
                caixatipo: "Comum"
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.reply(embedresult);
        }

    })

}
