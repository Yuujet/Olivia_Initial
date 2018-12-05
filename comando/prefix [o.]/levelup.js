const Discord = require('discord.js');
var mongoose = require("mongoose");
var database = require("../../database.js");

exports.run = (Olivia, message, args, ops) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let mw = args.slice(2).join(' ');
    let boticone = Olivia.user.displayAvatarURL;
    let cor = "#f7d200";

    if (!message.member.hasPermission(["MANAGE_GUILD"]) && message.author.id!== '316989384077475841' ) return message.channel.send(`<:no:471419279955197972> | **${message.author.username}**, você não tem permissão para usar este comando.`);

    database.Guilds.findOne({
        "_id": message.guild.id
    }, function(erro, documento) {

        if (documento) {

            if (!razaou.length < 1) {

                if (message.content.startsWith("o.levelup add msg")) {
                    if (!mw) {

                        var embed = new Discord.RichEmbed()
                        .setColor(cor)
                        .setDescription(`**${message.author.username}**, Está faltando a mensagem!`)

                        message.channel.send(embed);
                    } else {
                      
                      documento.levelupmsg = mw
                      documento.levelup = true
                      documento.save();
                      var embed1 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Mensagem de Level-Up foi alterada para: \n**└**` + '``' + documento.levelupmsg + '``.')
                      message.channel.send(embed1);
                    }
                }

                if (message.content.startsWith("o.levelup remove")) {
                    if (!documento.levelup) {
                      var embed2 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há uma mensagem de Level-Up definida!`)
                      message.channel.send(embed2);
                    } else {
                        documento.levelup = false
                        documento.levelupchannel = "Nenhum"
                        documento.levelupmsg = "Nenhuma"
                        documento.save()
                        var embed3 = new Discord.RichEmbed()
                        .setColor(cor)
                        .setDescription(`**${message.author.username}**, Mensagem de Level-Up removido com sucesso!`)
                        message.channel.send(embed3);
                    }
                }

                if (message.content.startsWith("o.levelup view")) {
                    if (!documento.levelup) {
                      var embed22 = new Discord.RichEmbed()
                      .setColor(cor)
                      .setDescription(`**${message.author.username}**, Não há uma mensagem de Level-Up definida!`)
                      message.channel.send(embed22);
                    } else {
                      var embedwelcomeinfo = new Discord.RichEmbed()
                      .setColor(cor)
                      .setAuthor('Olivia', boticone)
                      .setThumbnail(message.guild.iconURL)
                      .addField('**Mensagem**', '```js\n' + documento.levelupmsg + '```')
                      .addField('**Canal**', '<#' + documento.levelupchannel + '>')
                      message.channel.send(embedwelcomeinfo)
                    }

                }

                if (message.content.startsWith("o.levelup help")) {
                  var embedwelcomeinfo2 = new Discord.RichEmbed()
                  .setColor(cor)
                  .setAuthor('Olivia', boticone)
                  .setThumbnail(message.guild.iconURL)
                  .addField('Como usar', "```css\n{member} menciona o usuário.\n{name} fala no nome do usuário.\n{tag} fala a tag e o nome do usuário.\n{level} mostra o nivel.\n```")
                  message.channel.send(embedwelcomeinfo2)
                }

                if (message.content.startsWith("o.levelup add ch")) {
                  let canal = message.mentions.channels.first()

                  if (!canal) {
                    var embed21 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, Está faltando o canal para receber as mensagens!`)
                      message.channel.send(embed21);

                  } else {

                    documento.levelupchannel = message.mentions.channels.first().id                    
                    documento.save();
                    var embed1 = new Discord.RichEmbed()
                    .setColor(cor)
                    .setDescription(`**${message.author.username}**, O canal ` + '<#' + documento.levelupchannel + '> foi setado para receber as mensagens de Level-Up.')
                    message.channel.send(embed1);
                  }
                }

            } else {

              var embedwelcome = new Discord.RichEmbed()
              .setColor(cor)
              .setAuthor('Olivia', boticone)
              .setThumbnail(message.guild.iconURL)
              .addField("**Como usar:**", "``o.levelup add < msg | ch >``\n``o.levelup remove``\n``o.levelup view``\n``o.levelup help``")
                message.channel.send(embedwelcome);
            }

        } else {

            var servidor = new database.Guilds({
                _id: message.guild.id,
                levelup: false,
                levelupchannel: "Nenhum",
                levelupmsg: "Nenhuma"
            })
            servidor.save()
            var embedresult = new Discord.RichEmbed()
            .setColor(cor)
            .setDescription(`**${message.author.username}**, Use o comando novamente!`)
            message.channel.send(embedresult);

        }

    })

}
