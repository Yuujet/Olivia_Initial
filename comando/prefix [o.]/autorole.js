const Discord = require('discord.js')
var database = require("../../database.js")

exports.run = async (Olivia, message, args) => {


    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let razaoq = args.slice(3).join(' ');
    let user = message.mentions.roles.first();
    let boticone = message.client.user.displayAvatarURL
    let cor = "#f7d200";

    var desenvolvedores = ["316989384077475841"]

    if (!desenvolvedores.includes(message.author.id) & !message.member.hasPermission(["MANAGE_ROLES_OR_PERMISSIONS"]))
    return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {
            var prefix = documento.prefixo

            if (!razaou.length < 1) {

                if (message.content.startsWith(prefix+"autorole set")) {

                    if (message.mentions.roles.size < 1) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, está faltando colocar o cargo.`);
                    if(message.mentions.roles.first().position >= message.guild.members.get(Olivia.user.id).highestRole.position){
                        message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, não tenho permissão para entregar este cargo.`);
                    } else {
                    documento.autoroleid = message.mentions.roles.first().id
                    documento.autorole = true
                    documento.save();
                    var embed1 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Autorole setado com sucesso!`)
                    message.channel.send(embed1);
                    }
                }

                if (message.content.startsWith(prefix+"autorole remove")) {
                        if (!documento.autorole) {
                          var embed2 = new Discord.RichEmbed()
                          .setColor(cor)
                          .setDescription(`**${message.author.username}**, Não há um autorole definido neste servidor!`)
                          message.channel.send(embed2);
                        } else {
                            documento.autoroleid = "Nenhum"
                            documento.autorole = false
                            documento.save()
                            var embed3 = new Discord.RichEmbed()
                            .setColor(cor)
                            .setDescription(`**${message.author.username}**, Autorole removido com sucesso!`)
                            message.channel.send(embed3);
                    }
                }

                if (message.content.startsWith(prefix+"autorole view")) {

                    if (!documento.autorole) {
                      var embed4 = new Discord.RichEmbed()
                      .setColor(cor)                     
                      .setDescription(`**${message.author.username}**, Não há um autorole definido neste servidor!!`)

                        message.channel.send(embed4);
                    } else {
                      var embed5 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setAuthor('Olivia', boticone)
                      .setThumbnail(boticone)
                      .addField('Cargo:',  "<@&" + documento.autoroleid + ">")

                        message.channel.send(embed5);
                    }

                }

            } else {
              var embedwelcome = new Discord.RichEmbed()
              .setColor(cor)
              .setAuthor('Olivia', boticone)
              .setThumbnail(boticone)
              .setDescription("**Como usar:**\n\n``"+prefix+"autorole set <menção do cargo>``\n``"+prefix+"autorole remove``\n``"+prefix+"autorole info``")
                message.channel.send(embedwelcome);
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
                caixatipo: "Comum",
                prefixo: "o."
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.reply(embedresult);

        }

    })

}
